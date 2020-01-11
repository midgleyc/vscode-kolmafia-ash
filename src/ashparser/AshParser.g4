parser grammar AshParser;

options {
	tokenVocab = AshLexer;
}

compilationUnit:
	(miscAshDeclarations | functionDeclaration)* EOF;

miscAshDeclarations:
	importDeclaration
	| notifyDeclaration
	| scriptDeclaration
	| sinceDeclaration;

importDeclaration:
	IMPORT
	(STRING_LITERAL | '<' (IDENTIFIER | '/' | '.')+ '>')
	(';')?;

notifyDeclaration:
	NOTIFY IDENTIFIER ';';

scriptDeclaration:
	SCRIPT STRING_LITERAL (';')?;
	// TODO Syntax with < SCRIPTPATH >

sinceDeclaration:
	SINCE IDENTIFIER (';')?;

functionDeclaration:
	typeTypeOrVoid IDENTIFIER formalParameters (functionBody | ';');

functionBody: block;

typeTypeOrVoid: typeType | VOID;

fieldDeclaration: typeType variableDeclarator ';';

constDeclaration:
	typeType constantDeclarator;

constantDeclarator:
	IDENTIFIER '=' variableInitializer;

variableDeclarator:
	IDENTIFIER ('=' variableInitializer)?;

variableInitializer: expression;

formalParameters: '(' formalParameterList? ')';

formalParameterList:
	formalParameter (',' formalParameter)*;

formalParameter:
	typeType IDENTIFIER;

literal:
	integerLiteral
	| floatLiteral
	| STRING_LITERAL
	| BOOL_LITERAL
	| NULL_LITERAL
	| ashLiteral;

integerLiteral:
	DECIMAL_LITERAL
	| HEX_LITERAL
	| OCT_LITERAL
	| BINARY_LITERAL;

floatLiteral: FLOAT_LITERAL | HEX_FLOAT_LITERAL;

ashLiteral:
	ASH_BOOLEANS_LITERAL
	| ASH_BOUNTY_LITERAL
	| ASH_CLASS_LITERAL
	| ASH_CLASSES_LITERAL
	| ASH_COINMASTER_LITERAL
	| ASH_EFFECT_LITERAL
	| ASH_EFFECTS_LITERAL
	| ASH_ELEMENT_LITERAL
	| ASH_ELEMENTS_LITERAL
	| ASH_FAMILIAR_LITERAL
	| ASH_FAMILIARS_LITERAL
	| ASH_FLOATS_LITERAL
	| ASH_INTS_LITERAL
	| ASH_ITEM_LITERAL
	| ASH_ITEMS_LITERAL
	| ASH_LOCATION_LITERAL
	| ASH_LOCATIONS_LITERAL
	| ASH_MONSTER_LITERAL
	| ASH_MONSTERS_LITERAL
	| ASH_PHYLUM_LITERAL
	| ASH_SERVANT_LITERAL
	| ASH_SKILL_LITERAL
	| ASH_SKILLS_LITERAL
	| ASH_SLOT_LITERAL
	| ASH_SLOTS_LITERAL
	| ASH_STAT_LITERAL
	| ASH_STATS_LITERAL
	| ASH_STRINGS_LITERAL
	| ASH_THRALL_LITERAL;

// ANNOTATIONS

elementValuePairs: elementValuePair (',' elementValuePair)*;

elementValuePair: IDENTIFIER '=' elementValue;

elementValue:
	expression
	| elementValueArrayInitializer;

elementValueArrayInitializer:
	'{' (elementValue (',' elementValue)*)? (',')? '}';

defaultValue: DEFAULT elementValue;

// STATEMENTS / BLOCKS

block: '{' blockStatement* '}';

blockStatement:
	variableDeclaration ';' | statement;

variableDeclaration:
	typeType variableDeclarator;

