// Generated from src/ashparser/AshParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AshParserListener } from "./AshParserListener";
import { AshParserVisitor } from "./AshParserVisitor";


export class AshParser extends Parser {
	public static readonly BOOLEAN = 1;
	public static readonly BREAK = 2;
	public static readonly CASE = 3;
	public static readonly CATCH = 4;
	public static readonly CONST = 5;
	public static readonly CONTAINS = 6;
	public static readonly CONTINUE = 7;
	public static readonly DEFAULT = 8;
	public static readonly DO = 9;
	public static readonly DOUBLE = 10;
	public static readonly ELSE = 11;
	public static readonly FINALLY = 12;
	public static readonly FLOAT = 13;
	public static readonly FOR = 14;
	public static readonly FOREACH = 15;
	public static readonly IF = 16;
	public static readonly IMPORT = 17;
	public static readonly IN = 18;
	public static readonly INT = 19;
	public static readonly NOTIFY = 20;
	public static readonly RETURN = 21;
	public static readonly SCRIPT = 22;
	public static readonly SINCE = 23;
	public static readonly STATIC = 24;
	public static readonly STRING = 25;
	public static readonly SWITCH = 26;
	public static readonly THROW = 27;
	public static readonly TRY = 28;
	public static readonly VOID = 29;
	public static readonly WHILE = 30;
	public static readonly DECIMAL_LITERAL = 31;
	public static readonly HEX_LITERAL = 32;
	public static readonly OCT_LITERAL = 33;
	public static readonly BINARY_LITERAL = 34;
	public static readonly FLOAT_LITERAL = 35;
	public static readonly HEX_FLOAT_LITERAL = 36;
	public static readonly BOOL_LITERAL = 37;
	public static readonly STRING_LITERAL = 38;
	public static readonly NULL_LITERAL = 39;
	public static readonly ASH_BOOLEANS_LITERAL = 40;
	public static readonly ASH_BOUNTY_LITERAL = 41;
	public static readonly ASH_CLASS_LITERAL = 42;
	public static readonly ASH_CLASSES_LITERAL = 43;
	public static readonly ASH_COINMASTER_LITERAL = 44;
	public static readonly ASH_EFFECT_LITERAL = 45;
	public static readonly ASH_EFFECTS_LITERAL = 46;
	public static readonly ASH_ELEMENT_LITERAL = 47;
	public static readonly ASH_ELEMENTS_LITERAL = 48;
	public static readonly ASH_FAMILIAR_LITERAL = 49;
	public static readonly ASH_FAMILIARS_LITERAL = 50;
	public static readonly ASH_FLOATS_LITERAL = 51;
	public static readonly ASH_INTS_LITERAL = 52;
	public static readonly ASH_ITEM_LITERAL = 53;
	public static readonly ASH_ITEMS_LITERAL = 54;
	public static readonly ASH_LOCATION_LITERAL = 55;
	public static readonly ASH_LOCATIONS_LITERAL = 56;
	public static readonly ASH_MONSTER_LITERAL = 57;
	public static readonly ASH_MONSTERS_LITERAL = 58;
	public static readonly ASH_PHYLUM_LITERAL = 59;
	public static readonly ASH_SERVANT_LITERAL = 60;
	public static readonly ASH_SKILL_LITERAL = 61;
	public static readonly ASH_SKILLS_LITERAL = 62;
	public static readonly ASH_SLOT_LITERAL = 63;
	public static readonly ASH_SLOTS_LITERAL = 64;
	public static readonly ASH_STAT_LITERAL = 65;
	public static readonly ASH_STATS_LITERAL = 66;
	public static readonly ASH_STRINGS_LITERAL = 67;
	public static readonly ASH_THRALL_LITERAL = 68;
	public static readonly ASH_BOUNTY_TYPE = 69;
	public static readonly ASH_BUFFER_TYPE = 70;
	public static readonly ASH_CLASS_TYPE = 71;
	public static readonly ASH_COINMASTER_TYPE = 72;
	public static readonly ASH_EFFECT_TYPE = 73;
	public static readonly ASH_ELEMENT_TYPE = 74;
	public static readonly ASH_FAMILIAR_TYPE = 75;
	public static readonly ASH_ITEM_TYPE = 76;
	public static readonly ASH_LOCATION_TYPE = 77;
	public static readonly ASH_MATCHER_TYPE = 78;
	public static readonly ASH_MONSTER_TYPE = 79;
	public static readonly ASH_PHYLUM_TYPE = 80;
	public static readonly ASH_SERVANT_TYPE = 81;
	public static readonly ASH_SKILL_TYPE = 82;
	public static readonly ASH_SLOT_TYPE = 83;
	public static readonly ASH_STAT_TYPE = 84;
	public static readonly ASH_THRALL_TYPE = 85;
	public static readonly LPAREN = 86;
	public static readonly RPAREN = 87;
	public static readonly LBRACE = 88;
	public static readonly RBRACE = 89;
	public static readonly LBRACK = 90;
	public static readonly RBRACK = 91;
	public static readonly SEMI = 92;
	public static readonly COMMA = 93;
	public static readonly DOT = 94;
	public static readonly ASSIGN = 95;
	public static readonly GT = 96;
	public static readonly LT = 97;
	public static readonly BANG = 98;
	public static readonly TILDE = 99;
	public static readonly QUESTION = 100;
	public static readonly COLON = 101;
	public static readonly EQUAL = 102;
	public static readonly LE = 103;
	public static readonly GE = 104;
	public static readonly NOTEQUAL = 105;
	public static readonly AND = 106;
	public static readonly OR = 107;
	public static readonly INC = 108;
	public static readonly DEC = 109;
	public static readonly ADD = 110;
	public static readonly SUB = 111;
	public static readonly MUL = 112;
	public static readonly DIV = 113;
	public static readonly BITAND = 114;
	public static readonly BITOR = 115;
	public static readonly CARET = 116;
	public static readonly MOD = 117;
	public static readonly ADD_ASSIGN = 118;
	public static readonly SUB_ASSIGN = 119;
	public static readonly MUL_ASSIGN = 120;
	public static readonly DIV_ASSIGN = 121;
	public static readonly AND_ASSIGN = 122;
	public static readonly OR_ASSIGN = 123;
	public static readonly XOR_ASSIGN = 124;
	public static readonly MOD_ASSIGN = 125;
	public static readonly LSHIFT_ASSIGN = 126;
	public static readonly RSHIFT_ASSIGN = 127;
	public static readonly URSHIFT_ASSIGN = 128;
	public static readonly WS = 129;
	public static readonly COMMENT = 130;
	public static readonly LINE_COMMENT_SLASH = 131;
	public static readonly LINE_COMMENT_POUND = 132;
	public static readonly IDENTIFIER = 133;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_miscAshDeclarations = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_notifyDeclaration = 3;
	public static readonly RULE_scriptDeclaration = 4;
	public static readonly RULE_sinceDeclaration = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_functionBody = 7;
	public static readonly RULE_typeTypeOrVoid = 8;
	public static readonly RULE_fieldDeclaration = 9;
	public static readonly RULE_constDeclaration = 10;
	public static readonly RULE_constantDeclarator = 11;
	public static readonly RULE_variableDeclarator = 12;
	public static readonly RULE_variableInitializer = 13;
	public static readonly RULE_formalParameters = 14;
	public static readonly RULE_formalParameterList = 15;
	public static readonly RULE_formalParameter = 16;
	public static readonly RULE_literal = 17;
	public static readonly RULE_integerLiteral = 18;
	public static readonly RULE_floatLiteral = 19;
	public static readonly RULE_ashLiteral = 20;
	public static readonly RULE_elementValuePairs = 21;
	public static readonly RULE_elementValuePair = 22;
	public static readonly RULE_elementValue = 23;
	public static readonly RULE_elementValueArrayInitializer = 24;
	public static readonly RULE_defaultValue = 25;
	public static readonly RULE_block = 26;
	public static readonly RULE_blockStatement = 27;
	public static readonly RULE_variableDeclaration = 28;
	public static readonly RULE_statement = 29;
	public static readonly RULE_catchClause = 30;
	public static readonly RULE_catchType = 31;
	public static readonly RULE_finallyBlock = 32;
	public static readonly RULE_switchBlockStatementGroup = 33;
	public static readonly RULE_switchLabel = 34;
	public static readonly RULE_forControl = 35;
	public static readonly RULE_forInit = 36;
	public static readonly RULE_enhancedForControl = 37;
	public static readonly RULE_foreach = 38;
	public static readonly RULE_parExpression = 39;
	public static readonly RULE_expressionList = 40;
	public static readonly RULE_methodCall = 41;
	public static readonly RULE_expression = 42;
	public static readonly RULE_primary = 43;
	public static readonly RULE_typeList = 44;
	public static readonly RULE_typeType = 45;
	public static readonly RULE_primitiveType = 46;
	public static readonly RULE_mapType = 47;
	public static readonly RULE_mapTypeKeys = 48;
	public static readonly RULE_ashType = 49;
	public static readonly RULE_arguments = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "miscAshDeclarations", "importDeclaration", "notifyDeclaration", 
		"scriptDeclaration", "sinceDeclaration", "functionDeclaration", "functionBody", 
		"typeTypeOrVoid", "fieldDeclaration", "constDeclaration", "constantDeclarator", 
		"variableDeclarator", "variableInitializer", "formalParameters", "formalParameterList", 
		"formalParameter", "literal", "integerLiteral", "floatLiteral", "ashLiteral", 
		"elementValuePairs", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"defaultValue", "block", "blockStatement", "variableDeclaration", "statement", 
		"catchClause", "catchType", "finallyBlock", "switchBlockStatementGroup", 
		"switchLabel", "forControl", "forInit", "enhancedForControl", "foreach", 
		"parExpression", "expressionList", "methodCall", "expression", "primary", 
		"typeList", "typeType", "primitiveType", "mapType", "mapTypeKeys", "ashType", 
		"arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'boolean'", "'break'", "'case'", "'catch'", "'const'", "'contains'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'finally'", 
		"'float'", "'for'", "'foreach'", "'if'", "'import'", "'in'", "'int'", 
		"'notify'", "'return'", "'script'", "'since'", "'static'", "'string'", 
		"'switch'", "'throw'", "'try'", "'void'", "'while'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'null'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'bounty'", "'buffer'", "'class'", "'coinmaster'", "'effect'", 
		"'element'", "'familiar'", "'item'", "'location'", "'matcher'", "'monster'", 
		"'phylum'", "'servant'", "'skill'", "'slot'", "'stat'", "'thrall'", "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", 
		"'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
		"'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", 
		"'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", 
		"'<<='", "'>>='", "'>>>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BOOLEAN", "BREAK", "CASE", "CATCH", "CONST", "CONTAINS", "CONTINUE", 
		"DEFAULT", "DO", "DOUBLE", "ELSE", "FINALLY", "FLOAT", "FOR", "FOREACH", 
		"IF", "IMPORT", "IN", "INT", "NOTIFY", "RETURN", "SCRIPT", "SINCE", "STATIC", 
		"STRING", "SWITCH", "THROW", "TRY", "VOID", "WHILE", "DECIMAL_LITERAL", 
		"HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "ASH_BOOLEANS_LITERAL", 
		"ASH_BOUNTY_LITERAL", "ASH_CLASS_LITERAL", "ASH_CLASSES_LITERAL", "ASH_COINMASTER_LITERAL", 
		"ASH_EFFECT_LITERAL", "ASH_EFFECTS_LITERAL", "ASH_ELEMENT_LITERAL", "ASH_ELEMENTS_LITERAL", 
		"ASH_FAMILIAR_LITERAL", "ASH_FAMILIARS_LITERAL", "ASH_FLOATS_LITERAL", 
		"ASH_INTS_LITERAL", "ASH_ITEM_LITERAL", "ASH_ITEMS_LITERAL", "ASH_LOCATION_LITERAL", 
		"ASH_LOCATIONS_LITERAL", "ASH_MONSTER_LITERAL", "ASH_MONSTERS_LITERAL", 
		"ASH_PHYLUM_LITERAL", "ASH_SERVANT_LITERAL", "ASH_SKILL_LITERAL", "ASH_SKILLS_LITERAL", 
		"ASH_SLOT_LITERAL", "ASH_SLOTS_LITERAL", "ASH_STAT_LITERAL", "ASH_STATS_LITERAL", 
		"ASH_STRINGS_LITERAL", "ASH_THRALL_LITERAL", "ASH_BOUNTY_TYPE", "ASH_BUFFER_TYPE", 
		"ASH_CLASS_TYPE", "ASH_COINMASTER_TYPE", "ASH_EFFECT_TYPE", "ASH_ELEMENT_TYPE", 
		"ASH_FAMILIAR_TYPE", "ASH_ITEM_TYPE", "ASH_LOCATION_TYPE", "ASH_MATCHER_TYPE", 
		"ASH_MONSTER_TYPE", "ASH_PHYLUM_TYPE", "ASH_SERVANT_TYPE", "ASH_SKILL_TYPE", 
		"ASH_SLOT_TYPE", "ASH_STAT_TYPE", "ASH_THRALL_TYPE", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", 
		"GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", "GE", 
		"NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
		"BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "WS", "COMMENT", "LINE_COMMENT_SLASH", 
		"LINE_COMMENT_POUND", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AshParser._LITERAL_NAMES, AshParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AshParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "AshParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return AshParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AshParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AshParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AshParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.IMPORT) | (1 << AshParser.INT) | (1 << AshParser.NOTIFY) | (1 << AshParser.SCRIPT) | (1 << AshParser.SINCE) | (1 << AshParser.STRING) | (1 << AshParser.VOID))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (AshParser.ASH_BOUNTY_TYPE - 69)) | (1 << (AshParser.ASH_BUFFER_TYPE - 69)) | (1 << (AshParser.ASH_CLASS_TYPE - 69)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 69)) | (1 << (AshParser.ASH_EFFECT_TYPE - 69)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 69)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 69)) | (1 << (AshParser.ASH_ITEM_TYPE - 69)) | (1 << (AshParser.ASH_LOCATION_TYPE - 69)) | (1 << (AshParser.ASH_MATCHER_TYPE - 69)) | (1 << (AshParser.ASH_MONSTER_TYPE - 69)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 69)) | (1 << (AshParser.ASH_SERVANT_TYPE - 69)) | (1 << (AshParser.ASH_SKILL_TYPE - 69)) | (1 << (AshParser.ASH_SLOT_TYPE - 69)) | (1 << (AshParser.ASH_STAT_TYPE - 69)) | (1 << (AshParser.ASH_THRALL_TYPE - 69)))) !== 0) || _la === AshParser.IDENTIFIER) {
				{
				this.state = 105;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.miscAshDeclarations();
					}
					break;

