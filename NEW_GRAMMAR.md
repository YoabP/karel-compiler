# karel-compiler
Grammar used on the karel-compiler project:

<program> ::= "class" "program" "{" <functions declarations> <main function> "}"

<main function> ::= "program" "(" ")" "{" <body> "}"

<functions declarations> ::= <function declaration>*

<function declaration> := "void" <name function> "(" ")" "{" <body> "}"

/<name function> ::= semantic: add function name to token table.

<call function> ::= <name of function> "(" ")"

<name of function> ::= <official function> | <customer function>

<official function> ::=
    "turnleft" |
    "move" |
    "pickbeeper" |
    "putbeeper" |
    "turnoff"

/<customer function> ::= semantic: calls a function previously added to the token table.

<body> ::= <expressions>

<expressions> ::= <expression> <expressions prima>

<expressions prima> ::= [<expression> <expressions prima>]

<expression> ::= [<if expression> | <while expression> | <iterate expression> | <clone expression> | <call function>]

<if expression> ::= "if" "(" <conditional> ")" "{" <body> "}" [<else if>]

<else if> ::= "else" "{" <body> "}"

<while expression> ::= "while" "(" <conditional> ")" "{" <body> "}"

<clone expression> ::= "clone" "(" <customer function> ")"

<iterate expression> ::= "iterate" "(" <number> ")" "{" <body> "}"

<conditional> :: = <composed conditional> | <simple conditional>

<simple conditional> :: = "frontIsClear" | "frontIsBlocked" | "leftIsClear" | "leftIsBlocked" | "rightIsClear" | "rightIsBlocked" | "nextToABeeper" | "notNextToABeeper" | "anyBeepersInBeeperBag" | "noBeepersInBeeperBag" | "facingNorth" | "facingSouth" | "facingEast" | "facingWest" | "notFacingNorth" | "notFacingSouth" | "notFacingEast" | "notFacingWest"

<composed conditional> ::= <simple conditional> "||" <simple conditional> | <simple conditional> "&&" <simple conditional>
