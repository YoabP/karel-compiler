var _ = require('lodash');

var helper = require('./analyzer-helpers');
var interCodeIndex = 0;
var interCode = [];

exports.parse = function(tokens) {
    helper.setTokens(tokens);
    interCode[interCodeIndex++] = 'JMP';
    interCodeIndex++;
    program();
    if (interCode[interCode.length - 1] != 'turnoff') {
        console.log('missing turnoff');
        process.exit(0);
    }
    return _.map(interCode, function(d, i) {
        return [i, d];
    });
};

/* Program */
var program = function() {
    if (helper.require('class') && helper.require('program')) {
        if (helper.require('{')) {
            functionsDeclarations();
            mainFunction();
            if (!helper.require('}')) {
                console.log('error on function');
                process.exit(0);
            } 
        } else {
            console.log('error on function');
            process.exit(0);
        }
    } else {
        console.log('error on function');
        process.exit(0);
    }
};

var mainFunction = function() {
    if (helper.require('program') && helper.require('(') &&
        helper.require(')') && helper.require('{')) {
        interCode[1] = interCodeIndex;
        body();
        if (!helper.require('}')) {
                console.log('error on main function 1');
                process.exit(0);
            }
    } else {
        console.log('error on main function 2');
        process.exit(0);
    }
};

/* Functions */
var functionsDeclarations = function() {
    while (helper.read('void')) {
        functionDeclaration();
    }
};

var functionDeclaration = function() {
    if (helper.require('void')) {
        nameFunction();
        if (helper.require('(') && helper.require(')')) {
            if (helper.require('{')) {
                body();
                if (helper.require('}')) {
                    interCode[interCodeIndex++] = 'RETURN';
                } else {
                    console.log('error on function declaration');
                    process.exit(0);
                }
            } else {
                console.log('error on function declaration');
                process.exit(0);
            }
        } else {
            console.log('error on function declaration');
            process.exit(0);
        }
    } else {
        console.log('error on function declaration');
        process.exit(0);
    }
};

var nameFunction = function() {
    var name = helper.fetchToken();
    helper.addNewFunction(name, interCodeIndex);
};

var callFunction = function() {
    nameOfFunction();
    if (helper.require('(')) {
        if (!helper.require(')')) {
            console.log('error on call function');
            process.exit(0);
        }    
    } else {
        console.log('error on call function');
        process.exit(0);
    }  
};

var nameOfFunction = function() {
    if (helper.read('move') || helper.read('turnright') || 
        helper.read('pickbeeper') || helper.read('turnleft') ||
        helper.read('putbeeper') || helper.read('turnoff')) {
        officialFunction();
    } else {
        customerFunction();
    }
};

var officialFunction = function() {
    if (helper.ifRead('turnleft')) {
        interCode[interCodeIndex++] = 'turnleft';
    }  
    else if (helper.ifRead('turnright')) {
        interCode[interCodeIndex++] = 'turnright';
    }
    else if (helper.ifRead('move')) {
        interCode[interCodeIndex++] = 'move';
    }
    else if (helper.ifRead('pickbeeper')) {
        interCode[interCodeIndex++] = 'pickbeeper';
    }
    else if (helper.ifRead('putbeeper')) {
        interCode[interCodeIndex++] = 'putbeeper';
    }
    else if (helper.ifRead('turnoff')) {
        interCode[interCodeIndex++] = 'turnoff';
    }
};
    
var customerFunction = function () {
    var nameFunction = helper.fetchToken();
    var posFunctionInCodeInter = helper.findStartPointOfFunction(nameFunction);
    if (posFunctionInCodeInter !== '0xFF') {
        interCode[interCodeIndex++] = 'CALL';
        interCode[interCodeIndex++] = posFunctionInCodeInter;
    } else {
        console.log('error on customer function');
        process.exit(0);
    }
};

/* Body */
var body = function() {
    expressions();
};

