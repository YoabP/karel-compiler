const orientation = [
    {x: 0, y: -1},
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: -1, y: 0}
];

var RuntimeErrors = {
    wall_at_position: "Karel can't pass through a wall",
    no_beeper_at_position: "There are no beepers at this position",
    no_remaining_beepers: "Karel has no beepers to drop"

};

var speed = 500;

var changeSpeed = function(range) {
    speed = 1001 - range * 100;
}

var printWorld = function(world, karel){
    // console.log(karel.beepers, karel.orientation.x, karel.orientation.y);

    for (var i = 0; i < world.rows; i++) {
        var line = '';
        for (var j = 0; j < world.cols; j++) {
            if (karel.x === j && karel.y === i) {
                line += 'K';
            } else if (world.grid[i][j].b > 0) {
                line += world.grid[i][j].b;
            } else if (world.grid[i][j].w) {
                line += '#';
            } else {
                line += '.';
            }
        }
        // console.log(line);
    }
}

evaluator = {
    executions: null,
    idCount: 0,
    evaluate: function(interCode, world) {
        this.idCount = 0;
        // console.log(interCode);

        world = _.cloneDeep(world);
        canvas.reset(world, world.karel);

        this.executions = [{
            counter: 0,
            callStack: [],
            counters: [],
            karel: world.karel[0]
        }];

        this.run(interCode, world);
    },
    destroyChildren: function(execution) {
        _.each(execution.karel.children, function (child) {
            this.destroyChildren(child);
            execution.counter = interCode.length;
            canvas.turnoffKarel(child.karel.id);
        }, this);

        canvas.turnoffKarel(execution.karel.id);
        var index = _.findIndex(this.executions, execution);

        if (index !== -1) {
            this.executions.splice(index);
        }
    },
    run: function(intercode, world) {
        var running = false;
        _.each(this.executions, function (execution, i) {
            if (!execution) return;

            var karelRunning = this.evaluateStep(execution, world, execution.karel);

            running |= karelRunning;

            if (!karelRunning) {
                this.destroyChildren(execution);
            }

        }, this);

        drawBeepers(_.map(this.executions, function(obj) {
            return obj.karel;
        }));

        canvas.drawKarel(_.map(this.executions, function (d) { return d.karel; }));

        if (running) {
            $('#reset-btn').addClass('disabled');
            $('#compile-btn').addClass('disabled');
            $('#errors').text('Running...');
            setTimeout(function() {
                evaluator.run(interCode, world);
            }, speed);
        } else {
            $('#reset-btn').removeClass('disabled');
            $('#errors').text('Finished');
        }
    },
    evaluateCondition: function(execution, conditional, world, karel){
        switch (conditional) {
            case INTERCODE_KEYS.FRONT_IS_CLEAR:
                var frontX = karel.x + karel.orientation.x;
                var frontY = karel.y + karel.orientation.y;
                return !world.grid[frontY][frontX].w;

            case INTERCODE_KEYS.FRONT_IS_BLOCKED:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.FRONT_IS_CLEAR, world, karel);

            case INTERCODE_KEYS.LEFT_IS_CLEAR:
                var orientationIndex = (((karel.orientationIndex - 1) % 4) + 4) % 4;
                var frontX = karel.x + orientation[orientationIndex].x;
                var frontY = karel.y + orientation[orientationIndex].y;
                return !world.grid[frontY][frontX].w;

            case INTERCODE_KEYS.LEFT_IS_BLOCKED:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.LEFT_IS_CLEAR, world, karel);

            case INTERCODE_KEYS.RIGHT_IS_CLEAR:
                var orientationIndex = (((karel.orientationIndex + 1) % 4) + 4) % 4;
                var frontX = karel.x + orientation[orientationIndex].x;
                var frontY = karel.y + orientation[orientationIndex].y;
                return !world.grid[frontY][frontX].w;

            case INTERCODE_KEYS.RIGHT_IS_BLOCKED:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.RIGHT_IS_CLEAR, world, karel);

            case INTERCODE_KEYS.NEXT_TO_A_BEEPER:
                return (world.grid[karel.y][karel.x].b > 0);

            case INTERCODE_KEYS.NOT_NEXT_TO_A_BEEPER:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.NEXT_TO_A_BEEPER, world, karel);

            case INTERCODE_KEYS.ANY_BEEPERS_IN_BEEPER_BAG:
                return (karel.beepers > 0);

            case INTERCODE_KEYS.NOT_ANY_BEEPERS_IN_BEEPER_BAG:
                return (karel.beepers === 0);

            case INTERCODE_KEYS.FACING_NORTH:
                return (karel.orientationIndex === 0);

            case INTERCODE_KEYS.FACING_EAST:
                return (karel.orientationIndex === 1);

            case INTERCODE_KEYS.FACING_SOUTH:
                return (karel.orientationIndex === 2);

            case INTERCODE_KEYS.FACING_WEST:
                return (karel.orientationIndex === 3);

            case INTERCODE_KEYS.NOT_FACING_NORTH:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.FACING_NORTH, world, karel);

            case INTERCODE_KEYS.NOT_FACING_EAST:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.FACING_EAST, world, karel);

            case INTERCODE_KEYS.NOT_FACING_SOUTH:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.FACING_SOUTH, world, karel);

            case INTERCODE_KEYS.NOT_FACING_WEST:
                return !this.evaluateCondition(execution, INTERCODE_KEYS.FACING_WEST, world, karel);
        }
    },
    evaluateStep: function(execution, world, karel) {
        if (execution.counter >= interCode.length) {
            return false;
        }
        var op = interCode[execution.counter],
            finished_step = false;
        
        while (!finished_step){
            var op = interCode[execution.counter];

            // printWorld(world, karel);
            // console.log(op);

            switch (op) {
                case INTERCODE_KEYS.JMP:
                    execution.counter = interCode[execution.counter+1];
                    continue;

                case INTERCODE_KEYS.CALL:
                    execution.callStack.push(execution.counter+2);
                    execution.counter = interCode[execution.counter+1];
                    continue;

                case INTERCODE_KEYS.RET:
                    execution.counter = execution.callStack.pop();
                    continue;

                case INTERCODE_KEYS.ITE:
                    execution.counters.push(interCode[execution.counter+1]);
                    execution.counter += 2;
                    continue;

                case INTERCODE_KEYS.DECJMP:
                    if (--execution.counters[execution.counters.length - 1] === 0) {
                        execution.counter += 2;
                        execution.counters.pop();
                    } else {
                        execution.counter = interCode[execution.counter+1];
                    }
                    continue;
                case INTERCODE_KEYS.MOVE:
                    karel.x += karel.orientation.x;
                    karel.y += karel.orientation.y;

                    if (world.grid[karel.y][karel.x].w) {
                        this.throwRuntimeError(RuntimeErrors.wall_at_position);
                    }
                    break;

                case INTERCODE_KEYS.TURN_LEFT:
                    // console.log('TURN LEFT');
                    karel.orientationIndex = (((karel.orientationIndex - 1) % 4) + 4) % 4;
                    karel.orientation = orientation[karel.orientationIndex];
                    break;

                case INTERCODE_KEYS.PICK_BEEPER:
                    if (world.grid[karel.y][karel.x].b === 0) {
                        this.throwRuntimeError(RuntimeErrors.no_beeper_at_position);
                    } else {
                        world.grid[karel.y][karel.x].b--;
                        karel.beepers++;
                        karel.interactedWithBeeper = true;
                        canvas.setBeepers(karel.x, karel.y, world.grid[karel.y][karel.x].b);
                        $("#karel_" + karel.id).text(karel.beepers);
                    }
    
                    break;

                case INTERCODE_KEYS.PUT_BEEPER:
                    if (karel.beepers > 0) {
                        world.grid[karel.y][karel.x].b++;
                        karel.beepers--;
                        canvas.setBeepers(karel.x, karel.y, world.grid[karel.y][karel.x].b);
                        karel.interactedWithBeeper = true;
                        $("#karel_" + karel.id).text(karel.beepers);
                    } else {
                        this.throwRuntimeError(RuntimeErrors.no_remaining_beepers);
                    }
                    
                    break;

                case INTERCODE_KEYS.IF:
                    var operatorStack = [];
                    var conditionalStack = [];
                    var element = null;
                    var operator = null;

                    do {
                        element = interCode[++execution.counter];
                        if (element === INTERCODE_KEYS.AND || element === INTERCODE_KEYS.OR || element === INTERCODE_KEYS.NOT) {
                            operatorStack.push(element);
                        } else {
                            conditionalStack.push(this.evaluateCondition(execution, element, world, karel));
                        }
                    } while (interCode[execution.counter + 1] !== 'JMP');

                    while (operatorStack.length > 0) {
                        operator = operatorStack.pop();
                        if (operator === 'NOT') {
                            conditionalStack.push(!conditionalStack.pop());
                        } else if (operator === 'AND') {
                            conditionalStack.push(conditionalStack.pop() && conditionalStack.pop());
                        } else if (operator === 'OR') {
                            conditionalStack.push(conditionalStack.pop() || conditionalStack.pop());
                        }
                    }
                    
                    // console.log(conditionalStack[0]);
                    if (conditionalStack.pop()) {
                        execution.counter += 2;
                    }
                    
                    break;

                case INTERCODE_KEYS.WHILE:
                    var operatorStack = [];
                    var conditionalStack = [];
                    var element = null;
                    var operator = null;

                    do {
                        element = interCode[++execution.counter];
                        if (element === INTERCODE_KEYS.AND || element === INTERCODE_KEYS.OR || element === INTERCODE_KEYS.NOT) {
                            operatorStack.push(element);
                        } else {
                            conditionalStack.push(this.evaluateCondition(execution, element, world, karel));
                        }
                    } while (interCode[execution.counter + 1] !== 'JMP');

                    while (operatorStack.length > 0) {
                        operator = operatorStack.pop();
                        if (operator === 'NOT') {
                            conditionalStack.push(!conditionalStack.pop());
                        } else if (operator === 'AND') {
                            conditionalStack.push(conditionalStack.pop() && conditionalStack.pop());
                        } else if (operator === 'OR') {
                            conditionalStack.push(conditionalStack.pop() || conditionalStack.pop());
                        }
                    }
                    
                    // console.log(conditionalStack[0]);
                    if (conditionalStack.pop()) {
                        execution.counter += 2;
                    }
                    
                    break;
                case INTERCODE_KEYS.CLONE:
                    var tmpKarel = {
                        counter: interCode[execution.counter + 1],
                        callStack: [interCode.length - 1],
                        counters: [],
                        karel: {
                            "x": karel.x,
                            "y": karel.y,
                            "id": ++this.idCount,
                            "beepers": karel.beepers,
                            "orientationIndex": karel.orientationIndex,
                            "orientation": {
                                x: karel.orientation.x,
                                y: karel.orientation.y
                            },
                            "children": []
                        }
                    };
                    this.executions.push(tmpKarel);
                    karel.children.push(tmpKarel);

                    execution.counter++;
                    drawBeepers(_.map(this.executions, function(obj) {
                        return obj.karel;
                    }));
                    break;

                case INTERCODE_KEYS.TURN_OFF:
                    execution.counter = interCode.length;
                    break;
            }

            execution.counter++;
            finished_step = true;
        }
        
        return execution.counter < interCode.length;
    },
    throwRuntimeError: function(error) {
        $("#errors").text("Runtime Error: " + error);
        // console.log(error);
        throw new Error(error);
    }
};