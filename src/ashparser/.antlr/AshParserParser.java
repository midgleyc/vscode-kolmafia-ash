// Generated from c:\Users\danie\Desktop\kolmafia-ash++\kolmafia-ash-pp\src\ashparser\AshParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AshParserParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BOOLEAN=1, BREAK=2, CASE=3, CATCH=4, CONST=5, CONTAINS=6, CONTINUE=7, 
		DEFAULT=8, DO=9, DOUBLE=10, ELSE=11, FINALLY=12, FLOAT=13, FOR=14, IF=15, 
		IMPORT=16, INT=17, RETURN=18, SCRIPT=19, SINCE=20, STATIC=21, STRING=22, 
		SWITCH=23, THROW=24, TRY=25, VOID=26, WHILE=27, DECIMAL_LITERAL=28, HEX_LITERAL=29, 
		OCT_LITERAL=30, BINARY_LITERAL=31, FLOAT_LITERAL=32, HEX_FLOAT_LITERAL=33, 
		BOOL_LITERAL=34, STRING_LITERAL=35, NULL_LITERAL=36, ASH_BOOLEANS_LITERAL=37, 
		ASH_BOUNTY_LITERAL=38, ASH_CLASS_LITERAL=39, ASH_CLASSES_LITERAL=40, ASH_COINMASTER_LITERAL=41, 
		ASH_EFFECT_LITERAL=42, ASH_EFFECTS_LITERAL=43, ASH_ELEMENT_LITERAL=44, 
		ASH_ELEMENTS_LITERAL=45, ASH_FAMILIAR_LITERAL=46, ASH_FAMILIARS_LITERAL=47, 
		ASH_FLOATS_LITERAL=48, ASH_INTS_LITERAL=49, ASH_ITEM_LITERAL=50, ASH_ITEMS_LITERAL=51, 
		ASH_LOCATION_LITERAL=52, ASH_LOCATIONS_LITERAL=53, ASH_MONSTER_LITERAL=54, 
		ASH_MONSTERS_LITERAL=55, ASH_PHYLUM_LITERAL=56, ASH_SERVANT_LITERAL=57, 
		ASH_SKILL_LITERAL=58, ASH_SKILLS_LITERAL=59, ASH_SLOT_LITERAL=60, ASH_SLOTS_LITERAL=61, 
		ASH_STAT_LITERAL=62, ASH_STATS_LITERAL=63, ASH_STRINGS_LITERAL=64, ASH_THRALL_LITERAL=65, 
		ASH_BOUNTY_TYPE=66, ASH_CLASS_TYPE=67, ASH_COINMASTER_TYPE=68, ASH_EFFECT_TYPE=69, 
		ASH_ELEMENT_TYPE=70, ASH_FAMILIAR_TYPE=71, ASH_ITEM_TYPE=72, ASH_LOCATION_TYPE=73, 
		ASH_MONSTER_TYPE=74, ASH_PHYLUM_TYPE=75, ASH_SERVANT_TYPE=76, ASH_SKILL_TYPE=77, 
		ASH_SLOT_TYPE=78, ASH_STAT_TYPE=79, ASH_THRALL_TYPE=80, LPAREN=81, RPAREN=82, 
		LBRACE=83, RBRACE=84, LBRACK=85, RBRACK=86, SEMI=87, COMMA=88, DOT=89, 
		ASSIGN=90, GT=91, LT=92, BANG=93, TILDE=94, QUESTION=95, COLON=96, EQUAL=97, 
		LE=98, GE=99, NOTEQUAL=100, AND=101, OR=102, INC=103, DEC=104, ADD=105, 
		SUB=106, MUL=107, DIV=108, BITAND=109, BITOR=110, CARET=111, MOD=112, 
		ADD_ASSIGN=113, SUB_ASSIGN=114, MUL_ASSIGN=115, DIV_ASSIGN=116, AND_ASSIGN=117, 
		OR_ASSIGN=118, XOR_ASSIGN=119, MOD_ASSIGN=120, LSHIFT_ASSIGN=121, RSHIFT_ASSIGN=122, 
		URSHIFT_ASSIGN=123, WS=124, COMMENT=125, LINE_COMMENT_SLASH=126, LINE_COMMENT_POUND=127, 
		IDENTIFIER=128, FILEPATH=129;
	public static final int
		RULE_compilationUnit = 0, RULE_miscAshDeclarations = 1, RULE_scriptDeclaration = 2, 
		RULE_sinceDeclaration = 3, RULE_importDeclaration = 4, RULE_functionDeclaration = 5, 
		RULE_functionBody = 6, RULE_typeTypeOrVoid = 7, RULE_fieldDeclaration = 8, 
		RULE_constDeclaration = 9, RULE_constantDeclarator = 10, RULE_variableDeclarator = 11, 
		RULE_variableInitializer = 12, RULE_formalParameters = 13, RULE_formalParameterList = 14, 
		RULE_formalParameter = 15, RULE_literal = 16, RULE_integerLiteral = 17, 
		RULE_floatLiteral = 18, RULE_ashLiteral = 19, RULE_elementValuePairs = 20, 
		RULE_elementValuePair = 21, RULE_elementValue = 22, RULE_elementValueArrayInitializer = 23, 
		RULE_defaultValue = 24, RULE_block = 25, RULE_blockStatement = 26, RULE_variableDeclaration = 27, 
		RULE_statement = 28, RULE_catchClause = 29, RULE_catchType = 30, RULE_finallyBlock = 31, 
		RULE_switchBlockStatementGroup = 32, RULE_switchLabel = 33, RULE_forControl = 34, 
		RULE_forInit = 35, RULE_enhancedForControl = 36, RULE_parExpression = 37, 
		RULE_expressionList = 38, RULE_methodCall = 39, RULE_expression = 40, 
		RULE_primary = 41, RULE_typeList = 42, RULE_typeType = 43, RULE_primitiveType = 44, 
		RULE_ashType = 45, RULE_arguments = 46;
	public static final String[] ruleNames = {
		"compilationUnit", "miscAshDeclarations", "scriptDeclaration", "sinceDeclaration", 
		"importDeclaration", "functionDeclaration", "functionBody", "typeTypeOrVoid", 
		"fieldDeclaration", "constDeclaration", "constantDeclarator", "variableDeclarator", 
		"variableInitializer", "formalParameters", "formalParameterList", "formalParameter", 
		"literal", "integerLiteral", "floatLiteral", "ashLiteral", "elementValuePairs", 
		"elementValuePair", "elementValue", "elementValueArrayInitializer", "defaultValue", 
		"block", "blockStatement", "variableDeclaration", "statement", "catchClause", 
		"catchType", "finallyBlock", "switchBlockStatementGroup", "switchLabel", 
		"forControl", "forInit", "enhancedForControl", "parExpression", "expressionList", 
		"methodCall", "expression", "primary", "typeList", "typeType", "primitiveType", 
		"ashType", "arguments"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'boolean'", "'break'", "'case'", "'catch'", "'const'", "'contains'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'finally'", 
		"'float'", "'for'", "'if'", "'import'", "'int'", "'return'", "'script'", 
		"'since'", "'static'", "'string'", "'switch'", "'throw'", "'try'", "'void'", 
		"'while'", null, null, null, null, null, null, null, null, "'null'", null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, "'bounty'", "'class'", "'coinmaster'", "'effect'", 
		"'element'", "'familiar'", "'item'", "'location'", "'monster'", "'phylum'", 
		"'servant'", "'skill'", "'slot'", "'stat'", "'thrall'", "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", 
		"'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
		"'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", 
		"'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", 
		"'>>='", "'>>>='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "BOOLEAN", "BREAK", "CASE", "CATCH", "CONST", "CONTAINS", "CONTINUE", 
		"DEFAULT", "DO", "DOUBLE", "ELSE", "FINALLY", "FLOAT", "FOR", "IF", "IMPORT", 
		"INT", "RETURN", "SCRIPT", "SINCE", "STATIC", "STRING", "SWITCH", "THROW", 
		"TRY", "VOID", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", "OCT_LITERAL", 
		"BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", "BOOL_LITERAL", 
		"STRING_LITERAL", "NULL_LITERAL", "ASH_BOOLEANS_LITERAL", "ASH_BOUNTY_LITERAL", 
		"ASH_CLASS_LITERAL", "ASH_CLASSES_LITERAL", "ASH_COINMASTER_LITERAL", 
		"ASH_EFFECT_LITERAL", "ASH_EFFECTS_LITERAL", "ASH_ELEMENT_LITERAL", "ASH_ELEMENTS_LITERAL", 
		"ASH_FAMILIAR_LITERAL", "ASH_FAMILIARS_LITERAL", "ASH_FLOATS_LITERAL", 
		"ASH_INTS_LITERAL", "ASH_ITEM_LITERAL", "ASH_ITEMS_LITERAL", "ASH_LOCATION_LITERAL", 
		"ASH_LOCATIONS_LITERAL", "ASH_MONSTER_LITERAL", "ASH_MONSTERS_LITERAL", 
		"ASH_PHYLUM_LITERAL", "ASH_SERVANT_LITERAL", "ASH_SKILL_LITERAL", "ASH_SKILLS_LITERAL", 
		"ASH_SLOT_LITERAL", "ASH_SLOTS_LITERAL", "ASH_STAT_LITERAL", "ASH_STATS_LITERAL", 
		"ASH_STRINGS_LITERAL", "ASH_THRALL_LITERAL", "ASH_BOUNTY_TYPE", "ASH_CLASS_TYPE", 
		"ASH_COINMASTER_TYPE", "ASH_EFFECT_TYPE", "ASH_ELEMENT_TYPE", "ASH_FAMILIAR_TYPE", 
		"ASH_ITEM_TYPE", "ASH_LOCATION_TYPE", "ASH_MONSTER_TYPE", "ASH_PHYLUM_TYPE", 
		"ASH_SERVANT_TYPE", "ASH_SKILL_TYPE", "ASH_SLOT_TYPE", "ASH_STAT_TYPE", 
		"ASH_THRALL_TYPE", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "WS", 
		"COMMENT", "LINE_COMMENT_SLASH", "LINE_COMMENT_POUND", "IDENTIFIER", "FILEPATH"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "AshParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AshParserParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(AshParserParser.EOF, 0); }
		public List<MiscAshDeclarationsContext> miscAshDeclarations() {
			return getRuleContexts(MiscAshDeclarationsContext.class);
		}
		public MiscAshDeclarationsContext miscAshDeclarations(int i) {
			return getRuleContext(MiscAshDeclarationsContext.class,i);
		}
		public List<FunctionDeclarationContext> functionDeclaration() {
			return getRuleContexts(FunctionDeclarationContext.class);
		}
		public FunctionDeclarationContext functionDeclaration(int i) {
			return getRuleContext(FunctionDeclarationContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << IMPORT) | (1L << INT) | (1L << SCRIPT) | (1L << SINCE) | (1L << STRING) | (1L << VOID))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (ASH_BOUNTY_TYPE - 66)) | (1L << (ASH_CLASS_TYPE - 66)) | (1L << (ASH_COINMASTER_TYPE - 66)) | (1L << (ASH_EFFECT_TYPE - 66)) | (1L << (ASH_ELEMENT_TYPE - 66)) | (1L << (ASH_FAMILIAR_TYPE - 66)) | (1L << (ASH_ITEM_TYPE - 66)) | (1L << (ASH_LOCATION_TYPE - 66)) | (1L << (ASH_MONSTER_TYPE - 66)) | (1L << (ASH_PHYLUM_TYPE - 66)) | (1L << (ASH_SERVANT_TYPE - 66)) | (1L << (ASH_SKILL_TYPE - 66)) | (1L << (ASH_SLOT_TYPE - 66)) | (1L << (ASH_STAT_TYPE - 66)) | (1L << (ASH_THRALL_TYPE - 66)))) != 0)) {
				{
				setState(96);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case IMPORT:
				case SCRIPT:
				case SINCE:
					{
					setState(94);
					miscAshDeclarations();
					}
					break;
				case BOOLEAN:
				case FLOAT:
				case INT:
				case STRING:
				case VOID:
				case ASH_BOUNTY_TYPE:
				case ASH_CLASS_TYPE:
				case ASH_COINMASTER_TYPE:
				case ASH_EFFECT_TYPE:
				case ASH_ELEMENT_TYPE:
				case ASH_FAMILIAR_TYPE:
				case ASH_ITEM_TYPE:
				case ASH_LOCATION_TYPE:
				case ASH_MONSTER_TYPE:
				case ASH_PHYLUM_TYPE:
				case ASH_SERVANT_TYPE:
				case ASH_SKILL_TYPE:
				case ASH_SLOT_TYPE:
				case ASH_STAT_TYPE:
				case ASH_THRALL_TYPE:
					{
					setState(95);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MiscAshDeclarationsContext extends ParserRuleContext {
		public ScriptDeclarationContext scriptDeclaration() {
			return getRuleContext(ScriptDeclarationContext.class,0);
		}
		public SinceDeclarationContext sinceDeclaration() {
			return getRuleContext(SinceDeclarationContext.class,0);
		}
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public MiscAshDeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_miscAshDeclarations; }
	}

	public final MiscAshDeclarationsContext miscAshDeclarations() throws RecognitionException {
		MiscAshDeclarationsContext _localctx = new MiscAshDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_miscAshDeclarations);
		try {
			setState(106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SCRIPT:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				scriptDeclaration();
				}
				break;
			case SINCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
				sinceDeclaration();
				}
				break;
			case IMPORT:
				enterOuterAlt(_localctx, 3);
				{
				setState(105);
				importDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScriptDeclarationContext extends ParserRuleContext {
		public TerminalNode SCRIPT() { return getToken(AshParserParser.SCRIPT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(AshParserParser.STRING_LITERAL, 0); }
		public ScriptDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scriptDeclaration; }
	}

	public final ScriptDeclarationContext scriptDeclaration() throws RecognitionException {
		ScriptDeclarationContext _localctx = new ScriptDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_scriptDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(SCRIPT);
			setState(109);
			match(STRING_LITERAL);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(110);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SinceDeclarationContext extends ParserRuleContext {
		public TerminalNode SINCE() { return getToken(AshParserParser.SINCE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public SinceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sinceDeclaration; }
	}

	public final SinceDeclarationContext sinceDeclaration() throws RecognitionException {
		SinceDeclarationContext _localctx = new SinceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sinceDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(SINCE);
			setState(114);
			match(IDENTIFIER);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(115);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportDeclarationContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(AshParserParser.IMPORT, 0); }
		public TerminalNode FILEPATH() { return getToken(AshParserParser.FILEPATH, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(AshParserParser.STRING_LITERAL, 0); }
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(IMPORT);
			setState(123);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LT:
				{
				setState(119);
				match(LT);
				setState(120);
				match(FILEPATH);
				setState(121);
				match(GT);
				}
				break;
			case STRING_LITERAL:
				{
				setState(122);
				match(STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(125);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TypeTypeOrVoidContext typeTypeOrVoid() {
			return getRuleContext(TypeTypeOrVoidContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			typeTypeOrVoid();
			setState(129);
			match(IDENTIFIER);
			setState(130);
			formalParameters();
			setState(131);
			functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_functionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeOrVoidContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode VOID() { return getToken(AshParserParser.VOID, 0); }
		public TypeTypeOrVoidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeTypeOrVoid; }
	}

	public final TypeTypeOrVoidContext typeTypeOrVoid() throws RecognitionException {
		TypeTypeOrVoidContext _localctx = new TypeTypeOrVoidContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_typeTypeOrVoid);
		try {
			setState(137);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
			case ASH_BOUNTY_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(135);
				typeType();
				}
				break;
			case VOID:
				enterOuterAlt(_localctx, 2);
				{
				setState(136);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorContext variableDeclarator() {
			return getRuleContext(VariableDeclaratorContext.class,0);
		}
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_fieldDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			typeType();
			setState(140);
			variableDeclarator();
			setState(141);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public ConstantDeclaratorContext constantDeclarator() {
			return getRuleContext(ConstantDeclaratorContext.class,0);
		}
		public ConstDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDeclaration; }
	}

	public final ConstDeclarationContext constDeclaration() throws RecognitionException {
		ConstDeclarationContext _localctx = new ConstDeclarationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_constDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			typeType();
			setState(144);
			constantDeclarator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDeclaratorContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public VariableInitializerContext variableInitializer() {
			return getRuleContext(VariableInitializerContext.class,0);
		}
		public ConstantDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDeclarator; }
	}

	public final ConstantDeclaratorContext constantDeclarator() throws RecognitionException {
		ConstantDeclaratorContext _localctx = new ConstantDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_constantDeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(IDENTIFIER);
			setState(147);
			match(ASSIGN);
			setState(148);
			variableInitializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public VariableInitializerContext variableInitializer() {
			return getRuleContext(VariableInitializerContext.class,0);
		}
		public VariableDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarator; }
	}

	public final VariableDeclaratorContext variableDeclarator() throws RecognitionException {
		VariableDeclaratorContext _localctx = new VariableDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_variableDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(IDENTIFIER);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(151);
				match(ASSIGN);
				setState(152);
				variableInitializer();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableInitializerContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableInitializer; }
	}

	public final VariableInitializerContext variableInitializer() throws RecognitionException {
		VariableInitializerContext _localctx = new VariableInitializerContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_variableInitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParametersContext extends ParserRuleContext {
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FormalParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameters; }
	}

	public final FormalParametersContext formalParameters() throws RecognitionException {
		FormalParametersContext _localctx = new FormalParametersContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_formalParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(LPAREN);
			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (ASH_BOUNTY_TYPE - 66)) | (1L << (ASH_CLASS_TYPE - 66)) | (1L << (ASH_COINMASTER_TYPE - 66)) | (1L << (ASH_EFFECT_TYPE - 66)) | (1L << (ASH_ELEMENT_TYPE - 66)) | (1L << (ASH_FAMILIAR_TYPE - 66)) | (1L << (ASH_ITEM_TYPE - 66)) | (1L << (ASH_LOCATION_TYPE - 66)) | (1L << (ASH_MONSTER_TYPE - 66)) | (1L << (ASH_PHYLUM_TYPE - 66)) | (1L << (ASH_SERVANT_TYPE - 66)) | (1L << (ASH_SKILL_TYPE - 66)) | (1L << (ASH_SLOT_TYPE - 66)) | (1L << (ASH_STAT_TYPE - 66)) | (1L << (ASH_THRALL_TYPE - 66)))) != 0)) {
				{
				setState(158);
				formalParameterList();
				}
			}

			setState(161);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterContext> formalParameter() {
			return getRuleContexts(FormalParameterContext.class);
		}
		public FormalParameterContext formalParameter(int i) {
			return getRuleContext(FormalParameterContext.class,i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			formalParameter();
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(164);
				match(COMMA);
				setState(165);
				formalParameter();
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public FormalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameter; }
	}

	public final FormalParameterContext formalParameter() throws RecognitionException {
		FormalParameterContext _localctx = new FormalParameterContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_formalParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			typeType();
			setState(172);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public FloatLiteralContext floatLiteral() {
			return getRuleContext(FloatLiteralContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(AshParserParser.STRING_LITERAL, 0); }
		public TerminalNode BOOL_LITERAL() { return getToken(AshParserParser.BOOL_LITERAL, 0); }
		public TerminalNode NULL_LITERAL() { return getToken(AshParserParser.NULL_LITERAL, 0); }
		public AshLiteralContext ashLiteral() {
			return getRuleContext(AshLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_literal);
		try {
			setState(180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				integerLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
				floatLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(176);
				match(STRING_LITERAL);
				}
				break;
			case BOOL_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(177);
				match(BOOL_LITERAL);
				}
				break;
			case NULL_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(178);
				match(NULL_LITERAL);
				}
				break;
			case ASH_BOOLEANS_LITERAL:
			case ASH_BOUNTY_LITERAL:
			case ASH_CLASS_LITERAL:
			case ASH_CLASSES_LITERAL:
			case ASH_COINMASTER_LITERAL:
			case ASH_EFFECT_LITERAL:
			case ASH_EFFECTS_LITERAL:
			case ASH_ELEMENT_LITERAL:
			case ASH_ELEMENTS_LITERAL:
			case ASH_FAMILIAR_LITERAL:
			case ASH_FAMILIARS_LITERAL:
			case ASH_FLOATS_LITERAL:
			case ASH_INTS_LITERAL:
			case ASH_ITEM_LITERAL:
			case ASH_ITEMS_LITERAL:
			case ASH_LOCATION_LITERAL:
			case ASH_LOCATIONS_LITERAL:
			case ASH_MONSTER_LITERAL:
			case ASH_MONSTERS_LITERAL:
			case ASH_PHYLUM_LITERAL:
			case ASH_SERVANT_LITERAL:
			case ASH_SKILL_LITERAL:
			case ASH_SKILLS_LITERAL:
			case ASH_SLOT_LITERAL:
			case ASH_SLOTS_LITERAL:
			case ASH_STAT_LITERAL:
			case ASH_STATS_LITERAL:
			case ASH_STRINGS_LITERAL:
			case ASH_THRALL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(179);
				ashLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerLiteralContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(AshParserParser.DECIMAL_LITERAL, 0); }
		public TerminalNode HEX_LITERAL() { return getToken(AshParserParser.HEX_LITERAL, 0); }
		public TerminalNode OCT_LITERAL() { return getToken(AshParserParser.OCT_LITERAL, 0); }
		public TerminalNode BINARY_LITERAL() { return getToken(AshParserParser.BINARY_LITERAL, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_integerLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatLiteralContext extends ParserRuleContext {
		public TerminalNode FLOAT_LITERAL() { return getToken(AshParserParser.FLOAT_LITERAL, 0); }
		public TerminalNode HEX_FLOAT_LITERAL() { return getToken(AshParserParser.HEX_FLOAT_LITERAL, 0); }
		public FloatLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatLiteral; }
	}

	public final FloatLiteralContext floatLiteral() throws RecognitionException {
		FloatLiteralContext _localctx = new FloatLiteralContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_floatLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			_la = _input.LA(1);
			if ( !(_la==FLOAT_LITERAL || _la==HEX_FLOAT_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AshLiteralContext extends ParserRuleContext {
		public TerminalNode ASH_BOOLEANS_LITERAL() { return getToken(AshParserParser.ASH_BOOLEANS_LITERAL, 0); }
		public TerminalNode ASH_BOUNTY_LITERAL() { return getToken(AshParserParser.ASH_BOUNTY_LITERAL, 0); }
		public TerminalNode ASH_CLASS_LITERAL() { return getToken(AshParserParser.ASH_CLASS_LITERAL, 0); }
		public TerminalNode ASH_CLASSES_LITERAL() { return getToken(AshParserParser.ASH_CLASSES_LITERAL, 0); }
		public TerminalNode ASH_COINMASTER_LITERAL() { return getToken(AshParserParser.ASH_COINMASTER_LITERAL, 0); }
		public TerminalNode ASH_EFFECT_LITERAL() { return getToken(AshParserParser.ASH_EFFECT_LITERAL, 0); }
		public TerminalNode ASH_EFFECTS_LITERAL() { return getToken(AshParserParser.ASH_EFFECTS_LITERAL, 0); }
		public TerminalNode ASH_ELEMENT_LITERAL() { return getToken(AshParserParser.ASH_ELEMENT_LITERAL, 0); }
		public TerminalNode ASH_ELEMENTS_LITERAL() { return getToken(AshParserParser.ASH_ELEMENTS_LITERAL, 0); }
		public TerminalNode ASH_FAMILIAR_LITERAL() { return getToken(AshParserParser.ASH_FAMILIAR_LITERAL, 0); }
		public TerminalNode ASH_FAMILIARS_LITERAL() { return getToken(AshParserParser.ASH_FAMILIARS_LITERAL, 0); }
		public TerminalNode ASH_FLOATS_LITERAL() { return getToken(AshParserParser.ASH_FLOATS_LITERAL, 0); }
		public TerminalNode ASH_INTS_LITERAL() { return getToken(AshParserParser.ASH_INTS_LITERAL, 0); }
		public TerminalNode ASH_ITEM_LITERAL() { return getToken(AshParserParser.ASH_ITEM_LITERAL, 0); }
		public TerminalNode ASH_ITEMS_LITERAL() { return getToken(AshParserParser.ASH_ITEMS_LITERAL, 0); }
		public TerminalNode ASH_LOCATION_LITERAL() { return getToken(AshParserParser.ASH_LOCATION_LITERAL, 0); }
		public TerminalNode ASH_LOCATIONS_LITERAL() { return getToken(AshParserParser.ASH_LOCATIONS_LITERAL, 0); }
		public TerminalNode ASH_MONSTER_LITERAL() { return getToken(AshParserParser.ASH_MONSTER_LITERAL, 0); }
		public TerminalNode ASH_MONSTERS_LITERAL() { return getToken(AshParserParser.ASH_MONSTERS_LITERAL, 0); }
		public TerminalNode ASH_PHYLUM_LITERAL() { return getToken(AshParserParser.ASH_PHYLUM_LITERAL, 0); }
		public TerminalNode ASH_SERVANT_LITERAL() { return getToken(AshParserParser.ASH_SERVANT_LITERAL, 0); }
		public TerminalNode ASH_SKILL_LITERAL() { return getToken(AshParserParser.ASH_SKILL_LITERAL, 0); }
		public TerminalNode ASH_SKILLS_LITERAL() { return getToken(AshParserParser.ASH_SKILLS_LITERAL, 0); }
		public TerminalNode ASH_SLOT_LITERAL() { return getToken(AshParserParser.ASH_SLOT_LITERAL, 0); }
		public TerminalNode ASH_SLOTS_LITERAL() { return getToken(AshParserParser.ASH_SLOTS_LITERAL, 0); }
		public TerminalNode ASH_STAT_LITERAL() { return getToken(AshParserParser.ASH_STAT_LITERAL, 0); }
		public TerminalNode ASH_STATS_LITERAL() { return getToken(AshParserParser.ASH_STATS_LITERAL, 0); }
		public TerminalNode ASH_STRINGS_LITERAL() { return getToken(AshParserParser.ASH_STRINGS_LITERAL, 0); }
		public TerminalNode ASH_THRALL_LITERAL() { return getToken(AshParserParser.ASH_THRALL_LITERAL, 0); }
		public AshLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ashLiteral; }
	}

	public final AshLiteralContext ashLiteral() throws RecognitionException {
		AshLiteralContext _localctx = new AshLiteralContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ashLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			_la = _input.LA(1);
			if ( !(((((_la - 37)) & ~0x3f) == 0 && ((1L << (_la - 37)) & ((1L << (ASH_BOOLEANS_LITERAL - 37)) | (1L << (ASH_BOUNTY_LITERAL - 37)) | (1L << (ASH_CLASS_LITERAL - 37)) | (1L << (ASH_CLASSES_LITERAL - 37)) | (1L << (ASH_COINMASTER_LITERAL - 37)) | (1L << (ASH_EFFECT_LITERAL - 37)) | (1L << (ASH_EFFECTS_LITERAL - 37)) | (1L << (ASH_ELEMENT_LITERAL - 37)) | (1L << (ASH_ELEMENTS_LITERAL - 37)) | (1L << (ASH_FAMILIAR_LITERAL - 37)) | (1L << (ASH_FAMILIARS_LITERAL - 37)) | (1L << (ASH_FLOATS_LITERAL - 37)) | (1L << (ASH_INTS_LITERAL - 37)) | (1L << (ASH_ITEM_LITERAL - 37)) | (1L << (ASH_ITEMS_LITERAL - 37)) | (1L << (ASH_LOCATION_LITERAL - 37)) | (1L << (ASH_LOCATIONS_LITERAL - 37)) | (1L << (ASH_MONSTER_LITERAL - 37)) | (1L << (ASH_MONSTERS_LITERAL - 37)) | (1L << (ASH_PHYLUM_LITERAL - 37)) | (1L << (ASH_SERVANT_LITERAL - 37)) | (1L << (ASH_SKILL_LITERAL - 37)) | (1L << (ASH_SKILLS_LITERAL - 37)) | (1L << (ASH_SLOT_LITERAL - 37)) | (1L << (ASH_SLOTS_LITERAL - 37)) | (1L << (ASH_STAT_LITERAL - 37)) | (1L << (ASH_STATS_LITERAL - 37)) | (1L << (ASH_STRINGS_LITERAL - 37)) | (1L << (ASH_THRALL_LITERAL - 37)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairsContext extends ParserRuleContext {
		public List<ElementValuePairContext> elementValuePair() {
			return getRuleContexts(ElementValuePairContext.class);
		}
		public ElementValuePairContext elementValuePair(int i) {
			return getRuleContext(ElementValuePairContext.class,i);
		}
		public ElementValuePairsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePairs; }
	}

	public final ElementValuePairsContext elementValuePairs() throws RecognitionException {
		ElementValuePairsContext _localctx = new ElementValuePairsContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_elementValuePairs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			elementValuePair();
			setState(193);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(189);
				match(COMMA);
				setState(190);
				elementValuePair();
				}
				}
				setState(195);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public ElementValuePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePair; }
	}

	public final ElementValuePairContext elementValuePair() throws RecognitionException {
		ElementValuePairContext _localctx = new ElementValuePairContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_elementValuePair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(IDENTIFIER);
			setState(197);
			match(ASSIGN);
			setState(198);
			elementValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ElementValueArrayInitializerContext elementValueArrayInitializer() {
			return getRuleContext(ElementValueArrayInitializerContext.class,0);
		}
		public ElementValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValue; }
	}

	public final ElementValueContext elementValue() throws RecognitionException {
		ElementValueContext _localctx = new ElementValueContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_elementValue);
		try {
			setState(202);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
			case VOID:
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
			case BOOL_LITERAL:
			case STRING_LITERAL:
			case NULL_LITERAL:
			case ASH_BOOLEANS_LITERAL:
			case ASH_BOUNTY_LITERAL:
			case ASH_CLASS_LITERAL:
			case ASH_CLASSES_LITERAL:
			case ASH_COINMASTER_LITERAL:
			case ASH_EFFECT_LITERAL:
			case ASH_EFFECTS_LITERAL:
			case ASH_ELEMENT_LITERAL:
			case ASH_ELEMENTS_LITERAL:
			case ASH_FAMILIAR_LITERAL:
			case ASH_FAMILIARS_LITERAL:
			case ASH_FLOATS_LITERAL:
			case ASH_INTS_LITERAL:
			case ASH_ITEM_LITERAL:
			case ASH_ITEMS_LITERAL:
			case ASH_LOCATION_LITERAL:
			case ASH_LOCATIONS_LITERAL:
			case ASH_MONSTER_LITERAL:
			case ASH_MONSTERS_LITERAL:
			case ASH_PHYLUM_LITERAL:
			case ASH_SERVANT_LITERAL:
			case ASH_SKILL_LITERAL:
			case ASH_SKILLS_LITERAL:
			case ASH_SLOT_LITERAL:
			case ASH_SLOTS_LITERAL:
			case ASH_STAT_LITERAL:
			case ASH_STATS_LITERAL:
			case ASH_STRINGS_LITERAL:
			case ASH_THRALL_LITERAL:
			case ASH_BOUNTY_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
			case LPAREN:
			case BANG:
			case TILDE:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(200);
				expression(0);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(201);
				elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueArrayInitializerContext extends ParserRuleContext {
		public List<ElementValueContext> elementValue() {
			return getRuleContexts(ElementValueContext.class);
		}
		public ElementValueContext elementValue(int i) {
			return getRuleContext(ElementValueContext.class,i);
		}
		public ElementValueArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValueArrayInitializer; }
	}

	public final ElementValueArrayInitializerContext elementValueArrayInitializer() throws RecognitionException {
		ElementValueArrayInitializerContext _localctx = new ElementValueArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_elementValueArrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(LBRACE);
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (LBRACE - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
				{
				setState(205);
				elementValue();
				setState(210);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(206);
						match(COMMA);
						setState(207);
						elementValue();
						}
						} 
					}
					setState(212);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				}
			}

			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(215);
				match(COMMA);
				}
			}

			setState(218);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultValueContext extends ParserRuleContext {
		public TerminalNode DEFAULT() { return getToken(AshParserParser.DEFAULT, 0); }
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public DefaultValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultValue; }
	}

	public final DefaultValueContext defaultValue() throws RecognitionException {
		DefaultValueContext _localctx = new DefaultValueContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_defaultValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			match(DEFAULT);
			setState(221);
			elementValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(LBRACE);
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (BREAK - 1)) | (1L << (CONTINUE - 1)) | (1L << (DO - 1)) | (1L << (FLOAT - 1)) | (1L << (FOR - 1)) | (1L << (IF - 1)) | (1L << (INT - 1)) | (1L << (RETURN - 1)) | (1L << (STRING - 1)) | (1L << (SWITCH - 1)) | (1L << (THROW - 1)) | (1L << (TRY - 1)) | (1L << (VOID - 1)) | (1L << (WHILE - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (LBRACE - 65)) | (1L << (SEMI - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
				{
				{
				setState(224);
				blockStatement();
				}
				}
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(230);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockStatementContext extends ParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public BlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStatement; }
	}

	public final BlockStatementContext blockStatement() throws RecognitionException {
		BlockStatementContext _localctx = new BlockStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_blockStatement);
		try {
			setState(236);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				variableDeclaration();
				setState(233);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(235);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorContext variableDeclarator() {
			return getRuleContext(VariableDeclaratorContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			typeType();
			setState(239);
			variableDeclarator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext blockLabel;
		public ExpressionContext statementExpression;
		public Token identifierLabel;
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode IF() { return getToken(AshParserParser.IF, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(AshParserParser.ELSE, 0); }
		public TerminalNode FOR() { return getToken(AshParserParser.FOR, 0); }
		public ForControlContext forControl() {
			return getRuleContext(ForControlContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(AshParserParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(AshParserParser.DO, 0); }
		public TerminalNode TRY() { return getToken(AshParserParser.TRY, 0); }
		public FinallyBlockContext finallyBlock() {
			return getRuleContext(FinallyBlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public TerminalNode SWITCH() { return getToken(AshParserParser.SWITCH, 0); }
		public List<SwitchBlockStatementGroupContext> switchBlockStatementGroup() {
			return getRuleContexts(SwitchBlockStatementGroupContext.class);
		}
		public SwitchBlockStatementGroupContext switchBlockStatementGroup(int i) {
			return getRuleContext(SwitchBlockStatementGroupContext.class,i);
		}
		public List<SwitchLabelContext> switchLabel() {
			return getRuleContexts(SwitchLabelContext.class);
		}
		public SwitchLabelContext switchLabel(int i) {
			return getRuleContext(SwitchLabelContext.class,i);
		}
		public TerminalNode RETURN() { return getToken(AshParserParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THROW() { return getToken(AshParserParser.THROW, 0); }
		public TerminalNode BREAK() { return getToken(AshParserParser.BREAK, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public TerminalNode CONTINUE() { return getToken(AshParserParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(AshParserParser.SEMI, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_statement);
		int _la;
		try {
			int _alt;
			setState(321);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(241);
				((StatementContext)_localctx).blockLabel = block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(242);
				match(IF);
				setState(243);
				parExpression();
				setState(244);
				statement();
				setState(247);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
				case 1:
					{
					setState(245);
					match(ELSE);
					setState(246);
					statement();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(249);
				match(FOR);
				setState(250);
				match(LPAREN);
				setState(251);
				forControl();
				setState(252);
				match(RPAREN);
				setState(253);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(255);
				match(WHILE);
				setState(256);
				parExpression();
				setState(257);
				statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(259);
				match(DO);
				setState(260);
				statement();
				setState(261);
				match(WHILE);
				setState(262);
				parExpression();
				setState(263);
				match(SEMI);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(265);
				match(TRY);
				setState(266);
				block();
				setState(276);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CATCH:
					{
					setState(268); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(267);
						catchClause();
						}
						}
						setState(270); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==CATCH );
					setState(273);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==FINALLY) {
						{
						setState(272);
						finallyBlock();
						}
					}

					}
					break;
				case FINALLY:
					{
					setState(275);
					finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(278);
				match(SWITCH);
				setState(279);
				parExpression();
				setState(280);
				match(LBRACE);
				setState(284);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(281);
						switchBlockStatementGroup();
						}
						} 
					}
					setState(286);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				}
				setState(290);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CASE || _la==DEFAULT) {
					{
					{
					setState(287);
					switchLabel();
					}
					}
					setState(292);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(293);
				match(RBRACE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(295);
				match(RETURN);
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
					{
					setState(296);
					expression(0);
					}
				}

				setState(299);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(300);
				match(THROW);
				setState(301);
				expression(0);
				setState(302);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(304);
				match(BREAK);
				setState(306);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(305);
					match(IDENTIFIER);
					}
				}

				setState(308);
				match(SEMI);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(309);
				match(CONTINUE);
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(310);
					match(IDENTIFIER);
					}
				}

				setState(313);
				match(SEMI);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(314);
				match(SEMI);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(315);
				((StatementContext)_localctx).statementExpression = expression(0);
				setState(316);
				match(SEMI);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(318);
				((StatementContext)_localctx).identifierLabel = match(IDENTIFIER);
				setState(319);
				match(COLON);
				setState(320);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public TerminalNode CATCH() { return getToken(AshParserParser.CATCH, 0); }
		public CatchTypeContext catchType() {
			return getRuleContext(CatchTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			match(CATCH);
			setState(324);
			match(LPAREN);
			setState(325);
			catchType();
			setState(326);
			match(IDENTIFIER);
			setState(327);
			match(RPAREN);
			setState(328);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchTypeContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public CatchTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchType; }
	}

	public final CatchTypeContext catchType() throws RecognitionException {
		CatchTypeContext _localctx = new CatchTypeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_catchType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinallyBlockContext extends ParserRuleContext {
		public TerminalNode FINALLY() { return getToken(AshParserParser.FINALLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finallyBlock; }
	}

	public final FinallyBlockContext finallyBlock() throws RecognitionException {
		FinallyBlockContext _localctx = new FinallyBlockContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_finallyBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(FINALLY);
			setState(333);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBlockStatementGroupContext extends ParserRuleContext {
		public List<SwitchLabelContext> switchLabel() {
			return getRuleContexts(SwitchLabelContext.class);
		}
		public SwitchLabelContext switchLabel(int i) {
			return getRuleContext(SwitchLabelContext.class,i);
		}
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public SwitchBlockStatementGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBlockStatementGroup; }
	}

	public final SwitchBlockStatementGroupContext switchBlockStatementGroup() throws RecognitionException {
		SwitchBlockStatementGroupContext _localctx = new SwitchBlockStatementGroupContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_switchBlockStatementGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(335);
				switchLabel();
				}
				}
				setState(338); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CASE || _la==DEFAULT );
			setState(341); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(340);
				blockStatement();
				}
				}
				setState(343); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (BREAK - 1)) | (1L << (CONTINUE - 1)) | (1L << (DO - 1)) | (1L << (FLOAT - 1)) | (1L << (FOR - 1)) | (1L << (IF - 1)) | (1L << (INT - 1)) | (1L << (RETURN - 1)) | (1L << (STRING - 1)) | (1L << (SWITCH - 1)) | (1L << (THROW - 1)) | (1L << (TRY - 1)) | (1L << (VOID - 1)) | (1L << (WHILE - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (LBRACE - 65)) | (1L << (SEMI - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchLabelContext extends ParserRuleContext {
		public ExpressionContext constantExpression;
		public Token enumConstantName;
		public TerminalNode CASE() { return getToken(AshParserParser.CASE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public TerminalNode DEFAULT() { return getToken(AshParserParser.DEFAULT, 0); }
		public SwitchLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchLabel; }
	}

	public final SwitchLabelContext switchLabel() throws RecognitionException {
		SwitchLabelContext _localctx = new SwitchLabelContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_switchLabel);
		try {
			setState(353);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				enterOuterAlt(_localctx, 1);
				{
				setState(345);
				match(CASE);
				setState(348);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(346);
					((SwitchLabelContext)_localctx).constantExpression = expression(0);
					}
					break;
				case 2:
					{
					setState(347);
					((SwitchLabelContext)_localctx).enumConstantName = match(IDENTIFIER);
					}
					break;
				}
				setState(350);
				match(COLON);
				}
				break;
			case DEFAULT:
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				match(DEFAULT);
				setState(352);
				match(COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForControlContext extends ParserRuleContext {
		public ExpressionListContext forUpdate;
		public EnhancedForControlContext enhancedForControl() {
			return getRuleContext(EnhancedForControlContext.class,0);
		}
		public ForInitContext forInit() {
			return getRuleContext(ForInitContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forControl; }
	}

	public final ForControlContext forControl() throws RecognitionException {
		ForControlContext _localctx = new ForControlContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_forControl);
		int _la;
		try {
			setState(367);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(355);
				enhancedForControl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
					{
					setState(356);
					forInit();
					}
				}

				setState(359);
				match(SEMI);
				setState(361);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
					{
					setState(360);
					expression(0);
					}
				}

				setState(363);
				match(SEMI);
				setState(365);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
					{
					setState(364);
					((ForControlContext)_localctx).forUpdate = expressionList();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForInitContext extends ParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInit; }
	}

	public final ForInitContext forInit() throws RecognitionException {
		ForInitContext _localctx = new ForInitContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_forInit);
		try {
			setState(371);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(369);
				variableDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(370);
				expressionList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnhancedForControlContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EnhancedForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enhancedForControl; }
	}

	public final EnhancedForControlContext enhancedForControl() throws RecognitionException {
		EnhancedForControlContext _localctx = new EnhancedForControlContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_enhancedForControl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			typeType();
			setState(374);
			match(IDENTIFIER);
			setState(375);
			match(COLON);
			setState(376);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parExpression; }
	}

	public final ParExpressionContext parExpression() throws RecognitionException {
		ParExpressionContext _localctx = new ParExpressionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_parExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(LPAREN);
			setState(379);
			expression(0);
			setState(380);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			expression(0);
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(383);
				match(COMMA);
				setState(384);
				expression(0);
				}
				}
				setState(389);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_methodCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			match(IDENTIFIER);
			setState(391);
			arguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token prefix;
		public Token bop;
		public Token postfix;
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 80;
		enterRecursionRule(_localctx, 80, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(394);
				primary();
				}
				break;
			case 2:
				{
				setState(395);
				methodCall();
				}
				break;
			case 3:
				{
				setState(396);
				match(LPAREN);
				setState(397);
				typeType();
				setState(398);
				match(RPAREN);
				setState(399);
				expression(16);
				}
				break;
			case 4:
				{
				setState(401);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 103)) & ~0x3f) == 0 && ((1L << (_la - 103)) & ((1L << (INC - 103)) | (1L << (DEC - 103)) | (1L << (ADD - 103)) | (1L << (SUB - 103)))) != 0)) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(402);
				expression(14);
				}
				break;
			case 5:
				{
				setState(403);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==BANG || _la==TILDE) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(404);
				expression(13);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(469);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(467);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(407);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(408);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 107)) & ~0x3f) == 0 && ((1L << (_la - 107)) & ((1L << (MUL - 107)) | (1L << (DIV - 107)) | (1L << (MOD - 107)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(409);
						expression(13);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(410);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(411);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(412);
						expression(12);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(413);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(421);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
						case 1:
							{
							setState(414);
							match(LT);
							setState(415);
							match(LT);
							}
							break;
						case 2:
							{
							setState(416);
							match(GT);
							setState(417);
							match(GT);
							setState(418);
							match(GT);
							}
							break;
						case 3:
							{
							setState(419);
							match(GT);
							setState(420);
							match(GT);
							}
							break;
						}
						setState(423);
						expression(11);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(424);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(425);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (GT - 91)) | (1L << (LT - 91)) | (1L << (LE - 91)) | (1L << (GE - 91)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(426);
						expression(10);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(427);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(428);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(429);
						expression(9);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(430);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(431);
						((ExpressionContext)_localctx).bop = match(BITAND);
						setState(432);
						expression(8);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(433);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(434);
						((ExpressionContext)_localctx).bop = match(CARET);
						setState(435);
						expression(7);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(436);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(437);
						((ExpressionContext)_localctx).bop = match(BITOR);
						setState(438);
						expression(6);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(439);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(440);
						((ExpressionContext)_localctx).bop = match(AND);
						setState(441);
						expression(5);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(442);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(443);
						((ExpressionContext)_localctx).bop = match(OR);
						setState(444);
						expression(4);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(445);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(446);
						((ExpressionContext)_localctx).bop = match(QUESTION);
						setState(447);
						expression(0);
						setState(448);
						match(COLON);
						setState(449);
						expression(3);
						}
						break;
					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(451);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(452);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (ASSIGN - 90)) | (1L << (ADD_ASSIGN - 90)) | (1L << (SUB_ASSIGN - 90)) | (1L << (MUL_ASSIGN - 90)) | (1L << (DIV_ASSIGN - 90)) | (1L << (AND_ASSIGN - 90)) | (1L << (OR_ASSIGN - 90)) | (1L << (XOR_ASSIGN - 90)) | (1L << (MOD_ASSIGN - 90)) | (1L << (LSHIFT_ASSIGN - 90)) | (1L << (RSHIFT_ASSIGN - 90)) | (1L << (URSHIFT_ASSIGN - 90)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(453);
						expression(1);
						}
						break;
					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(454);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(455);
						((ExpressionContext)_localctx).bop = match(DOT);
						setState(458);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
						case 1:
							{
							setState(456);
							match(IDENTIFIER);
							}
							break;
						case 2:
							{
							setState(457);
							methodCall();
							}
							break;
						}
						}
						break;
					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(460);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(461);
						match(LBRACK);
						setState(462);
						expression(0);
						setState(463);
						match(RBRACK);
						}
						break;
					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(465);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(466);
						((ExpressionContext)_localctx).postfix = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==INC || _la==DEC) ) {
							((ExpressionContext)_localctx).postfix = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					}
					} 
				}
				setState(471);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParserParser.IDENTIFIER, 0); }
		public TypeTypeOrVoidContext typeTypeOrVoid() {
			return getRuleContext(TypeTypeOrVoidContext.class,0);
		}
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_primary);
		try {
			setState(479);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(472);
				match(LPAREN);
				setState(473);
				expression(0);
				setState(474);
				match(RPAREN);
				}
				break;
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
			case BOOL_LITERAL:
			case STRING_LITERAL:
			case NULL_LITERAL:
			case ASH_BOOLEANS_LITERAL:
			case ASH_BOUNTY_LITERAL:
			case ASH_CLASS_LITERAL:
			case ASH_CLASSES_LITERAL:
			case ASH_COINMASTER_LITERAL:
			case ASH_EFFECT_LITERAL:
			case ASH_EFFECTS_LITERAL:
			case ASH_ELEMENT_LITERAL:
			case ASH_ELEMENTS_LITERAL:
			case ASH_FAMILIAR_LITERAL:
			case ASH_FAMILIARS_LITERAL:
			case ASH_FLOATS_LITERAL:
			case ASH_INTS_LITERAL:
			case ASH_ITEM_LITERAL:
			case ASH_ITEMS_LITERAL:
			case ASH_LOCATION_LITERAL:
			case ASH_LOCATIONS_LITERAL:
			case ASH_MONSTER_LITERAL:
			case ASH_MONSTERS_LITERAL:
			case ASH_PHYLUM_LITERAL:
			case ASH_SERVANT_LITERAL:
			case ASH_SKILL_LITERAL:
			case ASH_SKILLS_LITERAL:
			case ASH_SLOT_LITERAL:
			case ASH_SLOTS_LITERAL:
			case ASH_STAT_LITERAL:
			case ASH_STATS_LITERAL:
			case ASH_STRINGS_LITERAL:
			case ASH_THRALL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(476);
				literal();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 3);
				{
				setState(477);
				match(IDENTIFIER);
				}
				break;
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
			case VOID:
			case ASH_BOUNTY_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
				enterOuterAlt(_localctx, 4);
				{
				setState(478);
				typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeListContext extends ParserRuleContext {
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			typeType();
			setState(486);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(482);
				match(COMMA);
				setState(483);
				typeType();
				}
				}
				setState(488);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeContext extends ParserRuleContext {
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public AshTypeContext ashType() {
			return getRuleContext(AshTypeContext.class,0);
		}
		public TypeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeType; }
	}

	public final TypeTypeContext typeType() throws RecognitionException {
		TypeTypeContext _localctx = new TypeTypeContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_typeType);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
				{
				setState(489);
				primitiveType();
				}
				break;
			case ASH_BOUNTY_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
				{
				setState(490);
				ashType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(497);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(493);
					match(LBRACK);
					setState(494);
					match(RBRACK);
					}
					} 
				}
				setState(499);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimitiveTypeContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(AshParserParser.BOOLEAN, 0); }
		public TerminalNode STRING() { return getToken(AshParserParser.STRING, 0); }
		public TerminalNode INT() { return getToken(AshParserParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(AshParserParser.FLOAT, 0); }
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AshTypeContext extends ParserRuleContext {
		public TerminalNode ASH_BOUNTY_TYPE() { return getToken(AshParserParser.ASH_BOUNTY_TYPE, 0); }
		public TerminalNode ASH_CLASS_TYPE() { return getToken(AshParserParser.ASH_CLASS_TYPE, 0); }
		public TerminalNode ASH_COINMASTER_TYPE() { return getToken(AshParserParser.ASH_COINMASTER_TYPE, 0); }
		public TerminalNode ASH_EFFECT_TYPE() { return getToken(AshParserParser.ASH_EFFECT_TYPE, 0); }
		public TerminalNode ASH_ELEMENT_TYPE() { return getToken(AshParserParser.ASH_ELEMENT_TYPE, 0); }
		public TerminalNode ASH_FAMILIAR_TYPE() { return getToken(AshParserParser.ASH_FAMILIAR_TYPE, 0); }
		public TerminalNode ASH_ITEM_TYPE() { return getToken(AshParserParser.ASH_ITEM_TYPE, 0); }
		public TerminalNode ASH_LOCATION_TYPE() { return getToken(AshParserParser.ASH_LOCATION_TYPE, 0); }
		public TerminalNode ASH_MONSTER_TYPE() { return getToken(AshParserParser.ASH_MONSTER_TYPE, 0); }
		public TerminalNode ASH_PHYLUM_TYPE() { return getToken(AshParserParser.ASH_PHYLUM_TYPE, 0); }
		public TerminalNode ASH_SERVANT_TYPE() { return getToken(AshParserParser.ASH_SERVANT_TYPE, 0); }
		public TerminalNode ASH_SKILL_TYPE() { return getToken(AshParserParser.ASH_SKILL_TYPE, 0); }
		public TerminalNode ASH_SLOT_TYPE() { return getToken(AshParserParser.ASH_SLOT_TYPE, 0); }
		public TerminalNode ASH_STAT_TYPE() { return getToken(AshParserParser.ASH_STAT_TYPE, 0); }
		public TerminalNode ASH_THRALL_TYPE() { return getToken(AshParserParser.ASH_THRALL_TYPE, 0); }
		public AshTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ashType; }
	}

	public final AshTypeContext ashType() throws RecognitionException {
		AshTypeContext _localctx = new AshTypeContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_ashType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			_la = _input.LA(1);
			if ( !(((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (ASH_BOUNTY_TYPE - 66)) | (1L << (ASH_CLASS_TYPE - 66)) | (1L << (ASH_COINMASTER_TYPE - 66)) | (1L << (ASH_EFFECT_TYPE - 66)) | (1L << (ASH_ELEMENT_TYPE - 66)) | (1L << (ASH_FAMILIAR_TYPE - 66)) | (1L << (ASH_ITEM_TYPE - 66)) | (1L << (ASH_LOCATION_TYPE - 66)) | (1L << (ASH_MONSTER_TYPE - 66)) | (1L << (ASH_PHYLUM_TYPE - 66)) | (1L << (ASH_SERVANT_TYPE - 66)) | (1L << (ASH_SKILL_TYPE - 66)) | (1L << (ASH_SLOT_TYPE - 66)) | (1L << (ASH_STAT_TYPE - 66)) | (1L << (ASH_THRALL_TYPE - 66)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			match(LPAREN);
			setState(506);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & ((1L << (BOOLEAN - 1)) | (1L << (FLOAT - 1)) | (1L << (INT - 1)) | (1L << (STRING - 1)) | (1L << (VOID - 1)) | (1L << (DECIMAL_LITERAL - 1)) | (1L << (HEX_LITERAL - 1)) | (1L << (OCT_LITERAL - 1)) | (1L << (BINARY_LITERAL - 1)) | (1L << (FLOAT_LITERAL - 1)) | (1L << (HEX_FLOAT_LITERAL - 1)) | (1L << (BOOL_LITERAL - 1)) | (1L << (STRING_LITERAL - 1)) | (1L << (NULL_LITERAL - 1)) | (1L << (ASH_BOOLEANS_LITERAL - 1)) | (1L << (ASH_BOUNTY_LITERAL - 1)) | (1L << (ASH_CLASS_LITERAL - 1)) | (1L << (ASH_CLASSES_LITERAL - 1)) | (1L << (ASH_COINMASTER_LITERAL - 1)) | (1L << (ASH_EFFECT_LITERAL - 1)) | (1L << (ASH_EFFECTS_LITERAL - 1)) | (1L << (ASH_ELEMENT_LITERAL - 1)) | (1L << (ASH_ELEMENTS_LITERAL - 1)) | (1L << (ASH_FAMILIAR_LITERAL - 1)) | (1L << (ASH_FAMILIARS_LITERAL - 1)) | (1L << (ASH_FLOATS_LITERAL - 1)) | (1L << (ASH_INTS_LITERAL - 1)) | (1L << (ASH_ITEM_LITERAL - 1)) | (1L << (ASH_ITEMS_LITERAL - 1)) | (1L << (ASH_LOCATION_LITERAL - 1)) | (1L << (ASH_LOCATIONS_LITERAL - 1)) | (1L << (ASH_MONSTER_LITERAL - 1)) | (1L << (ASH_MONSTERS_LITERAL - 1)) | (1L << (ASH_PHYLUM_LITERAL - 1)) | (1L << (ASH_SERVANT_LITERAL - 1)) | (1L << (ASH_SKILL_LITERAL - 1)) | (1L << (ASH_SKILLS_LITERAL - 1)) | (1L << (ASH_SLOT_LITERAL - 1)) | (1L << (ASH_SLOTS_LITERAL - 1)) | (1L << (ASH_STAT_LITERAL - 1)) | (1L << (ASH_STATS_LITERAL - 1)) | (1L << (ASH_STRINGS_LITERAL - 1)))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (ASH_THRALL_LITERAL - 65)) | (1L << (ASH_BOUNTY_TYPE - 65)) | (1L << (ASH_CLASS_TYPE - 65)) | (1L << (ASH_COINMASTER_TYPE - 65)) | (1L << (ASH_EFFECT_TYPE - 65)) | (1L << (ASH_ELEMENT_TYPE - 65)) | (1L << (ASH_FAMILIAR_TYPE - 65)) | (1L << (ASH_ITEM_TYPE - 65)) | (1L << (ASH_LOCATION_TYPE - 65)) | (1L << (ASH_MONSTER_TYPE - 65)) | (1L << (ASH_PHYLUM_TYPE - 65)) | (1L << (ASH_SERVANT_TYPE - 65)) | (1L << (ASH_SKILL_TYPE - 65)) | (1L << (ASH_SLOT_TYPE - 65)) | (1L << (ASH_STAT_TYPE - 65)) | (1L << (ASH_THRALL_TYPE - 65)) | (1L << (LPAREN - 65)) | (1L << (BANG - 65)) | (1L << (TILDE - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (IDENTIFIER - 65)))) != 0)) {
				{
				setState(505);
				expressionList();
				}
			}

			setState(508);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 40:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 7);
		case 6:
			return precpred(_ctx, 6);
		case 7:
			return precpred(_ctx, 5);
		case 8:
			return precpred(_ctx, 4);
		case 9:
			return precpred(_ctx, 3);
		case 10:
			return precpred(_ctx, 2);
		case 11:
			return precpred(_ctx, 1);
		case 12:
			return precpred(_ctx, 19);
		case 13:
			return precpred(_ctx, 18);
		case 14:
			return precpred(_ctx, 15);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0083\u0201\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\3\2\3\2\7\2c\n\2\f\2\16\2f\13\2\3\2\3"+
		"\2\3\3\3\3\3\3\5\3m\n\3\3\4\3\4\3\4\5\4r\n\4\3\5\3\5\3\5\5\5w\n\5\3\6"+
		"\3\6\3\6\3\6\3\6\5\6~\n\6\3\6\5\6\u0081\n\6\3\7\3\7\3\7\3\7\3\7\3\b\3"+
		"\b\3\t\3\t\5\t\u008c\n\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\r\3\r\3\r\5\r\u009c\n\r\3\16\3\16\3\17\3\17\5\17\u00a2\n\17\3\17"+
		"\3\17\3\20\3\20\3\20\7\20\u00a9\n\20\f\20\16\20\u00ac\13\20\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u00b7\n\22\3\23\3\23\3\24\3\24"+
		"\3\25\3\25\3\26\3\26\3\26\7\26\u00c2\n\26\f\26\16\26\u00c5\13\26\3\27"+
		"\3\27\3\27\3\27\3\30\3\30\5\30\u00cd\n\30\3\31\3\31\3\31\3\31\7\31\u00d3"+
		"\n\31\f\31\16\31\u00d6\13\31\5\31\u00d8\n\31\3\31\5\31\u00db\n\31\3\31"+
		"\3\31\3\32\3\32\3\32\3\33\3\33\7\33\u00e4\n\33\f\33\16\33\u00e7\13\33"+
		"\3\33\3\33\3\34\3\34\3\34\3\34\5\34\u00ef\n\34\3\35\3\35\3\35\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\5\36\u00fa\n\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\6\36\u010f"+
		"\n\36\r\36\16\36\u0110\3\36\5\36\u0114\n\36\3\36\5\36\u0117\n\36\3\36"+
		"\3\36\3\36\3\36\7\36\u011d\n\36\f\36\16\36\u0120\13\36\3\36\7\36\u0123"+
		"\n\36\f\36\16\36\u0126\13\36\3\36\3\36\3\36\3\36\5\36\u012c\n\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u0135\n\36\3\36\3\36\3\36\5\36\u013a"+
		"\n\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u0144\n\36\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3 \3 \3!\3!\3!\3\"\6\"\u0153\n\"\r\"\16\"\u0154"+
		"\3\"\6\"\u0158\n\"\r\"\16\"\u0159\3#\3#\3#\5#\u015f\n#\3#\3#\3#\5#\u0164"+
		"\n#\3$\3$\5$\u0168\n$\3$\3$\5$\u016c\n$\3$\3$\5$\u0170\n$\5$\u0172\n$"+
		"\3%\3%\5%\u0176\n%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3(\3(\3(\7(\u0184\n"+
		"(\f(\16(\u0187\13(\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\5*\u0198"+
		"\n*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\5*\u01a8\n*\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3*\3*\3*\3*\5*\u01cd\n*\3*\3*\3*\3*\3*\3*\3*\7*\u01d6\n*"+
		"\f*\16*\u01d9\13*\3+\3+\3+\3+\3+\3+\3+\5+\u01e2\n+\3,\3,\3,\7,\u01e7\n"+
		",\f,\16,\u01ea\13,\3-\3-\5-\u01ee\n-\3-\3-\7-\u01f2\n-\f-\16-\u01f5\13"+
		"-\3.\3.\3/\3/\3\60\3\60\5\60\u01fd\n\60\3\60\3\60\3\60\2\3R\61\2\4\6\b"+
		"\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVX"+
		"Z\\^\2\17\3\2\36!\3\2\"#\3\2\'C\3\2il\3\2_`\4\2mnrr\3\2kl\4\2]^de\4\2"+
		"ccff\4\2\\\\s}\3\2ij\6\2\3\3\17\17\23\23\30\30\3\2DR\2\u0226\2d\3\2\2"+
		"\2\4l\3\2\2\2\6n\3\2\2\2\bs\3\2\2\2\nx\3\2\2\2\f\u0082\3\2\2\2\16\u0087"+
		"\3\2\2\2\20\u008b\3\2\2\2\22\u008d\3\2\2\2\24\u0091\3\2\2\2\26\u0094\3"+
		"\2\2\2\30\u0098\3\2\2\2\32\u009d\3\2\2\2\34\u009f\3\2\2\2\36\u00a5\3\2"+
		"\2\2 \u00ad\3\2\2\2\"\u00b6\3\2\2\2$\u00b8\3\2\2\2&\u00ba\3\2\2\2(\u00bc"+
		"\3\2\2\2*\u00be\3\2\2\2,\u00c6\3\2\2\2.\u00cc\3\2\2\2\60\u00ce\3\2\2\2"+
		"\62\u00de\3\2\2\2\64\u00e1\3\2\2\2\66\u00ee\3\2\2\28\u00f0\3\2\2\2:\u0143"+
		"\3\2\2\2<\u0145\3\2\2\2>\u014c\3\2\2\2@\u014e\3\2\2\2B\u0152\3\2\2\2D"+
		"\u0163\3\2\2\2F\u0171\3\2\2\2H\u0175\3\2\2\2J\u0177\3\2\2\2L\u017c\3\2"+
		"\2\2N\u0180\3\2\2\2P\u0188\3\2\2\2R\u0197\3\2\2\2T\u01e1\3\2\2\2V\u01e3"+
		"\3\2\2\2X\u01ed\3\2\2\2Z\u01f6\3\2\2\2\\\u01f8\3\2\2\2^\u01fa\3\2\2\2"+
		"`c\5\4\3\2ac\5\f\7\2b`\3\2\2\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2"+
		"eg\3\2\2\2fd\3\2\2\2gh\7\2\2\3h\3\3\2\2\2im\5\6\4\2jm\5\b\5\2km\5\n\6"+
		"\2li\3\2\2\2lj\3\2\2\2lk\3\2\2\2m\5\3\2\2\2no\7\25\2\2oq\7%\2\2pr\7Y\2"+
		"\2qp\3\2\2\2qr\3\2\2\2r\7\3\2\2\2st\7\26\2\2tv\7\u0082\2\2uw\7Y\2\2vu"+
		"\3\2\2\2vw\3\2\2\2w\t\3\2\2\2x}\7\22\2\2yz\7^\2\2z{\7\u0083\2\2{~\7]\2"+
		"\2|~\7%\2\2}y\3\2\2\2}|\3\2\2\2~\u0080\3\2\2\2\177\u0081\7Y\2\2\u0080"+
		"\177\3\2\2\2\u0080\u0081\3\2\2\2\u0081\13\3\2\2\2\u0082\u0083\5\20\t\2"+
		"\u0083\u0084\7\u0082\2\2\u0084\u0085\5\34\17\2\u0085\u0086\5\16\b\2\u0086"+
		"\r\3\2\2\2\u0087\u0088\5\64\33\2\u0088\17\3\2\2\2\u0089\u008c\5X-\2\u008a"+
		"\u008c\7\34\2\2\u008b\u0089\3\2\2\2\u008b\u008a\3\2\2\2\u008c\21\3\2\2"+
		"\2\u008d\u008e\5X-\2\u008e\u008f\5\30\r\2\u008f\u0090\7Y\2\2\u0090\23"+
		"\3\2\2\2\u0091\u0092\5X-\2\u0092\u0093\5\26\f\2\u0093\25\3\2\2\2\u0094"+
		"\u0095\7\u0082\2\2\u0095\u0096\7\\\2\2\u0096\u0097\5\32\16\2\u0097\27"+
		"\3\2\2\2\u0098\u009b\7\u0082\2\2\u0099\u009a\7\\\2\2\u009a\u009c\5\32"+
		"\16\2\u009b\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c\31\3\2\2\2\u009d\u009e"+
		"\5R*\2\u009e\33\3\2\2\2\u009f\u00a1\7S\2\2\u00a0\u00a2\5\36\20\2\u00a1"+
		"\u00a0\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a4\7T"+
		"\2\2\u00a4\35\3\2\2\2\u00a5\u00aa\5 \21\2\u00a6\u00a7\7Z\2\2\u00a7\u00a9"+
		"\5 \21\2\u00a8\u00a6\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa"+
		"\u00ab\3\2\2\2\u00ab\37\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00ae\5X-\2"+
		"\u00ae\u00af\7\u0082\2\2\u00af!\3\2\2\2\u00b0\u00b7\5$\23\2\u00b1\u00b7"+
		"\5&\24\2\u00b2\u00b7\7%\2\2\u00b3\u00b7\7$\2\2\u00b4\u00b7\7&\2\2\u00b5"+
		"\u00b7\5(\25\2\u00b6\u00b0\3\2\2\2\u00b6\u00b1\3\2\2\2\u00b6\u00b2\3\2"+
		"\2\2\u00b6\u00b3\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b5\3\2\2\2\u00b7"+
		"#\3\2\2\2\u00b8\u00b9\t\2\2\2\u00b9%\3\2\2\2\u00ba\u00bb\t\3\2\2\u00bb"+
		"\'\3\2\2\2\u00bc\u00bd\t\4\2\2\u00bd)\3\2\2\2\u00be\u00c3\5,\27\2\u00bf"+
		"\u00c0\7Z\2\2\u00c0\u00c2\5,\27\2\u00c1\u00bf\3\2\2\2\u00c2\u00c5\3\2"+
		"\2\2\u00c3\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4+\3\2\2\2\u00c5\u00c3"+
		"\3\2\2\2\u00c6\u00c7\7\u0082\2\2\u00c7\u00c8\7\\\2\2\u00c8\u00c9\5.\30"+
		"\2\u00c9-\3\2\2\2\u00ca\u00cd\5R*\2\u00cb\u00cd\5\60\31\2\u00cc\u00ca"+
		"\3\2\2\2\u00cc\u00cb\3\2\2\2\u00cd/\3\2\2\2\u00ce\u00d7\7U\2\2\u00cf\u00d4"+
		"\5.\30\2\u00d0\u00d1\7Z\2\2\u00d1\u00d3\5.\30\2\u00d2\u00d0\3\2\2\2\u00d3"+
		"\u00d6\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d8\3\2"+
		"\2\2\u00d6\u00d4\3\2\2\2\u00d7\u00cf\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8"+
		"\u00da\3\2\2\2\u00d9\u00db\7Z\2\2\u00da\u00d9\3\2\2\2\u00da\u00db\3\2"+
		"\2\2\u00db\u00dc\3\2\2\2\u00dc\u00dd\7V\2\2\u00dd\61\3\2\2\2\u00de\u00df"+
		"\7\n\2\2\u00df\u00e0\5.\30\2\u00e0\63\3\2\2\2\u00e1\u00e5\7U\2\2\u00e2"+
		"\u00e4\5\66\34\2\u00e3\u00e2\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3"+
		"\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e8\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e8"+
		"\u00e9\7V\2\2\u00e9\65\3\2\2\2\u00ea\u00eb\58\35\2\u00eb\u00ec\7Y\2\2"+
		"\u00ec\u00ef\3\2\2\2\u00ed\u00ef\5:\36\2\u00ee\u00ea\3\2\2\2\u00ee\u00ed"+
		"\3\2\2\2\u00ef\67\3\2\2\2\u00f0\u00f1\5X-\2\u00f1\u00f2\5\30\r\2\u00f2"+
		"9\3\2\2\2\u00f3\u0144\5\64\33\2\u00f4\u00f5\7\21\2\2\u00f5\u00f6\5L\'"+
		"\2\u00f6\u00f9\5:\36\2\u00f7\u00f8\7\r\2\2\u00f8\u00fa\5:\36\2\u00f9\u00f7"+
		"\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u0144\3\2\2\2\u00fb\u00fc\7\20\2\2"+
		"\u00fc\u00fd\7S\2\2\u00fd\u00fe\5F$\2\u00fe\u00ff\7T\2\2\u00ff\u0100\5"+
		":\36\2\u0100\u0144\3\2\2\2\u0101\u0102\7\35\2\2\u0102\u0103\5L\'\2\u0103"+
		"\u0104\5:\36\2\u0104\u0144\3\2\2\2\u0105\u0106\7\13\2\2\u0106\u0107\5"+
		":\36\2\u0107\u0108\7\35\2\2\u0108\u0109\5L\'\2\u0109\u010a\7Y\2\2\u010a"+
		"\u0144\3\2\2\2\u010b\u010c\7\33\2\2\u010c\u0116\5\64\33\2\u010d\u010f"+
		"\5<\37\2\u010e\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u010e\3\2\2\2\u0110"+
		"\u0111\3\2\2\2\u0111\u0113\3\2\2\2\u0112\u0114\5@!\2\u0113\u0112\3\2\2"+
		"\2\u0113\u0114\3\2\2\2\u0114\u0117\3\2\2\2\u0115\u0117\5@!\2\u0116\u010e"+
		"\3\2\2\2\u0116\u0115\3\2\2\2\u0117\u0144\3\2\2\2\u0118\u0119\7\31\2\2"+
		"\u0119\u011a\5L\'\2\u011a\u011e\7U\2\2\u011b\u011d\5B\"\2\u011c\u011b"+
		"\3\2\2\2\u011d\u0120\3\2\2\2\u011e\u011c\3\2\2\2\u011e\u011f\3\2\2\2\u011f"+
		"\u0124\3\2\2\2\u0120\u011e\3\2\2\2\u0121\u0123\5D#\2\u0122\u0121\3\2\2"+
		"\2\u0123\u0126\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0127"+
		"\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u0128\7V\2\2\u0128\u0144\3\2\2\2\u0129"+
		"\u012b\7\24\2\2\u012a\u012c\5R*\2\u012b\u012a\3\2\2\2\u012b\u012c\3\2"+
		"\2\2\u012c\u012d\3\2\2\2\u012d\u0144\7Y\2\2\u012e\u012f\7\32\2\2\u012f"+
		"\u0130\5R*\2\u0130\u0131\7Y\2\2\u0131\u0144\3\2\2\2\u0132\u0134\7\4\2"+
		"\2\u0133\u0135\7\u0082\2\2\u0134\u0133\3\2\2\2\u0134\u0135\3\2\2\2\u0135"+
		"\u0136\3\2\2\2\u0136\u0144\7Y\2\2\u0137\u0139\7\t\2\2\u0138\u013a\7\u0082"+
		"\2\2\u0139\u0138\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u013b\3\2\2\2\u013b"+
		"\u0144\7Y\2\2\u013c\u0144\7Y\2\2\u013d\u013e\5R*\2\u013e\u013f\7Y\2\2"+
		"\u013f\u0144\3\2\2\2\u0140\u0141\7\u0082\2\2\u0141\u0142\7b\2\2\u0142"+
		"\u0144\5:\36\2\u0143\u00f3\3\2\2\2\u0143\u00f4\3\2\2\2\u0143\u00fb\3\2"+
		"\2\2\u0143\u0101\3\2\2\2\u0143\u0105\3\2\2\2\u0143\u010b\3\2\2\2\u0143"+
		"\u0118\3\2\2\2\u0143\u0129\3\2\2\2\u0143\u012e\3\2\2\2\u0143\u0132\3\2"+
		"\2\2\u0143\u0137\3\2\2\2\u0143\u013c\3\2\2\2\u0143\u013d\3\2\2\2\u0143"+
		"\u0140\3\2\2\2\u0144;\3\2\2\2\u0145\u0146\7\6\2\2\u0146\u0147\7S\2\2\u0147"+
		"\u0148\5> \2\u0148\u0149\7\u0082\2\2\u0149\u014a\7T\2\2\u014a\u014b\5"+
		"\64\33\2\u014b=\3\2\2\2\u014c\u014d\7\u0082\2\2\u014d?\3\2\2\2\u014e\u014f"+
		"\7\16\2\2\u014f\u0150\5\64\33\2\u0150A\3\2\2\2\u0151\u0153\5D#\2\u0152"+
		"\u0151\3\2\2\2\u0153\u0154\3\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2"+
		"\2\2\u0155\u0157\3\2\2\2\u0156\u0158\5\66\34\2\u0157\u0156\3\2\2\2\u0158"+
		"\u0159\3\2\2\2\u0159\u0157\3\2\2\2\u0159\u015a\3\2\2\2\u015aC\3\2\2\2"+
		"\u015b\u015e\7\5\2\2\u015c\u015f\5R*\2\u015d\u015f\7\u0082\2\2\u015e\u015c"+
		"\3\2\2\2\u015e\u015d\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0164\7b\2\2\u0161"+
		"\u0162\7\n\2\2\u0162\u0164\7b\2\2\u0163\u015b\3\2\2\2\u0163\u0161\3\2"+
		"\2\2\u0164E\3\2\2\2\u0165\u0172\5J&\2\u0166\u0168\5H%\2\u0167\u0166\3"+
		"\2\2\2\u0167\u0168\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016b\7Y\2\2\u016a"+
		"\u016c\5R*\2\u016b\u016a\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2"+
		"\2\u016d\u016f\7Y\2\2\u016e\u0170\5N(\2\u016f\u016e\3\2\2\2\u016f\u0170"+
		"\3\2\2\2\u0170\u0172\3\2\2\2\u0171\u0165\3\2\2\2\u0171\u0167\3\2\2\2\u0172"+
		"G\3\2\2\2\u0173\u0176\58\35\2\u0174\u0176\5N(\2\u0175\u0173\3\2\2\2\u0175"+
		"\u0174\3\2\2\2\u0176I\3\2\2\2\u0177\u0178\5X-\2\u0178\u0179\7\u0082\2"+
		"\2\u0179\u017a\7b\2\2\u017a\u017b\5R*\2\u017bK\3\2\2\2\u017c\u017d\7S"+
		"\2\2\u017d\u017e\5R*\2\u017e\u017f\7T\2\2\u017fM\3\2\2\2\u0180\u0185\5"+
		"R*\2\u0181\u0182\7Z\2\2\u0182\u0184\5R*\2\u0183\u0181\3\2\2\2\u0184\u0187"+
		"\3\2\2\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186O\3\2\2\2\u0187"+
		"\u0185\3\2\2\2\u0188\u0189\7\u0082\2\2\u0189\u018a\5^\60\2\u018aQ\3\2"+
		"\2\2\u018b\u018c\b*\1\2\u018c\u0198\5T+\2\u018d\u0198\5P)\2\u018e\u018f"+
		"\7S\2\2\u018f\u0190\5X-\2\u0190\u0191\7T\2\2\u0191\u0192\5R*\22\u0192"+
		"\u0198\3\2\2\2\u0193\u0194\t\5\2\2\u0194\u0198\5R*\20\u0195\u0196\t\6"+
		"\2\2\u0196\u0198\5R*\17\u0197\u018b\3\2\2\2\u0197\u018d\3\2\2\2\u0197"+
		"\u018e\3\2\2\2\u0197\u0193\3\2\2\2\u0197\u0195\3\2\2\2\u0198\u01d7\3\2"+
		"\2\2\u0199\u019a\f\16\2\2\u019a\u019b\t\7\2\2\u019b\u01d6\5R*\17\u019c"+
		"\u019d\f\r\2\2\u019d\u019e\t\b\2\2\u019e\u01d6\5R*\16\u019f\u01a7\f\f"+
		"\2\2\u01a0\u01a1\7^\2\2\u01a1\u01a8\7^\2\2\u01a2\u01a3\7]\2\2\u01a3\u01a4"+
		"\7]\2\2\u01a4\u01a8\7]\2\2\u01a5\u01a6\7]\2\2\u01a6\u01a8\7]\2\2\u01a7"+
		"\u01a0\3\2\2\2\u01a7\u01a2\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a8\u01a9\3\2"+
		"\2\2\u01a9\u01d6\5R*\r\u01aa\u01ab\f\13\2\2\u01ab\u01ac\t\t\2\2\u01ac"+
		"\u01d6\5R*\f\u01ad\u01ae\f\n\2\2\u01ae\u01af\t\n\2\2\u01af\u01d6\5R*\13"+
		"\u01b0\u01b1\f\t\2\2\u01b1\u01b2\7o\2\2\u01b2\u01d6\5R*\n\u01b3\u01b4"+
		"\f\b\2\2\u01b4\u01b5\7q\2\2\u01b5\u01d6\5R*\t\u01b6\u01b7\f\7\2\2\u01b7"+
		"\u01b8\7p\2\2\u01b8\u01d6\5R*\b\u01b9\u01ba\f\6\2\2\u01ba\u01bb\7g\2\2"+
		"\u01bb\u01d6\5R*\7\u01bc\u01bd\f\5\2\2\u01bd\u01be\7h\2\2\u01be\u01d6"+
		"\5R*\6\u01bf\u01c0\f\4\2\2\u01c0\u01c1\7a\2\2\u01c1\u01c2\5R*\2\u01c2"+
		"\u01c3\7b\2\2\u01c3\u01c4\5R*\5\u01c4\u01d6\3\2\2\2\u01c5\u01c6\f\3\2"+
		"\2\u01c6\u01c7\t\13\2\2\u01c7\u01d6\5R*\3\u01c8\u01c9\f\25\2\2\u01c9\u01cc"+
		"\7[\2\2\u01ca\u01cd\7\u0082\2\2\u01cb\u01cd\5P)\2\u01cc\u01ca\3\2\2\2"+
		"\u01cc\u01cb\3\2\2\2\u01cd\u01d6\3\2\2\2\u01ce\u01cf\f\24\2\2\u01cf\u01d0"+
		"\7W\2\2\u01d0\u01d1\5R*\2\u01d1\u01d2\7X\2\2\u01d2\u01d6\3\2\2\2\u01d3"+
		"\u01d4\f\21\2\2\u01d4\u01d6\t\f\2\2\u01d5\u0199\3\2\2\2\u01d5\u019c\3"+
		"\2\2\2\u01d5\u019f\3\2\2\2\u01d5\u01aa\3\2\2\2\u01d5\u01ad\3\2\2\2\u01d5"+
		"\u01b0\3\2\2\2\u01d5\u01b3\3\2\2\2\u01d5\u01b6\3\2\2\2\u01d5\u01b9\3\2"+
		"\2\2\u01d5\u01bc\3\2\2\2\u01d5\u01bf\3\2\2\2\u01d5\u01c5\3\2\2\2\u01d5"+
		"\u01c8\3\2\2\2\u01d5\u01ce\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d6\u01d9\3\2"+
		"\2\2\u01d7\u01d5\3\2\2\2\u01d7\u01d8\3\2\2\2\u01d8S\3\2\2\2\u01d9\u01d7"+
		"\3\2\2\2\u01da\u01db\7S\2\2\u01db\u01dc\5R*\2\u01dc\u01dd\7T\2\2\u01dd"+
		"\u01e2\3\2\2\2\u01de\u01e2\5\"\22\2\u01df\u01e2\7\u0082\2\2\u01e0\u01e2"+
		"\5\20\t\2\u01e1\u01da\3\2\2\2\u01e1\u01de\3\2\2\2\u01e1\u01df\3\2\2\2"+
		"\u01e1\u01e0\3\2\2\2\u01e2U\3\2\2\2\u01e3\u01e8\5X-\2\u01e4\u01e5\7Z\2"+
		"\2\u01e5\u01e7\5X-\2\u01e6\u01e4\3\2\2\2\u01e7\u01ea\3\2\2\2\u01e8\u01e6"+
		"\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9W\3\2\2\2\u01ea\u01e8\3\2\2\2\u01eb"+
		"\u01ee\5Z.\2\u01ec\u01ee\5\\/\2\u01ed\u01eb\3\2\2\2\u01ed\u01ec\3\2\2"+
		"\2\u01ee\u01f3\3\2\2\2\u01ef\u01f0\7W\2\2\u01f0\u01f2\7X\2\2\u01f1\u01ef"+
		"\3\2\2\2\u01f2\u01f5\3\2\2\2\u01f3\u01f1\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4"+
		"Y\3\2\2\2\u01f5\u01f3\3\2\2\2\u01f6\u01f7\t\r\2\2\u01f7[\3\2\2\2\u01f8"+
		"\u01f9\t\16\2\2\u01f9]\3\2\2\2\u01fa\u01fc\7S\2\2\u01fb\u01fd\5N(\2\u01fc"+
		"\u01fb\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe\u01ff\7T"+
		"\2\2\u01ff_\3\2\2\2\63bdlqv}\u0080\u008b\u009b\u00a1\u00aa\u00b6\u00c3"+
		"\u00cc\u00d4\u00d7\u00da\u00e5\u00ee\u00f9\u0110\u0113\u0116\u011e\u0124"+
		"\u012b\u0134\u0139\u0143\u0154\u0159\u015e\u0163\u0167\u016b\u016f\u0171"+
		"\u0175\u0185\u0197\u01a7\u01cc\u01d5\u01d7\u01e1\u01e8\u01ed\u01f3\u01fc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}