/* Expressions */
var expressions = function() {
    expression();
    expressionsPrima();
};

var expressionsPrima = function() {
    if (!helper.read('}')) {
        expression();
        expressionsPrima();
    }
};

var expression = function() {
    if (!helper.read('}')) {
        if (helper.read('if')) {
            ifExpression();
        }
        else if (helper.read('while')) {
            whileExpression();
        } 
        else if (helper.read('iterate')) {
            iterateExpression();
        } else {
            callFunction();  
        }
    }
};

var ifExpression = function() {
    var x_pos, y_pos;

    if (helper.require('if')) {
        if (helper.require('(')) {
            conditional();
            if (helper.require(')')) {
                if (helper.require('{')) {
                    interCode[interCodeIndex++] = 'JMP';
                    x_pos = interCodeIndex;
                    interCodeIndex++;

                    body();

                    if (!helper.require('}')) {
                        console.log('error on if (missing bracket)');
                        process.exit(0);
                    }

                    if (helper.read('else')) {
                        interCode[interCodeIndex++] = 'JMP';
                        y_pos = interCodeIndex++;
                        interCode[x_pos] = interCodeIndex;

                        elseIf();

                        interCode[y_pos] = interCodeIndex;
                    }
                    else {
                        interCode[x_pos] = interCodeIndex;
                    }
                }
                else {
                    console.log('error on if (missing bracket)');
                    process.exit(0);
                }
            }
            else {
                console.log('error on if');
                process.exit(0);
            }
        }
        else {
            console.log('error on if');
            process.exit(0);
        }
    }
    else {
        console.log('error on if');
        process.exit(0);
    }
};

var elseIf = function() {
    if (helper.require('else'))
    {
        if (helper.require('{'))
        {
            body();
            if (!helper.require('}'))
            {
                console.log('error on elseif');
                process.exit(0);
            }
        }
    }
};

var whileExpression = function() {
    var end_position, start = interCodeIndex;

    if (helper.require('while')) {
        if (helper.require('(')) {
            conditional();
            if (helper.require(')')) {

                interCode[interCodeIndex++] = "JMP"
                end_position = interCodeIndex++;

                if (helper.require('{')) {
                    body();

                    if (helper.require('}')) {
                        interCode[interCodeIndex++] = "JMP"
                        interCode[interCodeIndex++] = start;
                        interCode[end_position] = interCodeIndex;
                    }
                    else {
                        console.log('error on while (missing })');
                        process.exit(0);
                    }
                }
                else {
                    console.log('error on while (missing {)');
                    process.exit(0);
                }
            }
            else {
                console.log('error on while (missing ) )');
                process.exit(0);
            }
        }
        else {
            console.log('error on while (missing ( ))');
            process.exit(0);
        }
    }
};

iterateCounters = 0;
var iterateExpression = function() {
    var start, iterateCounter = iterateCounters++;

    if (helper.require('iterate')) {
        if (helper.require('(')) {
            
            // **************
            // WARNING: does not actually validate numbers
            // **************

            interCode[interCodeIndex++] = "ITE"
            interCode[interCodeIndex++] = iterateCounter;
            interCode[interCodeIndex++] = helper.fetchToken();

            if (helper.require(')')) {
                if (helper.require('{')) {
                    start = interCodeIndex;

                    body();

                    if (helper.require('}')) {
                        interCode[interCodeIndex++] = "DJNZ"
                        interCode[interCodeIndex++] = iterateCounter;
                        interCode[interCodeIndex++] = start;
                    }
                    else {
                        console.log('error on iterate (missing })');
                        process.exit(0);
                    }
                }
                else {
                    console.log('error on iterate (missing {)');
                    process.exit(0);
                }
            }
            else {
                console.log('error on iterate (missing ) )');
                process.exit(0);
            }
        }
        else {
            console.log('error on iterate (missing ( ))');
            process.exit(0);
        }
    }
};