statement:
	blockLabel = block
	| IF parExpression statement (ELSE statement)?
	| FOR '(' forControl ')' statement
	| foreach statement
	| WHILE parExpression statement
	| DO statement WHILE parExpression ';'
	| TRY block (catchClause+ finallyBlock? | finallyBlock)
	| SWITCH parExpression '{' switchBlockStatementGroup* switchLabel* '}'
	| RETURN expression? ';'
	| THROW expression ';'
	| BREAK IDENTIFIER? ';'
	| CONTINUE IDENTIFIER? ';'
	| SEMI
	| statementExpression = expression ';'
	| identifierLabel = IDENTIFIER ':' statement;

catchClause:
	CATCH '(' catchType IDENTIFIER ')' block;

catchType: IDENTIFIER;

finallyBlock: FINALLY block;

/** Matches cases then statements, both of which are mandatory.
 To handle empty cases at the end,
 * we add switchLabel* to statement.
 */
switchBlockStatementGroup: switchLabel+ blockStatement+;

switchLabel:
	CASE (
		constantExpression = expression
		| enumConstantName = IDENTIFIER
	) ':'
	| DEFAULT ':';

forControl:
	enhancedForControl
	| forInit? ';' expression? ';' forUpdate = expressionList?;

forInit: variableDeclaration | expressionList;

enhancedForControl:
	typeType IDENTIFIER ':' expression;

foreach:
	FOREACH IDENTIFIER (',' IDENTIFIER)? IN expression;

// EXPRESSIONS

parExpression: '(' expression ')';

expressionList: expression (',' expression)*;

methodCall: IDENTIFIER arguments;

expression:
	primary
	| expression bop = '.' (
		IDENTIFIER
		| methodCall
	)
	| expression '[' expression ']'
	| methodCall
	| '(' typeType ')' expression
	| expression postfix = ('++' | '--')
	| prefix = ('+' | '-' | '++' | '--') expression
	| prefix = ('~' | '!') expression
	| expression bop = ('*' | '/' | '%') expression
	| expression bop = ('+' | '-') expression
	| expression ('<' '<' | '>' '>' '>' | '>' '>') expression
	| expression bop = ('<=' | '>=' | '>' | '<') expression
	| expression bop = ('==' | '!=') expression
	| expression bop = '&' expression
	| expression bop = '^' expression
	| expression bop = '|' expression
	| expression bop = '&&' expression
	| expression bop = '||' expression
	| expression bop = '?' expression ':' expression
	| expression CONTAINS expression
	| <assoc = right> expression bop = (
		'='
		| '+='
		| '-='
		| '*='
		| '/='
		| '&='
		| '|='
		| '^='
		| '>>='
		| '>>>='
		| '<<='
		| '%='
	) expression;

primary:
	'(' expression ')'
	| literal
	| IDENTIFIER
	| typeTypeOrVoid;

typeList: typeType (',' typeType)*;

typeType:
	(mapType | primitiveType | ashType);

primitiveType:
	BOOLEAN
	| STRING
	| INT
	| FLOAT;

mapType:
	(IDENTIFIER | primitiveType | ashType) '[' mapTypeKeys ']';

mapTypeKeys:
	(primitiveType | ashType) (',' (primitiveType | ashType))*;

ashType:
	ASH_BOUNTY_TYPE
	| ASH_BUFFER_TYPE
	| ASH_CLASS_TYPE
	| ASH_COINMASTER_TYPE
	| ASH_EFFECT_TYPE
	| ASH_ELEMENT_TYPE
	| ASH_FAMILIAR_TYPE
	| ASH_ITEM_TYPE
	| ASH_LOCATION_TYPE
	| ASH_MATCHER_TYPE
	| ASH_MONSTER_TYPE
	| ASH_PHYLUM_TYPE
	| ASH_SERVANT_TYPE
	| ASH_SKILL_TYPE
	| ASH_SLOT_TYPE
	| ASH_STAT_TYPE
	| ASH_THRALL_TYPE;

arguments: '(' expressionList? ')';