				case 2:
					{
					this.state = 103;
					this.functionDeclaration();
					}
					break;

				case 3:
					{
					this.state = 104;
					this.fieldDeclaration();
					}
					break;
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(AshParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public miscAshDeclarations(): MiscAshDeclarationsContext {
		let _localctx: MiscAshDeclarationsContext = new MiscAshDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AshParser.RULE_miscAshDeclarations);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.importDeclaration();
				}
				break;
			case AshParser.NOTIFY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.notifyDeclaration();
				}
				break;
			case AshParser.SCRIPT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.scriptDeclaration();
				}
				break;
			case AshParser.SINCE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.sinceDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AshParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(AshParser.IMPORT);
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.STRING_LITERAL:
				{
				this.state = 119;
				this.match(AshParser.STRING_LITERAL);
				}
				break;
			case AshParser.LT:
				{
				this.state = 120;
				this.match(AshParser.LT);
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 121;
					_la = this._input.LA(1);
					if (!(_la === AshParser.DOT || _la === AshParser.DIV || _la === AshParser.IDENTIFIER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AshParser.DOT || _la === AshParser.DIV || _la === AshParser.IDENTIFIER);
				this.state = 126;
				this.match(AshParser.GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.SEMI) {
				{
				this.state = 129;
				this.match(AshParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notifyDeclaration(): NotifyDeclarationContext {
		let _localctx: NotifyDeclarationContext = new NotifyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AshParser.RULE_notifyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(AshParser.NOTIFY);
			this.state = 133;
			this.match(AshParser.IDENTIFIER);
			this.state = 134;
			this.match(AshParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scriptDeclaration(): ScriptDeclarationContext {
		let _localctx: ScriptDeclarationContext = new ScriptDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AshParser.RULE_scriptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(AshParser.SCRIPT);
			this.state = 137;
			this.match(AshParser.STRING_LITERAL);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.SEMI) {
				{
				this.state = 138;
				this.match(AshParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sinceDeclaration(): SinceDeclarationContext {
		let _localctx: SinceDeclarationContext = new SinceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AshParser.RULE_sinceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(AshParser.SINCE);
			this.state = 142;
			this.match(AshParser.IDENTIFIER);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.SEMI) {
				{
				this.state = 143;
				this.match(AshParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AshParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.typeTypeOrVoid();
			this.state = 147;
			this.match(AshParser.IDENTIFIER);
			this.state = 148;
			this.formalParameters();
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.LBRACE:
				{
				this.state = 149;
				this.functionBody();
				}
				break;
			case AshParser.SEMI:
				{
				this.state = 150;
				this.match(AshParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AshParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AshParser.RULE_typeTypeOrVoid);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.BOOLEAN:
			case AshParser.FLOAT:
			case AshParser.INT:
			case AshParser.STRING:
			case AshParser.ASH_BOUNTY_TYPE:
			case AshParser.ASH_BUFFER_TYPE:
			case AshParser.ASH_CLASS_TYPE:
			case AshParser.ASH_COINMASTER_TYPE:
			case AshParser.ASH_EFFECT_TYPE:
			case AshParser.ASH_ELEMENT_TYPE:
			case AshParser.ASH_FAMILIAR_TYPE:
			case AshParser.ASH_ITEM_TYPE:
			case AshParser.ASH_LOCATION_TYPE:
			case AshParser.ASH_MATCHER_TYPE:
			case AshParser.ASH_MONSTER_TYPE:
			case AshParser.ASH_PHYLUM_TYPE:
			case AshParser.ASH_SERVANT_TYPE:
			case AshParser.ASH_SKILL_TYPE:
			case AshParser.ASH_SLOT_TYPE:
			case AshParser.ASH_STAT_TYPE:
			case AshParser.ASH_THRALL_TYPE:
			case AshParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.typeType();
				}
				break;
			case AshParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.match(AshParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AshParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.typeType();
			this.state = 160;
			this.variableDeclarator();
			this.state = 161;
			this.match(AshParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AshParser.RULE_constDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.typeType();
			this.state = 164;
			this.constantDeclarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AshParser.RULE_constantDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(AshParser.IDENTIFIER);
			this.state = 167;
			this.match(AshParser.ASSIGN);
			this.state = 168;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AshParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(AshParser.IDENTIFIER);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.ASSIGN) {
				{
				this.state = 171;
				this.match(AshParser.ASSIGN);
				this.state = 172;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AshParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AshParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(AshParser.LPAREN);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (AshParser.ASH_BOUNTY_TYPE - 69)) | (1 << (AshParser.ASH_BUFFER_TYPE - 69)) | (1 << (AshParser.ASH_CLASS_TYPE - 69)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 69)) | (1 << (AshParser.ASH_EFFECT_TYPE - 69)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 69)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 69)) | (1 << (AshParser.ASH_ITEM_TYPE - 69)) | (1 << (AshParser.ASH_LOCATION_TYPE - 69)) | (1 << (AshParser.ASH_MATCHER_TYPE - 69)) | (1 << (AshParser.ASH_MONSTER_TYPE - 69)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 69)) | (1 << (AshParser.ASH_SERVANT_TYPE - 69)) | (1 << (AshParser.ASH_SKILL_TYPE - 69)) | (1 << (AshParser.ASH_SLOT_TYPE - 69)) | (1 << (AshParser.ASH_STAT_TYPE - 69)) | (1 << (AshParser.ASH_THRALL_TYPE - 69)))) !== 0) || _la === AshParser.IDENTIFIER) {
				{
				this.state = 178;
				this.formalParameterList();
				}
			}

			this.state = 181;
			this.match(AshParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AshParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.formalParameter();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AshParser.COMMA) {
				{
				{
				this.state = 184;
				this.match(AshParser.COMMA);
				this.state = 185;
				this.formalParameter();
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AshParser.RULE_formalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.typeType();
			this.state = 192;
			this.match(AshParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AshParser.RULE_literal);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.DECIMAL_LITERAL:
			case AshParser.HEX_LITERAL:
			case AshParser.OCT_LITERAL:
			case AshParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.integerLiteral();
				}
				break;
			case AshParser.FLOAT_LITERAL:
			case AshParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.floatLiteral();
				}
				break;
			case AshParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.match(AshParser.STRING_LITERAL);
				}
				break;
			case AshParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				this.match(AshParser.BOOL_LITERAL);
				}
				break;
			case AshParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 198;
				this.match(AshParser.NULL_LITERAL);
				}
				break;
			case AshParser.ASH_BOOLEANS_LITERAL:
			case AshParser.ASH_BOUNTY_LITERAL:
			case AshParser.ASH_CLASS_LITERAL:
			case AshParser.ASH_CLASSES_LITERAL:
			case AshParser.ASH_COINMASTER_LITERAL:
			case AshParser.ASH_EFFECT_LITERAL:
			case AshParser.ASH_EFFECTS_LITERAL:
			case AshParser.ASH_ELEMENT_LITERAL:
			case AshParser.ASH_ELEMENTS_LITERAL:
			case AshParser.ASH_FAMILIAR_LITERAL:
			case AshParser.ASH_FAMILIARS_LITERAL:
			case AshParser.ASH_FLOATS_LITERAL:
			case AshParser.ASH_INTS_LITERAL:
			case AshParser.ASH_ITEM_LITERAL:
			case AshParser.ASH_ITEMS_LITERAL:
			case AshParser.ASH_LOCATION_LITERAL:
			case AshParser.ASH_LOCATIONS_LITERAL:
			case AshParser.ASH_MONSTER_LITERAL:
			case AshParser.ASH_MONSTERS_LITERAL:
			case AshParser.ASH_PHYLUM_LITERAL:
			case AshParser.ASH_SERVANT_LITERAL:
			case AshParser.ASH_SKILL_LITERAL:
			case AshParser.ASH_SKILLS_LITERAL:
			case AshParser.ASH_SLOT_LITERAL:
			case AshParser.ASH_SLOTS_LITERAL:
			case AshParser.ASH_STAT_LITERAL:
			case AshParser.ASH_STATS_LITERAL:
			case AshParser.ASH_STRINGS_LITERAL:
			case AshParser.ASH_THRALL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 199;
				this.ashLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AshParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (AshParser.DECIMAL_LITERAL - 31)) | (1 << (AshParser.HEX_LITERAL - 31)) | (1 << (AshParser.OCT_LITERAL - 31)) | (1 << (AshParser.BINARY_LITERAL - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AshParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			_la = this._input.LA(1);
			if (!(_la === AshParser.FLOAT_LITERAL || _la === AshParser.HEX_FLOAT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ashLiteral(): AshLiteralContext {
		let _localctx: AshLiteralContext = new AshLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AshParser.RULE_ashLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AshParser.ASH_BOOLEANS_LITERAL - 40)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 40)) | (1 << (AshParser.ASH_CLASS_LITERAL - 40)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 40)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 40)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 40)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 40)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 40)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 40)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 40)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 40)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 40)) | (1 << (AshParser.ASH_INTS_LITERAL - 40)) | (1 << (AshParser.ASH_ITEM_LITERAL - 40)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 40)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 40)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 40)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 40)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 40)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 40)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 40)) | (1 << (AshParser.ASH_SKILL_LITERAL - 40)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 40)) | (1 << (AshParser.ASH_SLOT_LITERAL - 40)) | (1 << (AshParser.ASH_SLOTS_LITERAL - 40)) | (1 << (AshParser.ASH_STAT_LITERAL - 40)) | (1 << (AshParser.ASH_STATS_LITERAL - 40)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 40)) | (1 << (AshParser.ASH_THRALL_LITERAL - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AshParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.elementValuePair();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AshParser.COMMA) {
				{
				{
				this.state = 209;
				this.match(AshParser.COMMA);
				this.state = 210;
				this.elementValuePair();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AshParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(AshParser.IDENTIFIER);
			this.state = 217;
			this.match(AshParser.ASSIGN);
			this.state = 218;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AshParser.RULE_elementValue);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.BOOLEAN:
			case AshParser.FLOAT:
			case AshParser.INT:
			case AshParser.STRING:
			case AshParser.VOID:
			case AshParser.DECIMAL_LITERAL:
			case AshParser.HEX_LITERAL:
			case AshParser.OCT_LITERAL:
			case AshParser.BINARY_LITERAL:
			case AshParser.FLOAT_LITERAL:
			case AshParser.HEX_FLOAT_LITERAL:
			case AshParser.BOOL_LITERAL:
			case AshParser.STRING_LITERAL:
			case AshParser.NULL_LITERAL:
			case AshParser.ASH_BOOLEANS_LITERAL:
			case AshParser.ASH_BOUNTY_LITERAL:
			case AshParser.ASH_CLASS_LITERAL:
			case AshParser.ASH_CLASSES_LITERAL:
			case AshParser.ASH_COINMASTER_LITERAL:
			case AshParser.ASH_EFFECT_LITERAL:
			case AshParser.ASH_EFFECTS_LITERAL:
			case AshParser.ASH_ELEMENT_LITERAL:
			case AshParser.ASH_ELEMENTS_LITERAL:
			case AshParser.ASH_FAMILIAR_LITERAL:
			case AshParser.ASH_FAMILIARS_LITERAL:
			case AshParser.ASH_FLOATS_LITERAL:
			case AshParser.ASH_INTS_LITERAL:
			case AshParser.ASH_ITEM_LITERAL:
			case AshParser.ASH_ITEMS_LITERAL:
			case AshParser.ASH_LOCATION_LITERAL:
			case AshParser.ASH_LOCATIONS_LITERAL:
			case AshParser.ASH_MONSTER_LITERAL:
			case AshParser.ASH_MONSTERS_LITERAL:
			case AshParser.ASH_PHYLUM_LITERAL:
			case AshParser.ASH_SERVANT_LITERAL:
			case AshParser.ASH_SKILL_LITERAL:
			case AshParser.ASH_SKILLS_LITERAL:
			case AshParser.ASH_SLOT_LITERAL:
			case AshParser.ASH_SLOTS_LITERAL:
			case AshParser.ASH_STAT_LITERAL:
			case AshParser.ASH_STATS_LITERAL:
			case AshParser.ASH_STRINGS_LITERAL:
			case AshParser.ASH_THRALL_LITERAL:
			case AshParser.ASH_BOUNTY_TYPE:
			case AshParser.ASH_BUFFER_TYPE:
			case AshParser.ASH_CLASS_TYPE:
			case AshParser.ASH_COINMASTER_TYPE:
			case AshParser.ASH_EFFECT_TYPE:
			case AshParser.ASH_ELEMENT_TYPE:
			case AshParser.ASH_FAMILIAR_TYPE:
			case AshParser.ASH_ITEM_TYPE:
			case AshParser.ASH_LOCATION_TYPE:
			case AshParser.ASH_MATCHER_TYPE:
			case AshParser.ASH_MONSTER_TYPE:
			case AshParser.ASH_PHYLUM_TYPE:
			case AshParser.ASH_SERVANT_TYPE:
			case AshParser.ASH_SKILL_TYPE:
			case AshParser.ASH_SLOT_TYPE:
			case AshParser.ASH_STAT_TYPE:
			case AshParser.ASH_THRALL_TYPE:
			case AshParser.LPAREN:
			case AshParser.BANG:
			case AshParser.TILDE:
			case AshParser.INC:
			case AshParser.DEC:
			case AshParser.ADD:
			case AshParser.SUB:
			case AshParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.expression(0);
				}
				break;
			case AshParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AshParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(AshParser.LBRACE);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)) | (1 << (AshParser.LBRACE - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
				{
				this.state = 225;
				this.elementValue();
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 226;
						this.match(AshParser.COMMA);
						this.state = 227;
						this.elementValue();
						}
						}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				}
			}

			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.COMMA) {
				{
				this.state = 235;
				this.match(AshParser.COMMA);
				}
			}

			this.state = 238;
			this.match(AshParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AshParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(AshParser.DEFAULT);
			this.state = 241;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AshParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(AshParser.LBRACE);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.BREAK) | (1 << AshParser.CONTINUE) | (1 << AshParser.DO) | (1 << AshParser.FLOAT) | (1 << AshParser.FOR) | (1 << AshParser.FOREACH) | (1 << AshParser.IF) | (1 << AshParser.INT) | (1 << AshParser.RETURN) | (1 << AshParser.STRING) | (1 << AshParser.SWITCH) | (1 << AshParser.THROW) | (1 << AshParser.TRY) | (1 << AshParser.VOID) | (1 << AshParser.WHILE) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)) | (1 << (AshParser.LBRACE - 64)) | (1 << (AshParser.SEMI - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
				{
				{
				this.state = 244;
				this.blockStatement();
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
			this.match(AshParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AshParser.RULE_blockStatement);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.variableDeclaration();
				this.state = 253;
				this.match(AshParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AshParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.typeType();
			this.state = 259;
			this.variableDeclarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AshParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 262;
				this.match(AshParser.IF);
				this.state = 263;
				this.parExpression();
				this.state = 264;
				this.statement();
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this.match(AshParser.ELSE);
					this.state = 266;
					this.statement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 269;
				this.match(AshParser.FOR);
				this.state = 270;
				this.match(AshParser.LPAREN);
				this.state = 271;
				this.forControl();
				this.state = 272;
				this.match(AshParser.RPAREN);
				this.state = 273;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 275;
				this.foreach();
				this.state = 276;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 278;
				this.match(AshParser.WHILE);
				this.state = 279;
				this.parExpression();
				this.state = 280;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 282;
				this.match(AshParser.DO);
				this.state = 283;
				this.statement();
				this.state = 284;
				this.match(AshParser.WHILE);
				this.state = 285;
				this.parExpression();
				this.state = 286;
				this.match(AshParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 288;
				this.match(AshParser.TRY);
				this.state = 289;
				this.block();
				this.state = 299;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AshParser.CATCH:
					{
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 290;
						this.catchClause();
						}
						}
						this.state = 293;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === AshParser.CATCH);
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === AshParser.FINALLY) {
						{
						this.state = 295;
						this.finallyBlock();
						}
					}

					}
					break;
				case AshParser.FINALLY:
					{
					this.state = 298;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 301;
				this.match(AshParser.SWITCH);
				this.state = 302;
				this.parExpression();
				this.state = 303;
				this.match(AshParser.LBRACE);
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 304;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AshParser.CASE || _la === AshParser.DEFAULT) {
					{
					{
					this.state = 310;
					this.switchLabel();
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.match(AshParser.RBRACE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 318;
				this.match(AshParser.RETURN);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
					{
					this.state = 319;
					this.expression(0);
					}
				}

				this.state = 322;
				this.match(AshParser.SEMI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 323;
				this.match(AshParser.THROW);
				this.state = 324;
				this.expression(0);
				this.state = 325;
				this.match(AshParser.SEMI);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 327;
				this.match(AshParser.BREAK);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AshParser.IDENTIFIER) {
					{
					this.state = 328;
					this.match(AshParser.IDENTIFIER);
					}
				}

				this.state = 331;
				this.match(AshParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 332;
				this.match(AshParser.CONTINUE);
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AshParser.IDENTIFIER) {
					{
					this.state = 333;
					this.match(AshParser.IDENTIFIER);
					}
				}

				this.state = 336;
				this.match(AshParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 337;
				this.match(AshParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 338;
				_localctx._statementExpression = this.expression(0);
				this.state = 339;
				this.match(AshParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 341;
				_localctx._identifierLabel = this.match(AshParser.IDENTIFIER);
				this.state = 342;
				this.match(AshParser.COLON);
				this.state = 343;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AshParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(AshParser.CATCH);
			this.state = 347;
			this.match(AshParser.LPAREN);
			this.state = 348;
			this.catchType();
			this.state = 349;
			this.match(AshParser.IDENTIFIER);
			this.state = 350;
			this.match(AshParser.RPAREN);
			this.state = 351;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AshParser.RULE_catchType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(AshParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AshParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(AshParser.FINALLY);
			this.state = 356;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AshParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 358;
				this.switchLabel();
				}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === AshParser.CASE || _la === AshParser.DEFAULT);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 363;
				this.blockStatement();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.BREAK) | (1 << AshParser.CONTINUE) | (1 << AshParser.DO) | (1 << AshParser.FLOAT) | (1 << AshParser.FOR) | (1 << AshParser.FOREACH) | (1 << AshParser.IF) | (1 << AshParser.INT) | (1 << AshParser.RETURN) | (1 << AshParser.STRING) | (1 << AshParser.SWITCH) | (1 << AshParser.THROW) | (1 << AshParser.TRY) | (1 << AshParser.VOID) | (1 << AshParser.WHILE) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)) | (1 << (AshParser.LBRACE - 64)) | (1 << (AshParser.SEMI - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AshParser.RULE_switchLabel);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this.match(AshParser.CASE);
				this.state = 371;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 369;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 370;
					_localctx._enumConstantName = this.match(AshParser.IDENTIFIER);
					}
					break;
				}
				this.state = 373;
				this.match(AshParser.COLON);
				}
				break;
			case AshParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.match(AshParser.DEFAULT);
				this.state = 375;
				this.match(AshParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AshParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 378;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
					{
					this.state = 379;
					this.forInit();
					}
				}

				this.state = 382;
				this.match(AshParser.SEMI);
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
					{
					this.state = 383;
					this.expression(0);
					}
				}

				this.state = 386;
				this.match(AshParser.SEMI);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
					{
					this.state = 387;
					_localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, AshParser.RULE_forInit);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AshParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.typeType();
			this.state = 397;
			this.match(AshParser.IDENTIFIER);
			this.state = 398;
			this.match(AshParser.COLON);
			this.state = 399;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreach(): ForeachContext {
		let _localctx: ForeachContext = new ForeachContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AshParser.RULE_foreach);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(AshParser.FOREACH);
			this.state = 402;
			this.match(AshParser.IDENTIFIER);
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AshParser.COMMA) {
				{
				this.state = 403;
				this.match(AshParser.COMMA);
				this.state = 404;
				this.match(AshParser.IDENTIFIER);
				}
			}

			this.state = 407;
			this.match(AshParser.IN);
			this.state = 408;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AshParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(AshParser.LPAREN);
			this.state = 411;
			this.expression(0);
			this.state = 412;
			this.match(AshParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AshParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.expression(0);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AshParser.COMMA) {
				{
				{
				this.state = 415;
				this.match(AshParser.COMMA);
				this.state = 416;
				this.expression(0);
				}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AshParser.RULE_methodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(AshParser.IDENTIFIER);
			this.state = 423;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, AshParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 427;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 428;
				this.match(AshParser.LPAREN);
				this.state = 429;
				this.typeType();
				this.state = 430;
				this.match(AshParser.RPAREN);
				this.state = 431;
				this.expression(17);
				}
				break;

			case 4:
				{
				this.state = 433;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (AshParser.INC - 108)) | (1 << (AshParser.DEC - 108)) | (1 << (AshParser.ADD - 108)) | (1 << (AshParser.SUB - 108)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 434;
				this.expression(15);
				}
				break;

			case 5:
				{
				this.state = 435;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === AshParser.BANG || _la === AshParser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 436;
				this.expression(14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 502;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 439;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 440;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (AshParser.MUL - 112)) | (1 << (AshParser.DIV - 112)) | (1 << (AshParser.MOD - 112)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 441;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 442;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 443;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AshParser.ADD || _la === AshParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 444;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 445;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 453;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
						case 1:
							{
							this.state = 446;
							this.match(AshParser.LT);
							this.state = 447;
							this.match(AshParser.LT);
							}
							break;

						case 2:
							{
							this.state = 448;
							this.match(AshParser.GT);
							this.state = 449;
							this.match(AshParser.GT);
							this.state = 450;
							this.match(AshParser.GT);
							}
							break;

						case 3:
							{
							this.state = 451;
							this.match(AshParser.GT);
							this.state = 452;
							this.match(AshParser.GT);
							}
							break;
						}
						this.state = 455;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 456;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 457;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (AshParser.GT - 96)) | (1 << (AshParser.LT - 96)) | (1 << (AshParser.LE - 96)) | (1 << (AshParser.GE - 96)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 458;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 459;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 460;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AshParser.EQUAL || _la === AshParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 461;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 462;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 463;
						_localctx._bop = this.match(AshParser.BITAND);
						this.state = 464;
						this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 465;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 466;
						_localctx._bop = this.match(AshParser.CARET);
						this.state = 467;
						this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 468;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 469;
						_localctx._bop = this.match(AshParser.BITOR);
						this.state = 470;
						this.expression(7);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 471;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 472;
						_localctx._bop = this.match(AshParser.AND);
						this.state = 473;
						this.expression(6);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 474;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 475;
						_localctx._bop = this.match(AshParser.OR);
						this.state = 476;
						this.expression(5);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 477;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 478;
						_localctx._bop = this.match(AshParser.QUESTION);
						this.state = 479;
						this.expression(0);
						this.state = 480;
						this.match(AshParser.COLON);
						this.state = 481;
						this.expression(4);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 483;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 484;
						this.match(AshParser.CONTAINS);
						this.state = 485;
						this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 486;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 487;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (AshParser.ASSIGN - 95)) | (1 << (AshParser.ADD_ASSIGN - 95)) | (1 << (AshParser.SUB_ASSIGN - 95)) | (1 << (AshParser.MUL_ASSIGN - 95)) | (1 << (AshParser.DIV_ASSIGN - 95)) | (1 << (AshParser.AND_ASSIGN - 95)) | (1 << (AshParser.OR_ASSIGN - 95)) | (1 << (AshParser.XOR_ASSIGN - 95)) | (1 << (AshParser.MOD_ASSIGN - 95)) | (1 << (AshParser.LSHIFT_ASSIGN - 95)))) !== 0) || _la === AshParser.RSHIFT_ASSIGN || _la === AshParser.URSHIFT_ASSIGN)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 488;
						this.expression(1);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 489;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 490;
						_localctx._bop = this.match(AshParser.DOT);
						this.state = 493;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
						case 1:
							{
							this.state = 491;
							this.match(AshParser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 492;
							this.methodCall();
							}
							break;
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 495;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 496;
						this.match(AshParser.LBRACK);
						this.state = 497;
						this.expression(0);
						this.state = 498;
						this.match(AshParser.RBRACK);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, AshParser.RULE_expression);
						this.state = 500;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 501;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === AshParser.INC || _la === AshParser.DEC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AshParser.RULE_primary);
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.match(AshParser.LPAREN);
				this.state = 508;
				this.expression(0);
				this.state = 509;
				this.match(AshParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 512;
				this.match(AshParser.IDENTIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 513;
				this.typeTypeOrVoid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AshParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.typeType();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AshParser.COMMA) {
				{
				{
				this.state = 517;
				this.match(AshParser.COMMA);
				this.state = 518;
				this.typeType();
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AshParser.RULE_typeType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 524;
				this.mapType();
				}
				break;

			case 2:
				{
				this.state = 525;
				this.primitiveType();
				}
				break;

			case 3:
				{
				this.state = 526;
				this.ashType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AshParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapType(): MapTypeContext {
		let _localctx: MapTypeContext = new MapTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AshParser.RULE_mapType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.IDENTIFIER:
				{
				this.state = 531;
				this.match(AshParser.IDENTIFIER);
				}
				break;
			case AshParser.BOOLEAN:
			case AshParser.FLOAT:
			case AshParser.INT:
			case AshParser.STRING:
				{
				this.state = 532;
				this.primitiveType();
				}
				break;
			case AshParser.ASH_BOUNTY_TYPE:
			case AshParser.ASH_BUFFER_TYPE:
			case AshParser.ASH_CLASS_TYPE:
			case AshParser.ASH_COINMASTER_TYPE:
			case AshParser.ASH_EFFECT_TYPE:
			case AshParser.ASH_ELEMENT_TYPE:
			case AshParser.ASH_FAMILIAR_TYPE:
			case AshParser.ASH_ITEM_TYPE:
			case AshParser.ASH_LOCATION_TYPE:
			case AshParser.ASH_MATCHER_TYPE:
			case AshParser.ASH_MONSTER_TYPE:
			case AshParser.ASH_PHYLUM_TYPE:
			case AshParser.ASH_SERVANT_TYPE:
			case AshParser.ASH_SKILL_TYPE:
			case AshParser.ASH_SLOT_TYPE:
			case AshParser.ASH_STAT_TYPE:
			case AshParser.ASH_THRALL_TYPE:
				{
				this.state = 533;
				this.ashType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 536;
			this.match(AshParser.LBRACK);
			this.state = 537;
			this.mapTypeKeys();
			this.state = 538;
			this.match(AshParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapTypeKeys(): MapTypeKeysContext {
		let _localctx: MapTypeKeysContext = new MapTypeKeysContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AshParser.RULE_mapTypeKeys);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AshParser.BOOLEAN:
			case AshParser.FLOAT:
			case AshParser.INT:
			case AshParser.STRING:
				{
				this.state = 540;
				this.primitiveType();
				}
				break;
			case AshParser.ASH_BOUNTY_TYPE:
			case AshParser.ASH_BUFFER_TYPE:
			case AshParser.ASH_CLASS_TYPE:
			case AshParser.ASH_COINMASTER_TYPE:
			case AshParser.ASH_EFFECT_TYPE:
			case AshParser.ASH_ELEMENT_TYPE:
			case AshParser.ASH_FAMILIAR_TYPE:
			case AshParser.ASH_ITEM_TYPE:
			case AshParser.ASH_LOCATION_TYPE:
			case AshParser.ASH_MATCHER_TYPE:
			case AshParser.ASH_MONSTER_TYPE:
			case AshParser.ASH_PHYLUM_TYPE:
			case AshParser.ASH_SERVANT_TYPE:
			case AshParser.ASH_SKILL_TYPE:
			case AshParser.ASH_SLOT_TYPE:
			case AshParser.ASH_STAT_TYPE:
			case AshParser.ASH_THRALL_TYPE:
				{
				this.state = 541;
				this.ashType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AshParser.COMMA) {
				{
				{
				this.state = 544;
				this.match(AshParser.COMMA);
				this.state = 547;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AshParser.BOOLEAN:
				case AshParser.FLOAT:
				case AshParser.INT:
				case AshParser.STRING:
					{
					this.state = 545;
					this.primitiveType();
					}
					break;
				case AshParser.ASH_BOUNTY_TYPE:
				case AshParser.ASH_BUFFER_TYPE:
				case AshParser.ASH_CLASS_TYPE:
				case AshParser.ASH_COINMASTER_TYPE:
				case AshParser.ASH_EFFECT_TYPE:
				case AshParser.ASH_ELEMENT_TYPE:
				case AshParser.ASH_FAMILIAR_TYPE:
				case AshParser.ASH_ITEM_TYPE:
				case AshParser.ASH_LOCATION_TYPE:
				case AshParser.ASH_MATCHER_TYPE:
				case AshParser.ASH_MONSTER_TYPE:
				case AshParser.ASH_PHYLUM_TYPE:
				case AshParser.ASH_SERVANT_TYPE:
				case AshParser.ASH_SKILL_TYPE:
				case AshParser.ASH_SLOT_TYPE:
				case AshParser.ASH_STAT_TYPE:
				case AshParser.ASH_THRALL_TYPE:
					{
					this.state = 546;
					this.ashType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ashType(): AshTypeContext {
		let _localctx: AshTypeContext = new AshTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AshParser.RULE_ashType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (AshParser.ASH_BOUNTY_TYPE - 69)) | (1 << (AshParser.ASH_BUFFER_TYPE - 69)) | (1 << (AshParser.ASH_CLASS_TYPE - 69)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 69)) | (1 << (AshParser.ASH_EFFECT_TYPE - 69)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 69)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 69)) | (1 << (AshParser.ASH_ITEM_TYPE - 69)) | (1 << (AshParser.ASH_LOCATION_TYPE - 69)) | (1 << (AshParser.ASH_MATCHER_TYPE - 69)) | (1 << (AshParser.ASH_MONSTER_TYPE - 69)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 69)) | (1 << (AshParser.ASH_SERVANT_TYPE - 69)) | (1 << (AshParser.ASH_SKILL_TYPE - 69)) | (1 << (AshParser.ASH_SLOT_TYPE - 69)) | (1 << (AshParser.ASH_STAT_TYPE - 69)) | (1 << (AshParser.ASH_THRALL_TYPE - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, AshParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(AshParser.LPAREN);
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AshParser.BOOLEAN) | (1 << AshParser.FLOAT) | (1 << AshParser.INT) | (1 << AshParser.STRING) | (1 << AshParser.VOID) | (1 << AshParser.DECIMAL_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AshParser.HEX_LITERAL - 32)) | (1 << (AshParser.OCT_LITERAL - 32)) | (1 << (AshParser.BINARY_LITERAL - 32)) | (1 << (AshParser.FLOAT_LITERAL - 32)) | (1 << (AshParser.HEX_FLOAT_LITERAL - 32)) | (1 << (AshParser.BOOL_LITERAL - 32)) | (1 << (AshParser.STRING_LITERAL - 32)) | (1 << (AshParser.NULL_LITERAL - 32)) | (1 << (AshParser.ASH_BOOLEANS_LITERAL - 32)) | (1 << (AshParser.ASH_BOUNTY_LITERAL - 32)) | (1 << (AshParser.ASH_CLASS_LITERAL - 32)) | (1 << (AshParser.ASH_CLASSES_LITERAL - 32)) | (1 << (AshParser.ASH_COINMASTER_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECT_LITERAL - 32)) | (1 << (AshParser.ASH_EFFECTS_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENT_LITERAL - 32)) | (1 << (AshParser.ASH_ELEMENTS_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIAR_LITERAL - 32)) | (1 << (AshParser.ASH_FAMILIARS_LITERAL - 32)) | (1 << (AshParser.ASH_FLOATS_LITERAL - 32)) | (1 << (AshParser.ASH_INTS_LITERAL - 32)) | (1 << (AshParser.ASH_ITEM_LITERAL - 32)) | (1 << (AshParser.ASH_ITEMS_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATION_LITERAL - 32)) | (1 << (AshParser.ASH_LOCATIONS_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTER_LITERAL - 32)) | (1 << (AshParser.ASH_MONSTERS_LITERAL - 32)) | (1 << (AshParser.ASH_PHYLUM_LITERAL - 32)) | (1 << (AshParser.ASH_SERVANT_LITERAL - 32)) | (1 << (AshParser.ASH_SKILL_LITERAL - 32)) | (1 << (AshParser.ASH_SKILLS_LITERAL - 32)) | (1 << (AshParser.ASH_SLOT_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AshParser.ASH_SLOTS_LITERAL - 64)) | (1 << (AshParser.ASH_STAT_LITERAL - 64)) | (1 << (AshParser.ASH_STATS_LITERAL - 64)) | (1 << (AshParser.ASH_STRINGS_LITERAL - 64)) | (1 << (AshParser.ASH_THRALL_LITERAL - 64)) | (1 << (AshParser.ASH_BOUNTY_TYPE - 64)) | (1 << (AshParser.ASH_BUFFER_TYPE - 64)) | (1 << (AshParser.ASH_CLASS_TYPE - 64)) | (1 << (AshParser.ASH_COINMASTER_TYPE - 64)) | (1 << (AshParser.ASH_EFFECT_TYPE - 64)) | (1 << (AshParser.ASH_ELEMENT_TYPE - 64)) | (1 << (AshParser.ASH_FAMILIAR_TYPE - 64)) | (1 << (AshParser.ASH_ITEM_TYPE - 64)) | (1 << (AshParser.ASH_LOCATION_TYPE - 64)) | (1 << (AshParser.ASH_MATCHER_TYPE - 64)) | (1 << (AshParser.ASH_MONSTER_TYPE - 64)) | (1 << (AshParser.ASH_PHYLUM_TYPE - 64)) | (1 << (AshParser.ASH_SERVANT_TYPE - 64)) | (1 << (AshParser.ASH_SKILL_TYPE - 64)) | (1 << (AshParser.ASH_SLOT_TYPE - 64)) | (1 << (AshParser.ASH_STAT_TYPE - 64)) | (1 << (AshParser.ASH_THRALL_TYPE - 64)) | (1 << (AshParser.LPAREN - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (AshParser.BANG - 98)) | (1 << (AshParser.TILDE - 98)) | (1 << (AshParser.INC - 98)) | (1 << (AshParser.DEC - 98)) | (1 << (AshParser.ADD - 98)) | (1 << (AshParser.SUB - 98)))) !== 0) || _la === AshParser.IDENTIFIER) {
				{
				this.state = 557;
				this.expressionList();
				}
			}

			this.state = 560;
			this.match(AshParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 42:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);

		case 13:
			return this.precpred(this._ctx, 20);

		case 14:
			return this.precpred(this._ctx, 19);

		case 15:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x87\u0235\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x03\x02\x03\x02\x03\x02\x07\x02l\n\x02\f\x02\x0E\x02o\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03w\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x06\x04}\n\x04\r\x04\x0E\x04~\x03\x04\x05\x04\x82\n\x04" +
		"\x03\x04\x05\x04\x85\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\x8E\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\x93\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x9A\n\b\x03\t\x03\t\x03\n\x03\n\x05" +
		"\n\xA0\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB0\n\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x05\x10\xB6\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\xBD\n\x11\f\x11\x0E\x11\xC0\v\x11\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xCB\n\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\xD6" +
		"\n\x17\f\x17\x0E\x17\xD9\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x05\x19\xE1\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xE7" +
		"\n\x1A\f\x1A\x0E\x1A\xEA\v\x1A\x05\x1A\xEC\n\x1A\x03\x1A\x05\x1A\xEF\n" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\xF8" +
		"\n\x1C\f\x1C\x0E\x1C\xFB\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u0103\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u010E\n\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x06\x1F\u0126\n\x1F\r\x1F\x0E\x1F\u0127\x03\x1F\x05\x1F\u012B" +
		"\n\x1F\x03\x1F\x05\x1F\u012E\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u0134\n\x1F\f\x1F\x0E\x1F\u0137\v\x1F\x03\x1F\x07\x1F\u013A\n\x1F" +
		"\f\x1F\x0E\x1F\u013D\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0143" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u014C\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0151\n\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u015B\n\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03#\x06#" +
		"\u016A\n#\r#\x0E#\u016B\x03#\x06#\u016F\n#\r#\x0E#\u0170\x03$\x03$\x03" +
		"$\x05$\u0176\n$\x03$\x03$\x03$\x05$\u017B\n$\x03%\x03%\x05%\u017F\n%\x03" +
		"%\x03%\x05%\u0183\n%\x03%\x03%\x05%\u0187\n%\x05%\u0189\n%\x03&\x03&\x05" +
		"&\u018D\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u0198" +
		"\n(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x07*\u01A4\n*\f" +
		"*\x0E*\u01A7\v*\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x05,\u01B8\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u01C8\n,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u01F0\n,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x07,\u01F9\n,\f,\x0E,\u01FC\v,\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x05-\u0205\n-\x03.\x03.\x03.\x07.\u020A\n.\f.\x0E.\u020D\v.\x03" +
		"/\x03/\x03/\x05/\u0212\n/\x030\x030\x031\x031\x031\x051\u0219\n1\x031" +
		"\x031\x031\x031\x032\x032\x052\u0221\n2\x032\x032\x032\x052\u0226\n2\x07" +
		"2\u0228\n2\f2\x0E2\u022B\v2\x033\x033\x034\x034\x054\u0231\n4\x034\x03" +
		"4\x034\x02\x02\x03V5\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02\x10\x05\x02``ss\x87\x87\x03\x02" +
		"!$\x03\x02%&\x03\x02*F\x03\x02nq\x03\x02de\x04\x02rsww\x03\x02pq\x04\x02" +
		"bcij\x04\x02hhkk\x04\x02aax\x82\x03\x02no\x06\x02\x03\x03\x0F\x0F\x15" +
		"\x15\x1B\x1B\x03\x02GW\x02\u0262\x02m\x03\x02\x02\x02\x04v\x03\x02\x02" +
		"\x02\x06x\x03\x02\x02\x02\b\x86\x03\x02\x02\x02\n\x8A\x03\x02\x02\x02" +
		"\f\x8F\x03\x02\x02\x02\x0E\x94\x03\x02\x02\x02\x10\x9B\x03\x02\x02\x02" +
		"\x12\x9F\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xA5\x03\x02\x02\x02" +
		"\x18\xA8\x03\x02\x02\x02\x1A\xAC\x03\x02\x02\x02\x1C\xB1\x03\x02\x02\x02" +
		"\x1E\xB3\x03\x02\x02\x02 \xB9\x03\x02\x02\x02\"\xC1\x03\x02\x02\x02$\xCA" +
		"\x03\x02\x02\x02&\xCC\x03\x02\x02\x02(\xCE\x03\x02\x02\x02*\xD0\x03\x02" +
		"\x02\x02,\xD2\x03\x02\x02\x02.\xDA\x03\x02\x02\x020\xE0\x03\x02\x02\x02" +
		"2\xE2\x03\x02\x02\x024\xF2\x03\x02\x02\x026\xF5\x03\x02\x02\x028\u0102" +
		"\x03\x02\x02\x02:\u0104\x03\x02\x02\x02<\u015A\x03\x02\x02\x02>\u015C" +
		"\x03\x02\x02\x02@\u0163\x03\x02\x02\x02B\u0165\x03\x02\x02\x02D\u0169" +
		"\x03\x02\x02\x02F\u017A\x03\x02\x02\x02H\u0188\x03\x02\x02\x02J\u018C" +
		"\x03\x02\x02\x02L\u018E\x03\x02\x02\x02N\u0193\x03\x02\x02\x02P\u019C" +
		"\x03\x02\x02\x02R\u01A0\x03\x02\x02\x02T\u01A8\x03\x02\x02\x02V\u01B7" +
		"\x03\x02\x02\x02X\u0204\x03\x02\x02\x02Z\u0206\x03\x02\x02\x02\\\u0211" +
		"\x03\x02\x02\x02^\u0213\x03\x02\x02\x02`\u0218\x03\x02\x02\x02b\u0220" +
		"\x03\x02\x02\x02d\u022C\x03\x02\x02\x02f\u022E\x03\x02\x02\x02hl\x05\x04" +
		"\x03\x02il\x05\x0E\b\x02jl\x05\x14\v\x02kh\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02" +
		"\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x02\x02\x03q\x03\x03\x02" +
		"\x02\x02rw\x05\x06\x04\x02sw\x05\b\x05\x02tw\x05\n\x06\x02uw\x05\f\x07" +
		"\x02vr\x03\x02\x02\x02vs\x03\x02\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02" +
		"\x02w\x05\x03\x02\x02\x02x\x81\x07\x13\x02\x02y\x82\x07(\x02\x02z|\x07" +
		"c\x02\x02{}\t\x02\x02\x02|{\x03\x02\x02\x02}~\x03\x02\x02\x02~|\x03\x02" +
		"\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x07b\x02" +
		"\x02\x81y\x03\x02\x02\x02\x81z\x03\x02\x02\x02\x82\x84\x03\x02\x02\x02" +
		"\x83\x85\x07^\x02\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02" +
		"\x85\x07\x03\x02\x02\x02\x86\x87\x07\x16\x02\x02\x87\x88\x07\x87\x02\x02" +
		"\x88\x89\x07^\x02\x02\x89\t\x03\x02\x02\x02\x8A\x8B\x07\x18\x02\x02\x8B" +
		"\x8D\x07(\x02\x02\x8C\x8E\x07^\x02\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\v\x03\x02\x02\x02\x8F\x90\x07\x19\x02\x02\x90\x92" +
		"\x07\x87\x02\x02\x91\x93\x07^\x02\x02\x92\x91\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93\r\x03\x02\x02\x02\x94\x95\x05\x12\n\x02\x95\x96\x07" +
		"\x87\x02\x02\x96\x99\x05\x1E\x10\x02\x97\x9A\x05\x10\t\x02\x98\x9A\x07" +
		"^\x02\x02\x99\x97\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A\x0F\x03" +
		"\x02\x02\x02\x9B\x9C\x056\x1C\x02\x9C\x11\x03\x02\x02\x02\x9D\xA0\x05" +
		"\\/\x02\x9E\xA0\x07\x1F\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\x9E\x03\x02" +
		"\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA2\x05\\/\x02\xA2\xA3\x05\x1A\x0E" +
		"\x02\xA3\xA4\x07^\x02\x02\xA4\x15\x03\x02\x02\x02\xA5\xA6\x05\\/\x02\xA6" +
		"\xA7\x05\x18\r\x02\xA7\x17\x03\x02\x02\x02\xA8\xA9\x07\x87\x02\x02\xA9" +
		"\xAA\x07a\x02\x02\xAA\xAB\x05\x1C\x0F\x02\xAB\x19\x03\x02\x02\x02\xAC" +
		"\xAF\x07\x87\x02\x02\xAD\xAE\x07a\x02\x02\xAE\xB0\x05\x1C\x0F\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x1B\x03\x02\x02\x02\xB1" +
		"\xB2\x05V,\x02\xB2\x1D\x03\x02\x02\x02\xB3\xB5\x07X\x02\x02\xB4\xB6\x05" +
		" \x11\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xB8\x07Y\x02\x02\xB8\x1F\x03\x02\x02\x02\xB9\xBE\x05" +
		"\"\x12\x02\xBA\xBB\x07_\x02\x02\xBB\xBD\x05\"\x12\x02\xBC\xBA\x03\x02" +
		"\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02" +
		"\x02\x02\xBF!\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x05\\/\x02" +
		"\xC2\xC3\x07\x87\x02\x02\xC3#\x03\x02\x02\x02\xC4\xCB\x05&\x14\x02\xC5" +
		"\xCB\x05(\x15\x02\xC6\xCB\x07(\x02\x02\xC7\xCB\x07\'\x02\x02\xC8\xCB\x07" +
		")\x02\x02\xC9\xCB\x05*\x16\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC5\x03\x02" +
		"\x02\x02\xCA\xC6\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03\x02" +
		"\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB%\x03\x02\x02\x02\xCC\xCD\t\x03\x02" +
		"\x02\xCD\'\x03\x02\x02\x02\xCE\xCF\t\x04\x02\x02\xCF)\x03\x02\x02\x02" +
		"\xD0\xD1\t\x05\x02\x02\xD1+\x03\x02\x02\x02\xD2\xD7\x05.\x18\x02\xD3\xD4" +
		"\x07_\x02\x02\xD4\xD6\x05.\x18\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03" +
		"\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8-\x03" +
		"\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\x07\x87\x02\x02\xDB\xDC\x07" +
		"a\x02\x02\xDC\xDD\x050\x19\x02\xDD/\x03\x02\x02\x02\xDE\xE1\x05V,\x02" +
		"\xDF\xE1\x052\x1A\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02" +
		"\xE11\x03\x02\x02\x02\xE2\xEB\x07Z\x02\x02\xE3\xE8\x050\x19\x02\xE4\xE5" +
		"\x07_\x02\x02\xE5\xE7\x050\x19\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x03" +
		"\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x03" +
		"\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xE3\x03\x02\x02\x02\xEB\xEC\x03" +
		"\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEF\x07_\x02\x02\xEE\xED\x03" +
		"\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07" +
		"[\x02\x02\xF13\x03\x02\x02\x02\xF2\xF3\x07\n\x02\x02\xF3\xF4\x050\x19" +
		"\x02\xF45\x03\x02\x02\x02\xF5\xF9\x07Z\x02\x02\xF6\xF8\x058\x1D\x02\xF7" +
		"\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC" +
		"\xFD\x07[\x02\x02\xFD7\x03\x02\x02\x02\xFE\xFF\x05:\x1E\x02\xFF\u0100" +
		"\x07^\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\u0103\x05<\x1F\x02\u0102" +
		"\xFE\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u01039\x03\x02\x02\x02" +
		"\u0104\u0105\x05\\/\x02\u0105\u0106\x05\x1A\x0E\x02\u0106;\x03\x02\x02" +
		"\x02\u0107\u015B\x056\x1C\x02\u0108\u0109\x07\x12\x02\x02\u0109\u010A" +
		"\x05P)\x02\u010A\u010D\x05<\x1F\x02\u010B\u010C\x07\r\x02\x02\u010C\u010E" +
		"\x05<\x1F\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02" +
		"\u010E\u015B\x03\x02\x02\x02\u010F\u0110\x07\x10\x02\x02\u0110\u0111\x07" +
		"X\x02\x02\u0111\u0112\x05H%\x02\u0112\u0113\x07Y\x02\x02\u0113\u0114\x05" +
		"<\x1F\x02\u0114\u015B\x03\x02\x02\x02\u0115\u0116\x05N(\x02\u0116\u0117" +
		"\x05<\x1F\x02\u0117\u015B\x03\x02\x02\x02\u0118\u0119\x07 \x02\x02\u0119" +
		"\u011A\x05P)\x02\u011A\u011B\x05<\x1F\x02\u011B\u015B\x03\x02\x02\x02" +
		"\u011C\u011D\x07\v\x02\x02\u011D\u011E\x05<\x1F\x02\u011E\u011F\x07 \x02" +
		"\x02\u011F\u0120\x05P)\x02\u0120\u0121\x07^\x02\x02\u0121\u015B\x03\x02" +
		"\x02\x02\u0122\u0123\x07\x1E\x02\x02\u0123\u012D\x056\x1C\x02\u0124\u0126" +
		"\x05> \x02\u0125\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02" +
		"\x02\x02\u0129\u012B\x05B\"\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012E\x05B\"\x02\u012D" +
		"\u0125\x03\x02\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\u015B\x03\x02" +
		"\x02\x02\u012F\u0130\x07\x1C\x02\x02\u0130\u0131\x05P)\x02\u0131\u0135" +
		"\x07Z\x02\x02\u0132\u0134\x05D#\x02\u0133\u0132\x03\x02\x02\x02\u0134" +
		"\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u013B\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u013A\x05F$\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03" +
		"\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x07[\x02\x02\u013F" +
		"\u015B\x03\x02\x02\x02\u0140\u0142\x07\x17\x02\x02\u0141\u0143\x05V,\x02" +
		"\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\u015B\x07^\x02\x02\u0145\u0146\x07\x1D\x02\x02\u0146" +
		"\u0147\x05V,\x02\u0147\u0148\x07^\x02\x02\u0148\u015B\x03\x02\x02\x02" +
		"\u0149\u014B\x07\x04\x02\x02\u014A\u014C\x07\x87\x02\x02\u014B\u014A\x03" +
		"\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
		"\u015B\x07^\x02\x02\u014E\u0150\x07\t\x02\x02\u014F\u0151\x07\x87\x02" +
		"\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152" +
		"\x03\x02\x02\x02\u0152\u015B\x07^\x02\x02\u0153\u015B\x07^\x02\x02\u0154" +
		"\u0155\x05V,\x02\u0155\u0156\x07^\x02\x02\u0156\u015B\x03\x02\x02\x02" +
		"\u0157\u0158\x07\x87\x02\x02\u0158\u0159\x07g\x02\x02\u0159\u015B\x05" +
		"<\x1F\x02\u015A\u0107\x03\x02\x02\x02\u015A\u0108\x03\x02\x02\x02\u015A" +
		"\u010F\x03\x02\x02\x02\u015A\u0115\x03\x02\x02\x02\u015A\u0118\x03\x02" +
		"\x02\x02\u015A\u011C\x03\x02\x02\x02\u015A\u0122\x03\x02\x02\x02\u015A" +
		"\u012F\x03\x02\x02\x02\u015A\u0140\x03\x02\x02\x02\u015A\u0145\x03\x02" +
		"\x02\x02\u015A\u0149\x03\x02\x02\x02\u015A\u014E\x03\x02\x02\x02\u015A" +
		"\u0153\x03\x02\x02\x02\u015A\u0154\x03\x02\x02\x02\u015A\u0157\x03\x02" +
		"\x02\x02\u015B=\x03\x02\x02\x02\u015C\u015D\x07\x06\x02\x02\u015D\u015E" +
		"\x07X\x02\x02\u015E\u015F\x05@!\x02\u015F\u0160\x07\x87\x02\x02\u0160" +
		"\u0161\x07Y\x02\x02\u0161\u0162\x056\x1C\x02\u0162?\x03\x02\x02\x02\u0163" +
		"\u0164\x07\x87\x02\x02\u0164A\x03\x02\x02\x02\u0165\u0166\x07\x0E\x02" +
		"\x02\u0166\u0167\x056\x1C\x02\u0167C\x03\x02\x02\x02\u0168\u016A\x05F" +
		"$\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0169" +
		"\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x03\x02\x02\x02" +
		"\u016D\u016F\x058\x1D\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0170\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		"E\x03\x02\x02\x02\u0172\u0175\x07\x05\x02\x02\u0173\u0176\x05V,\x02\u0174" +
		"\u0176\x07\x87\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017B\x07g\x02\x02\u0178\u0179" +
		"\x07\n\x02\x02\u0179\u017B\x07g\x02\x02\u017A\u0172\x03\x02\x02\x02\u017A" +
		"\u0178\x03\x02\x02\x02\u017BG\x03\x02\x02\x02\u017C\u0189\x05L\'\x02\u017D" +
		"\u017F\x05J&\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
		"\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x07^\x02\x02\u0181\u0183\x05" +
		"V,\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184" +
		"\x03\x02\x02\x02\u0184\u0186\x07^\x02\x02\u0185\u0187\x05R*\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02" +
		"\x02\x02\u0188\u017C\x03\x02\x02\x02\u0188\u017E\x03\x02\x02\x02\u0189" +
		"I\x03\x02\x02\x02\u018A\u018D\x05:\x1E\x02\u018B\u018D\x05R*\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018DK\x03\x02\x02" +
		"\x02\u018E\u018F\x05\\/\x02\u018F\u0190\x07\x87\x02\x02\u0190\u0191\x07" +
		"g\x02\x02\u0191\u0192\x05V,\x02\u0192M\x03\x02\x02\x02\u0193\u0194\x07" +
		"\x11\x02\x02\u0194\u0197\x07\x87\x02\x02\u0195\u0196\x07_\x02\x02\u0196" +
		"\u0198\x07\x87\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02" +
		"\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x07\x14\x02\x02\u019A" +
		"\u019B\x05V,\x02\u019BO\x03\x02\x02\x02\u019C\u019D\x07X\x02\x02\u019D" +
		"\u019E\x05V,\x02\u019E\u019F\x07Y\x02\x02\u019FQ\x03\x02\x02\x02\u01A0" +
		"\u01A5\x05V,\x02\u01A1\u01A2\x07_\x02\x02\u01A2\u01A4\x05V,\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6S\x03\x02\x02\x02\u01A7\u01A5" +
		"\x03\x02\x02\x02\u01A8\u01A9\x07\x87\x02\x02\u01A9\u01AA\x05f4\x02\u01AA" +
		"U\x03\x02\x02\x02\u01AB\u01AC\b,\x01\x02\u01AC\u01B8\x05X-\x02\u01AD\u01B8" +
		"\x05T+\x02\u01AE\u01AF\x07X\x02\x02\u01AF\u01B0\x05\\/\x02\u01B0\u01B1" +
		"\x07Y\x02\x02\u01B1\u01B2\x05V,\x13\u01B2\u01B8\x03\x02\x02\x02\u01B3" +
		"\u01B4\t\x06\x02\x02\u01B4\u01B8\x05V,\x11\u01B5\u01B6\t\x07\x02\x02\u01B6" +
		"\u01B8\x05V,\x10\u01B7\u01AB\x03\x02\x02\x02\u01B7\u01AD\x03\x02\x02\x02" +
		"\u01B7\u01AE\x03\x02\x02\x02\u01B7\u01B3\x03\x02\x02\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B8\u01FA\x03\x02\x02\x02\u01B9\u01BA\f\x0F\x02\x02\u01BA" +
		"\u01BB\t\b\x02\x02\u01BB\u01F9\x05V,\x10\u01BC\u01BD\f\x0E\x02\x02\u01BD" +
		"\u01BE\t\t\x02\x02\u01BE\u01F9\x05V,\x0F\u01BF\u01C7\f\r\x02\x02\u01C0" +
		"\u01C1\x07c\x02\x02\u01C1\u01C8\x07c\x02\x02\u01C2\u01C3\x07b\x02\x02" +
		"\u01C3\u01C4\x07b\x02\x02\u01C4\u01C8\x07b\x02\x02\u01C5\u01C6\x07b\x02" +
		"\x02\u01C6\u01C8\x07b\x02\x02\u01C7\u01C0\x03\x02\x02\x02\u01C7\u01C2" +
		"\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02" +
		"\u01C9\u01F9\x05V,\x0E\u01CA\u01CB\f\f\x02\x02\u01CB\u01CC\t\n\x02\x02" +
		"\u01CC\u01F9\x05V,\r\u01CD\u01CE\f\v\x02\x02\u01CE\u01CF\t\v\x02\x02\u01CF" +
		"\u01F9\x05V,\f\u01D0\u01D1\f\n\x02\x02\u01D1\u01D2\x07t\x02\x02\u01D2" +
		"\u01F9\x05V,\v\u01D3\u01D4\f\t\x02\x02\u01D4\u01D5\x07v\x02\x02\u01D5" +
		"\u01F9\x05V,\n\u01D6\u01D7\f\b\x02\x02\u01D7\u01D8\x07u\x02\x02\u01D8" +
		"\u01F9\x05V,\t\u01D9\u01DA\f\x07\x02\x02\u01DA\u01DB\x07l\x02\x02\u01DB" +
		"\u01F9\x05V,\b\u01DC\u01DD\f\x06\x02\x02\u01DD\u01DE\x07m\x02\x02\u01DE" +
		"\u01F9\x05V,\x07\u01DF\u01E0\f\x05\x02\x02\u01E0\u01E1\x07f\x02\x02\u01E1" +
		"\u01E2\x05V,\x02\u01E2\u01E3\x07g\x02\x02\u01E3\u01E4\x05V,\x06\u01E4" +
		"\u01F9\x03\x02\x02\x02\u01E5\u01E6\f\x04\x02\x02\u01E6\u01E7\x07\b\x02" +
		"\x02\u01E7\u01F9\x05V,\x05\u01E8\u01E9\f\x03\x02\x02\u01E9\u01EA\t\f\x02" +
		"\x02\u01EA\u01F9\x05V,\x03\u01EB\u01EC\f\x16\x02\x02\u01EC\u01EF\x07`" +
		"\x02\x02\u01ED\u01F0\x07\x87\x02\x02\u01EE\u01F0\x05T+\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F9\x03\x02\x02\x02" +
		"\u01F1\u01F2\f\x15\x02\x02\u01F2\u01F3\x07\\\x02\x02\u01F3\u01F4\x05V" +
		",\x02\u01F4\u01F5\x07]\x02\x02\u01F5\u01F9\x03\x02\x02\x02\u01F6\u01F7" +
		"\f\x12\x02\x02\u01F7\u01F9\t\r\x02\x02\u01F8\u01B9\x03\x02\x02\x02\u01F8" +
		"\u01BC\x03\x02\x02\x02\u01F8\u01BF\x03\x02\x02\x02\u01F8\u01CA\x03\x02" +
		"\x02\x02\u01F8\u01CD\x03\x02\x02\x02\u01F8\u01D0\x03\x02\x02\x02\u01F8" +
		"\u01D3\x03\x02\x02\x02\u01F8\u01D6\x03\x02\x02\x02\u01F8\u01D9\x03\x02" +
		"\x02\x02\u01F8\u01DC\x03\x02\x02\x02\u01F8\u01DF\x03\x02\x02\x02\u01F8" +
		"\u01E5\x03\x02\x02\x02\u01F8\u01E8\x03\x02\x02\x02\u01F8\u01EB\x03\x02" +
		"\x02\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9" +
		"\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02" +
		"\x02\x02\u01FBW\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE" +
		"\x07X\x02\x02\u01FE\u01FF\x05V,\x02\u01FF\u0200\x07Y\x02\x02\u0200\u0205" +
		"\x03\x02\x02\x02\u0201\u0205\x05$\x13\x02\u0202\u0205\x07\x87\x02\x02" +
		"\u0203\u0205\x05\x12\n\x02\u0204\u01FD\x03\x02\x02\x02\u0204\u0201\x03" +
		"\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02\x02\x02\u0205" +
		"Y\x03\x02\x02\x02\u0206\u020B\x05\\/\x02\u0207\u0208\x07_\x02\x02\u0208" +
		"\u020A\x05\\/\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02" +
		"\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C[\x03" +
		"\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u0212\x05`1\x02\u020F\u0212" +
		"\x05^0\x02\u0210\u0212\x05d3\x02\u0211\u020E\x03\x02\x02\x02\u0211\u020F" +
		"\x03\x02\x02\x02\u0211\u0210\x03\x02\x02\x02\u0212]\x03\x02\x02\x02\u0213" +
		"\u0214\t\x0E\x02\x02\u0214_\x03\x02\x02\x02\u0215\u0219\x07\x87\x02\x02" +
		"\u0216\u0219\x05^0\x02\u0217\u0219\x05d3\x02\u0218\u0215\x03\x02\x02\x02" +
		"\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021A\x03" +
		"\x02\x02\x02\u021A\u021B\x07\\\x02\x02\u021B\u021C\x05b2\x02\u021C\u021D" +
		"\x07]\x02\x02\u021Da\x03\x02\x02\x02\u021E\u0221\x05^0\x02\u021F\u0221" +
		"\x05d3\x02\u0220\u021E\x03\x02\x02\x02\u0220\u021F\x03\x02\x02\x02\u0221" +
		"\u0229\x03\x02\x02\x02\u0222\u0225\x07_\x02\x02\u0223\u0226\x05^0\x02" +
		"\u0224\u0226\x05d3\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0224\x03\x02" +
		"\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0222\x03\x02\x02\x02\u0228" +
		"\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02" +
		"\x02\x02\u022Ac\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022D" +
		"\t\x0F\x02\x02\u022De\x03\x02\x02\x02\u022E\u0230\x07";
	private static readonly _serializedATNSegment1: string =
		"X\x02\x02\u022F\u0231\x05R*\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231" +
		"\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x07Y\x02\x02" +
		"\u0233g\x03\x02\x02\x029kmv~\x81\x84\x8D\x92\x99\x9F\xAF\xB5\xBE\xCA\xD7" +
		"\xE0\xE8\xEB\xEE\xF9\u0102\u010D\u0127\u012A\u012D\u0135\u013B\u0142\u014B" +
		"\u0150\u015A\u016B\u0170\u0175\u017A\u017E\u0182\u0186\u0188\u018C\u0197" +
		"\u01A5\u01B7\u01C7\u01EF\u01F8\u01FA\u0204\u020B\u0211\u0218\u0220\u0225" +
		"\u0229\u0230";
	public static readonly _serializedATN: string = Utils.join(
		[
			AshParser._serializedATNSegment0,
			AshParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AshParser.__ATN) {
			AshParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AshParser._serializedATN));
		}

		return AshParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(AshParser.EOF, 0); }
	public miscAshDeclarations(): MiscAshDeclarationsContext[];
	public miscAshDeclarations(i: number): MiscAshDeclarationsContext;
	public miscAshDeclarations(i?: number): MiscAshDeclarationsContext | MiscAshDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MiscAshDeclarationsContext);
		} else {
			return this.getRuleContext(i, MiscAshDeclarationsContext);
		}
	}
	public functionDeclaration(): FunctionDeclarationContext[];
	public functionDeclaration(i: number): FunctionDeclarationContext;
	public functionDeclaration(i?: number): FunctionDeclarationContext | FunctionDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclarationContext);
		} else {
			return this.getRuleContext(i, FunctionDeclarationContext);
		}
	}
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MiscAshDeclarationsContext extends ParserRuleContext {
	public importDeclaration(): ImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportDeclarationContext);
	}
	public notifyDeclaration(): NotifyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NotifyDeclarationContext);
	}
	public scriptDeclaration(): ScriptDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ScriptDeclarationContext);
	}
	public sinceDeclaration(): SinceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SinceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_miscAshDeclarations; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterMiscAshDeclarations) {
			listener.enterMiscAshDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitMiscAshDeclarations) {
			listener.exitMiscAshDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitMiscAshDeclarations) {
			return visitor.visitMiscAshDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(AshParser.IMPORT, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.STRING_LITERAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(AshParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(AshParser.GT, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.IDENTIFIER);
		} else {
			return this.getToken(AshParser.IDENTIFIER, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.DIV);
		} else {
			return this.getToken(AshParser.DIV, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.DOT);
		} else {
			return this.getToken(AshParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotifyDeclarationContext extends ParserRuleContext {
	public NOTIFY(): TerminalNode { return this.getToken(AshParser.NOTIFY, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public SEMI(): TerminalNode { return this.getToken(AshParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_notifyDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterNotifyDeclaration) {
			listener.enterNotifyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitNotifyDeclaration) {
			listener.exitNotifyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitNotifyDeclaration) {
			return visitor.visitNotifyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptDeclarationContext extends ParserRuleContext {
	public SCRIPT(): TerminalNode { return this.getToken(AshParser.SCRIPT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(AshParser.STRING_LITERAL, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_scriptDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterScriptDeclaration) {
			listener.enterScriptDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitScriptDeclaration) {
			listener.exitScriptDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitScriptDeclaration) {
			return visitor.visitScriptDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SinceDeclarationContext extends ParserRuleContext {
	public SINCE(): TerminalNode { return this.getToken(AshParser.SINCE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_sinceDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterSinceDeclaration) {
			listener.enterSinceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitSinceDeclaration) {
			listener.exitSinceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitSinceDeclaration) {
			return visitor.visitSinceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(AshParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_typeTypeOrVoid; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterTypeTypeOrVoid) {
			listener.enterTypeTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitTypeTypeOrVoid) {
			listener.exitTypeTypeOrVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitTypeTypeOrVoid) {
			return visitor.visitTypeTypeOrVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarator(): VariableDeclaratorContext {
		return this.getRuleContext(0, VariableDeclaratorContext);
	}
	public SEMI(): TerminalNode { return this.getToken(AshParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext {
		return this.getRuleContext(0, ConstantDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(AshParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AshParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AshParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.NULL_LITERAL, 0); }
	public ashLiteral(): AshLiteralContext | undefined {
		return this.tryGetRuleContext(0, AshLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_literal; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AshLiteralContext extends ParserRuleContext {
	public ASH_BOOLEANS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_BOOLEANS_LITERAL, 0); }
	public ASH_BOUNTY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_BOUNTY_LITERAL, 0); }
	public ASH_CLASS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_CLASS_LITERAL, 0); }
	public ASH_CLASSES_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_CLASSES_LITERAL, 0); }
	public ASH_COINMASTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_COINMASTER_LITERAL, 0); }
	public ASH_EFFECT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_EFFECT_LITERAL, 0); }
	public ASH_EFFECTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_EFFECTS_LITERAL, 0); }
	public ASH_ELEMENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ELEMENT_LITERAL, 0); }
	public ASH_ELEMENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ELEMENTS_LITERAL, 0); }
	public ASH_FAMILIAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_FAMILIAR_LITERAL, 0); }
	public ASH_FAMILIARS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_FAMILIARS_LITERAL, 0); }
	public ASH_FLOATS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_FLOATS_LITERAL, 0); }
	public ASH_INTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_INTS_LITERAL, 0); }
	public ASH_ITEM_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ITEM_LITERAL, 0); }
	public ASH_ITEMS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ITEMS_LITERAL, 0); }
	public ASH_LOCATION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_LOCATION_LITERAL, 0); }
	public ASH_LOCATIONS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_LOCATIONS_LITERAL, 0); }
	public ASH_MONSTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_MONSTER_LITERAL, 0); }
	public ASH_MONSTERS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_MONSTERS_LITERAL, 0); }
	public ASH_PHYLUM_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_PHYLUM_LITERAL, 0); }
	public ASH_SERVANT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SERVANT_LITERAL, 0); }
	public ASH_SKILL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SKILL_LITERAL, 0); }
	public ASH_SKILLS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SKILLS_LITERAL, 0); }
	public ASH_SLOT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SLOT_LITERAL, 0); }
	public ASH_SLOTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SLOTS_LITERAL, 0); }
	public ASH_STAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_STAT_LITERAL, 0); }
	public ASH_STATS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_STATS_LITERAL, 0); }
	public ASH_STRINGS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_STRINGS_LITERAL, 0); }
	public ASH_THRALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_THRALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_ashLiteral; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterAshLiteral) {
			listener.enterAshLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitAshLiteral) {
			listener.exitAshLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitAshLiteral) {
			return visitor.visitAshLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(AshParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(AshParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(AshParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(AshParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(AshParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(AshParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_block; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarator(): VariableDeclaratorContext {
		return this.getRuleContext(0, VariableDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel: BlockContext;
	public _statementExpression: ExpressionContext;
	public _identifierLabel: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(AshParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(AshParser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.RPAREN, 0); }
	public foreach(): ForeachContext | undefined {
		return this.tryGetRuleContext(0, ForeachContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(AshParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(AshParser.DO, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(AshParser.SEMI, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(AshParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(AshParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(AshParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(AshParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(AshParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public THROW(): TerminalNode | undefined { return this.tryGetToken(AshParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(AshParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AshParser.IDENTIFIER, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(AshParser.CONTINUE, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(AshParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_statement; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(AshParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AshParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AshParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_catchType; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(AshParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression: ExpressionContext;
	public _enumConstantName: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(AshParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(AshParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AshParser.IDENTIFIER, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AshParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.SEMI);
		} else {
			return this.getToken(AshParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_forControl; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_forInit; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(AshParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeachContext extends ParserRuleContext {
	public FOREACH(): TerminalNode { return this.getToken(AshParser.FOREACH, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.IDENTIFIER);
		} else {
			return this.getToken(AshParser.IDENTIFIER, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(AshParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AshParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_foreach; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterForeach) {
			listener.enterForeach(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitForeach) {
			listener.exitForeach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitForeach) {
			return visitor.visitForeach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AshParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AshParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AshParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix: Token;
	public _bop: Token;
	public _postfix: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(AshParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AshParser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(AshParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(AshParser.RBRACK, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.LPAREN, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.RPAREN, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(AshParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(AshParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(AshParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(AshParser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(AshParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(AshParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(AshParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(AshParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(AshParser.MOD, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.LT);
		} else {
			return this.getToken(AshParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.GT);
		} else {
			return this.getToken(AshParser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(AshParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(AshParser.GE, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(AshParser.NOTEQUAL, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(AshParser.BITAND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(AshParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(AshParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(AshParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(AshParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(AshParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(AshParser.QUESTION, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(AshParser.CONTAINS, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AshParser.MOD_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_expression; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(AshParser.RPAREN, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AshParser.IDENTIFIER, 0); }
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_primary; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_typeList; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public ashType(): AshTypeContext | undefined {
		return this.tryGetRuleContext(0, AshTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_typeType; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(AshParser.BOOLEAN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AshParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(AshParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(AshParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(AshParser.LBRACK, 0); }
	public mapTypeKeys(): MapTypeKeysContext {
		return this.getRuleContext(0, MapTypeKeysContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(AshParser.RBRACK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AshParser.IDENTIFIER, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public ashType(): AshTypeContext | undefined {
		return this.tryGetRuleContext(0, AshTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_mapType; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterMapType) {
			listener.enterMapType(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitMapType) {
			listener.exitMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitMapType) {
			return visitor.visitMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeKeysContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext[];
	public primitiveType(i: number): PrimitiveTypeContext;
	public primitiveType(i?: number): PrimitiveTypeContext | PrimitiveTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimitiveTypeContext);
		} else {
			return this.getRuleContext(i, PrimitiveTypeContext);
		}
	}
	public ashType(): AshTypeContext[];
	public ashType(i: number): AshTypeContext;
	public ashType(i?: number): AshTypeContext | AshTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AshTypeContext);
		} else {
			return this.getRuleContext(i, AshTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AshParser.COMMA);
		} else {
			return this.getToken(AshParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_mapTypeKeys; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterMapTypeKeys) {
			listener.enterMapTypeKeys(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitMapTypeKeys) {
			listener.exitMapTypeKeys(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitMapTypeKeys) {
			return visitor.visitMapTypeKeys(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AshTypeContext extends ParserRuleContext {
	public ASH_BOUNTY_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_BOUNTY_TYPE, 0); }
	public ASH_BUFFER_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_BUFFER_TYPE, 0); }
	public ASH_CLASS_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_CLASS_TYPE, 0); }
	public ASH_COINMASTER_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_COINMASTER_TYPE, 0); }
	public ASH_EFFECT_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_EFFECT_TYPE, 0); }
	public ASH_ELEMENT_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ELEMENT_TYPE, 0); }
	public ASH_FAMILIAR_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_FAMILIAR_TYPE, 0); }
	public ASH_ITEM_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_ITEM_TYPE, 0); }
	public ASH_LOCATION_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_LOCATION_TYPE, 0); }
	public ASH_MATCHER_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_MATCHER_TYPE, 0); }
	public ASH_MONSTER_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_MONSTER_TYPE, 0); }
	public ASH_PHYLUM_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_PHYLUM_TYPE, 0); }
	public ASH_SERVANT_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SERVANT_TYPE, 0); }
	public ASH_SKILL_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SKILL_TYPE, 0); }
	public ASH_SLOT_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_SLOT_TYPE, 0); }
	public ASH_STAT_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_STAT_TYPE, 0); }
	public ASH_THRALL_TYPE(): TerminalNode | undefined { return this.tryGetToken(AshParser.ASH_THRALL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_ashType; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterAshType) {
			listener.enterAshType(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitAshType) {
			listener.exitAshType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitAshType) {
			return visitor.visitAshType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(AshParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AshParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AshParser.RULE_arguments; }
	// @Override
	public enterRule(listener: AshParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: AshParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AshParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