var number = function() {

}

/* Conditionals */
// var isSimpleConditional = function() {
//     return 
//      helper.read('frontIsClear') ||
//      helper.read('leftIsClear') ||
//      helper.read('leftIsBlocked') ||
//      helper.read('rightIsClear') ||
//      helper.read('rightIsBlocked') ||
//      helper.read('nextToABeeper') ||
//      helper.read('notNextToABeeper') ||
//      helper.read('anyBeepersInBeeperBag') ||
//      helper.read('noBeepersInBeeperBag') ||
//      helper.read('facingNorth') ||
//      helper.read('facingSouth') ||
//      helper.read('facingEast') ||
//      helper.read('facingWest') ||
//      helper.read('notFacingNorth') ||
//      helper.read('notFacingSouth') ||
//      helper.read('notFacingEast') ||
//      helper.read('notFacingWest');
// };

var simpleConditional = function() {
    if (helper.ifRead('!')) {
        interCode[interCodeIndex++] = 'NOT';
    }

    if (helper.ifRead('frontIsClear')) interCode[interCodeIndex++] = 'frontIsClear';
    else if (helper.ifRead('frontIsBlocked')) interCode[interCodeIndex++] = 'frontIsBlocked';
    else if (helper.ifRead('leftIsClear')) interCode[interCodeIndex++] = 'leftIsClear';
    else if (helper.ifRead('leftIsBlocked')) interCode[interCodeIndex++] = 'leftIsBlocked';
    else if (helper.ifRead('rightIsClear')) interCode[interCodeIndex++] = 'rightIsClear';
    else if (helper.ifRead('rightIsBlocked')) interCode[interCodeIndex++] = 'rightIsBlocked';
    else if (helper.ifRead('nextToABeeper')) interCode[interCodeIndex++] = 'nextToABeeper';
    else if (helper.ifRead('notNextToABeeper')) interCode[interCodeIndex++] = 'notNextToABeeper';
    else if (helper.ifRead('anyBeepersInBeeperBag')) interCode[interCodeIndex++] = 'anyBeepersInBeeperBag';
    else if (helper.ifRead('noBeepersInBeeperBag')) interCode[interCodeIndex++] = 'noBeepersInBeeperBag';
    else if (helper.ifRead('facingNorth')) interCode[interCodeIndex++] = 'facingNorth';
    else if (helper.ifRead('facingSouth')) interCode[interCodeIndex++] = 'facingSouth';
    else if (helper.ifRead('facingEast')) interCode[interCodeIndex++] = 'facingEast';
    else if (helper.ifRead('facingWest')) interCode[interCodeIndex++] = 'facingWest';
    else if (helper.ifRead('notFacingNorth')) interCode[interCodeIndex++] = 'notFacingNorth';
    else if (helper.ifRead('notFacingSouth')) interCode[interCodeIndex++] = 'notFacingSouth';
    else if (helper.ifRead('notFacingEast')) interCode[interCodeIndex++] = 'notFacingEast';
    else if (helper.ifRead('notFacingWest')) interCode[interCodeIndex++] = 'notFacingWest';
    else console.log({ 'error': 'Not a valid simple conditional' });
};

var conditional = function() {
    // FIXME: Will crash on EOF
    var ahead_token = helper.lookAhead(1).text;

    if (ahead_token === '&&' || ahead_token === '||')
    {
        composedConditional();
    }
    else
    {
        simpleConditional();
    }
};

var composedConditional = function() {
    // FIXME: Will crash on EOF
    var ahead_token = helper.lookAhead(1).text;

    if (ahead_token === '||') {
        interCode[interCodeIndex++] = 'OR';
        simpleConditional();
        helper.require('||');
        simpleConditional();
    }
    else if (ahead_token === '&&') {
        interCode[interCodeIndex++] = 'AND';
        simpleConditional();
        helper.require('&&');
        simpleConditional();
    }
};
