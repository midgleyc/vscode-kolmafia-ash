lexer grammar AshLexer;

// Keywords

BOOLEAN: 'boolean';
BREAK: 'break';
CASE: 'case';
CATCH: 'catch';
CONST: 'const';
CONTAINS: 'contains';
CONTINUE: 'continue';
DEFAULT: 'default';
DO: 'do';
DOUBLE: 'double';
ELSE: 'else';
FINALLY: 'finally';
FLOAT: 'float';
FOR: 'for';
FOREACH: 'foreach';
IF: 'if';
IMPORT: 'import';
IN: 'in';
INT: 'int';
NOTIFY: 'notify';
RETURN: 'return';
SCRIPT: 'script';
SINCE: 'since';
STATIC: 'static';
STRING: 'string';
SWITCH: 'switch';
THROW: 'throw';
TRY: 'try';
VOID: 'void';
WHILE: 'while';

// Literals

DECIMAL_LITERAL: ('0' | [1-9] (Digits? | '_'+ Digits)) [lL]?;
HEX_LITERAL:
	'0' [xX] [0-9a-fA-F] ([0-9a-fA-F_]* [0-9a-fA-F])? [lL]?;
OCT_LITERAL: '0' '_'* [0-7] ([0-7_]* [0-7])? [lL]?;
BINARY_LITERAL: '0' [bB] [01] ([01_]* [01])? [lL]?;

FLOAT_LITERAL: (Digits '.' Digits? | '.' Digits) ExponentPart? [fFdD]?
	| Digits (ExponentPart [fFdD]? | [fFdD]);

HEX_FLOAT_LITERAL:
	'0' [xX] (HexDigits '.'? | HexDigits? '.' HexDigits) [pP] [+-]? Digits [fFdD]?;

BOOL_LITERAL: 'true' | 'false';

STRING_LITERAL:
	('"' (~["\r\n] | EscapeSequence)* '"')
	| ('\'' (~["\r\n] | EscapeSequence)* '\'');

NULL_LITERAL: 'null';

// Special ASH values that we model as literals

ASH_BOOLEANS_LITERAL: '$booleans[' .*? ']';
ASH_BOUNTY_LITERAL: '$bounty[' .*? ']';
ASH_CLASS_LITERAL: '$class[' .*? ']';
ASH_CLASSES_LITERAL: '$classes[' .*? ']';
ASH_COINMASTER_LITERAL: '$coinmaster[' .*? ']';
ASH_EFFECT_LITERAL: '$effect[' .*? ']';
ASH_EFFECTS_LITERAL: '$effects[' .*? ']';
ASH_ELEMENT_LITERAL: '$element[' .*? ']';
ASH_ELEMENTS_LITERAL: '$elements[' .*? ']';
ASH_FAMILIAR_LITERAL: '$familiar[' .*? ']';
ASH_FAMILIARS_LITERAL: '$familiars[' .*? ']';
ASH_FLOATS_LITERAL: '$floats[' .*? ']';
ASH_INTS_LITERAL: '$ints[' .*? ']';
ASH_ITEM_LITERAL: '$item[' .*? ']';
ASH_ITEMS_LITERAL: '$items[' .*? ']';
ASH_LOCATION_LITERAL: '$location[' .*? ']';
ASH_LOCATIONS_LITERAL: '$locations[' .*? ']';
ASH_MONSTER_LITERAL: '$monster[' .*? ']';
ASH_MONSTERS_LITERAL: '$monsters[' .*? ']';
ASH_PHYLUM_LITERAL: '$phylum[' .*? ']';
ASH_SERVANT_LITERAL: '$servant[' .*? ']';
ASH_SKILL_LITERAL: '$skill[' .*? ']';
ASH_SKILLS_LITERAL: '$skills[' .*? ']';
ASH_SLOT_LITERAL: '$slot[' .*? ']';
ASH_SLOTS_LITERAL: '$slots[' .*? ']';
ASH_STAT_LITERAL: '$stat[' .*? ']';
ASH_STATS_LITERAL: '$stats[' .*? ']';
ASH_STRINGS_LITERAL: '$strings[' .*? ']';
ASH_THRALL_LITERAL: '$thrall[' .*? ']';

// Special ASH data types. This should go after the literal values because
// those are more specific and should therefore be matched first

ASH_BOUNTY_TYPE: 'bounty';
ASH_BUFFER_TYPE: 'buffer';
ASH_CLASS_TYPE: 'class';
ASH_COINMASTER_TYPE: 'coinmaster';
ASH_EFFECT_TYPE: 'effect';
ASH_ELEMENT_TYPE: 'element';
ASH_FAMILIAR_TYPE: 'familiar';
ASH_ITEM_TYPE: 'item';
ASH_LOCATION_TYPE: 'location';
ASH_MATCHER_TYPE: 'matcher';
ASH_MONSTER_TYPE: 'monster';
ASH_PHYLUM_TYPE: 'phylum';
ASH_SERVANT_TYPE: 'servant';
ASH_SKILL_TYPE: 'skill';
ASH_SLOT_TYPE: 'slot';
ASH_STAT_TYPE: 'stat';
ASH_THRALL_TYPE: 'thrall';

// Separators

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';
COMMA: ',';
DOT: '.';

// Operators

ASSIGN: '=';
GT: '>';
LT: '<';
BANG: '!';
TILDE: '~';
QUESTION: '?';
COLON: ':';
EQUAL: '==';
LE: '<=';
GE: '>=';
NOTEQUAL: '!=';
AND: '&&';
OR: '||';
INC: '++';
DEC: '--';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
BITAND: '&';
BITOR: '|';
CARET: '^';
MOD: '%';

ADD_ASSIGN: '+=';
SUB_ASSIGN: '-=';
MUL_ASSIGN: '*=';
DIV_ASSIGN: '/=';
AND_ASSIGN: '&=';
OR_ASSIGN: '|=';
XOR_ASSIGN: '^=';
MOD_ASSIGN: '%=';
LSHIFT_ASSIGN: '<<=';
RSHIFT_ASSIGN: '>>=';
URSHIFT_ASSIGN: '>>>=';

// Whitespace and comments

WS: [ \t\r\n\u000C]+ -> channel(HIDDEN);
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT_SLASH: '//' ~[\r\n]* -> channel(HIDDEN);
LINE_COMMENT_POUND: '#' ~[\r\n]* -> channel(HIDDEN);

// Identifiers
// This rule must be last because it is typically the most generic

IDENTIFIER: Letter LetterOrDigit*;

// Fragment rules

fragment ExponentPart: [eE] [+-]? Digits;

fragment EscapeSequence:
	'\\' [btnfr"'\\]
	| '\\' ([0-3]? [0-7])? [0-7]
	| '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit;

fragment HexDigits: HexDigit ((HexDigit | '_')* HexDigit)?;

fragment HexDigit: [0-9a-fA-F];

fragment Digits: [0-9] ([0-9_]* [0-9])?;

fragment LetterOrDigit: Letter | [0-9];

fragment Letter:
	[a-zA-Z$_] // these are the "java letters" below 0x7F
	| ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
	| [\uD800-\uDBFF] [\uDC00-\uDFFF]
		; // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF