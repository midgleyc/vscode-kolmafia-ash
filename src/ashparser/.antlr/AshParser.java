// Generated from c:\Users\danie\Desktop\vscode-kolmafia-ash\src\ashparser\AshParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AshParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BOOLEAN=1, BREAK=2, CASE=3, CATCH=4, CONST=5, CONTAINS=6, CONTINUE=7, 
		DEFAULT=8, DO=9, DOUBLE=10, ELSE=11, FINALLY=12, FLOAT=13, FOR=14, FOREACH=15, 
		IF=16, IMPORT=17, IN=18, INT=19, NOTIFY=20, RETURN=21, SCRIPT=22, SINCE=23, 
		STATIC=24, STRING=25, SWITCH=26, THROW=27, TRY=28, VOID=29, WHILE=30, 
		DECIMAL_LITERAL=31, HEX_LITERAL=32, OCT_LITERAL=33, BINARY_LITERAL=34, 
		FLOAT_LITERAL=35, HEX_FLOAT_LITERAL=36, BOOL_LITERAL=37, STRING_LITERAL=38, 
		NULL_LITERAL=39, ASH_BOOLEANS_LITERAL=40, ASH_BOUNTY_LITERAL=41, ASH_CLASS_LITERAL=42, 
		ASH_CLASSES_LITERAL=43, ASH_COINMASTER_LITERAL=44, ASH_EFFECT_LITERAL=45, 
		ASH_EFFECTS_LITERAL=46, ASH_ELEMENT_LITERAL=47, ASH_ELEMENTS_LITERAL=48, 
		ASH_FAMILIAR_LITERAL=49, ASH_FAMILIARS_LITERAL=50, ASH_FLOATS_LITERAL=51, 
		ASH_INTS_LITERAL=52, ASH_ITEM_LITERAL=53, ASH_ITEMS_LITERAL=54, ASH_LOCATION_LITERAL=55, 
		ASH_LOCATIONS_LITERAL=56, ASH_MONSTER_LITERAL=57, ASH_MONSTERS_LITERAL=58, 
		ASH_PHYLUM_LITERAL=59, ASH_SERVANT_LITERAL=60, ASH_SKILL_LITERAL=61, ASH_SKILLS_LITERAL=62, 
		ASH_SLOT_LITERAL=63, ASH_SLOTS_LITERAL=64, ASH_STAT_LITERAL=65, ASH_STATS_LITERAL=66, 
		ASH_STRINGS_LITERAL=67, ASH_THRALL_LITERAL=68, ASH_BOUNTY_TYPE=69, ASH_BUFFER_TYPE=70, 
		ASH_CLASS_TYPE=71, ASH_COINMASTER_TYPE=72, ASH_EFFECT_TYPE=73, ASH_ELEMENT_TYPE=74, 
		ASH_FAMILIAR_TYPE=75, ASH_ITEM_TYPE=76, ASH_LOCATION_TYPE=77, ASH_MATCHER_TYPE=78, 
		ASH_MONSTER_TYPE=79, ASH_PHYLUM_TYPE=80, ASH_SERVANT_TYPE=81, ASH_SKILL_TYPE=82, 
		ASH_SLOT_TYPE=83, ASH_STAT_TYPE=84, ASH_THRALL_TYPE=85, LPAREN=86, RPAREN=87, 
		LBRACE=88, RBRACE=89, LBRACK=90, RBRACK=91, SEMI=92, COMMA=93, DOT=94, 
		ASSIGN=95, GT=96, LT=97, BANG=98, TILDE=99, QUESTION=100, COLON=101, EQUAL=102, 
		LE=103, GE=104, NOTEQUAL=105, AND=106, OR=107, INC=108, DEC=109, ADD=110, 
		SUB=111, MUL=112, DIV=113, BITAND=114, BITOR=115, CARET=116, MOD=117, 
		ADD_ASSIGN=118, SUB_ASSIGN=119, MUL_ASSIGN=120, DIV_ASSIGN=121, AND_ASSIGN=122, 
		OR_ASSIGN=123, XOR_ASSIGN=124, MOD_ASSIGN=125, LSHIFT_ASSIGN=126, RSHIFT_ASSIGN=127, 
		URSHIFT_ASSIGN=128, WS=129, COMMENT=130, LINE_COMMENT_SLASH=131, LINE_COMMENT_POUND=132, 
		IDENTIFIER=133;
	public static final int
		RULE_compilationUnit = 0, RULE_miscAshDeclarations = 1, RULE_importDeclaration = 2, 
		RULE_notifyDeclaration = 3, RULE_scriptDeclaration = 4, RULE_sinceDeclaration = 5, 
		RULE_functionDeclaration = 6, RULE_functionBody = 7, RULE_typeTypeOrVoid = 8, 
		RULE_fieldDeclaration = 9, RULE_constDeclaration = 10, RULE_constantDeclarator = 11, 
		RULE_variableDeclarator = 12, RULE_variableInitializer = 13, RULE_formalParameters = 14, 
		RULE_formalParameterList = 15, RULE_formalParameter = 16, RULE_literal = 17, 
		RULE_integerLiteral = 18, RULE_floatLiteral = 19, RULE_ashLiteral = 20, 
		RULE_elementValuePairs = 21, RULE_elementValuePair = 22, RULE_elementValue = 23, 
		RULE_elementValueArrayInitializer = 24, RULE_defaultValue = 25, RULE_block = 26, 
		RULE_blockStatement = 27, RULE_variableDeclaration = 28, RULE_statement = 29, 
		RULE_catchClause = 30, RULE_catchType = 31, RULE_finallyBlock = 32, RULE_switchBlockStatementGroup = 33, 
		RULE_switchLabel = 34, RULE_forControl = 35, RULE_forInit = 36, RULE_enhancedForControl = 37, 
		RULE_foreach = 38, RULE_parExpression = 39, RULE_expressionList = 40, 
		RULE_methodCall = 41, RULE_expression = 42, RULE_primary = 43, RULE_typeList = 44, 
		RULE_typeType = 45, RULE_primitiveType = 46, RULE_mapType = 47, RULE_mapTypeKeys = 48, 
		RULE_ashType = 49, RULE_arguments = 50;
	public static final String[] ruleNames = {
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
		"arguments"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'boolean'", "'break'", "'case'", "'catch'", "'const'", "'contains'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'finally'", 
		"'float'", "'for'", "'foreach'", "'if'", "'import'", "'in'", "'int'", 
		"'notify'", "'return'", "'script'", "'since'", "'static'", "'string'", 
		"'switch'", "'throw'", "'try'", "'void'", "'while'", null, null, null, 
		null, null, null, null, null, "'null'", null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		"'bounty'", "'buffer'", "'class'", "'coinmaster'", "'effect'", "'element'", 
		"'familiar'", "'item'", "'location'", "'matcher'", "'monster'", "'phylum'", 
		"'servant'", "'skill'", "'slot'", "'stat'", "'thrall'", "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", 
		"'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
		"'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", 
		"'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", 
		"'>>='", "'>>>='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "BOOLEAN", "BREAK", "CASE", "CATCH", "CONST", "CONTAINS", "CONTINUE", 
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
		"LINE_COMMENT_POUND", "IDENTIFIER"
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

	public AshParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(AshParser.EOF, 0); }
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
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << IMPORT) | (1L << INT) | (1L << NOTIFY) | (1L << SCRIPT) | (1L << SINCE) | (1L << STRING) | (1L << VOID))) != 0) || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (ASH_BOUNTY_TYPE - 69)) | (1L << (ASH_BUFFER_TYPE - 69)) | (1L << (ASH_CLASS_TYPE - 69)) | (1L << (ASH_COINMASTER_TYPE - 69)) | (1L << (ASH_EFFECT_TYPE - 69)) | (1L << (ASH_ELEMENT_TYPE - 69)) | (1L << (ASH_FAMILIAR_TYPE - 69)) | (1L << (ASH_ITEM_TYPE - 69)) | (1L << (ASH_LOCATION_TYPE - 69)) | (1L << (ASH_MATCHER_TYPE - 69)) | (1L << (ASH_MONSTER_TYPE - 69)) | (1L << (ASH_PHYLUM_TYPE - 69)) | (1L << (ASH_SERVANT_TYPE - 69)) | (1L << (ASH_SKILL_TYPE - 69)) | (1L << (ASH_SLOT_TYPE - 69)) | (1L << (ASH_STAT_TYPE - 69)) | (1L << (ASH_THRALL_TYPE - 69)))) != 0) || _la==IDENTIFIER) {
				{
				setState(104);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case IMPORT:
				case NOTIFY:
				case SCRIPT:
				case SINCE:
					{
					setState(102);
					miscAshDeclarations();
					}
					break;
				case BOOLEAN:
				case FLOAT:
				case INT:
				case STRING:
				case VOID:
				case ASH_BOUNTY_TYPE:
				case ASH_BUFFER_TYPE:
				case ASH_CLASS_TYPE:
				case ASH_COINMASTER_TYPE:
				case ASH_EFFECT_TYPE:
				case ASH_ELEMENT_TYPE:
				case ASH_FAMILIAR_TYPE:
				case ASH_ITEM_TYPE:
				case ASH_LOCATION_TYPE:
				case ASH_MATCHER_TYPE:
				case ASH_MONSTER_TYPE:
				case ASH_PHYLUM_TYPE:
				case ASH_SERVANT_TYPE:
				case ASH_SKILL_TYPE:
				case ASH_SLOT_TYPE:
				case ASH_STAT_TYPE:
				case ASH_THRALL_TYPE:
				case IDENTIFIER:
					{
					setState(103);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109);
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
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public NotifyDeclarationContext notifyDeclaration() {
			return getRuleContext(NotifyDeclarationContext.class,0);
		}
		public ScriptDeclarationContext scriptDeclaration() {
			return getRuleContext(ScriptDeclarationContext.class,0);
		}
		public SinceDeclarationContext sinceDeclaration() {
			return getRuleContext(SinceDeclarationContext.class,0);
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
			setState(115);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORT:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				importDeclaration();
				}
				break;
			case NOTIFY:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				notifyDeclaration();
				}
				break;
			case SCRIPT:
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
				scriptDeclaration();
				}
				break;
			case SINCE:
				enterOuterAlt(_localctx, 4);
				{
				setState(114);
				sinceDeclaration();
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

	public static class ImportDeclarationContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(AshParser.IMPORT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(AshParser.STRING_LITERAL, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(AshParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(AshParser.IDENTIFIER, i);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(IMPORT);
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				{
				setState(118);
				match(STRING_LITERAL);
				}
				break;
			case LT:
				{
				setState(119);
				match(LT);
				setState(121); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(120);
					_la = _input.LA(1);
					if ( !(((((_la - 94)) & ~0x3f) == 0 && ((1L << (_la - 94)) & ((1L << (DOT - 94)) | (1L << (DIV - 94)) | (1L << (IDENTIFIER - 94)))) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(123); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( ((((_la - 94)) & ~0x3f) == 0 && ((1L << (_la - 94)) & ((1L << (DOT - 94)) | (1L << (DIV - 94)) | (1L << (IDENTIFIER - 94)))) != 0) );
				setState(125);
				match(GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(128);
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

	public static class NotifyDeclarationContext extends ParserRuleContext {
		public TerminalNode NOTIFY() { return getToken(AshParser.NOTIFY, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public NotifyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notifyDeclaration; }
	}

	public final NotifyDeclarationContext notifyDeclaration() throws RecognitionException {
		NotifyDeclarationContext _localctx = new NotifyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_notifyDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(NOTIFY);
			setState(132);
			match(IDENTIFIER);
			setState(133);
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

	public static class ScriptDeclarationContext extends ParserRuleContext {
		public TerminalNode SCRIPT() { return getToken(AshParser.SCRIPT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(AshParser.STRING_LITERAL, 0); }
		public ScriptDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scriptDeclaration; }
	}

	public final ScriptDeclarationContext scriptDeclaration() throws RecognitionException {
		ScriptDeclarationContext _localctx = new ScriptDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_scriptDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(SCRIPT);
			setState(136);
			match(STRING_LITERAL);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(137);
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
		public TerminalNode SINCE() { return getToken(AshParser.SINCE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public SinceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sinceDeclaration; }
	}

	public final SinceDeclarationContext sinceDeclaration() throws RecognitionException {
		SinceDeclarationContext _localctx = new SinceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sinceDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(SINCE);
			setState(141);
			match(IDENTIFIER);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(142);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 12, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			typeTypeOrVoid();
			setState(146);
			match(IDENTIFIER);
			setState(147);
			formalParameters();
			setState(150);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				{
				setState(148);
				functionBody();
				}
				break;
			case SEMI:
				{
				setState(149);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		enterRule(_localctx, 14, RULE_functionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
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
		public TerminalNode VOID() { return getToken(AshParser.VOID, 0); }
		public TypeTypeOrVoidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeTypeOrVoid; }
	}

	public final TypeTypeOrVoidContext typeTypeOrVoid() throws RecognitionException {
		TypeTypeOrVoidContext _localctx = new TypeTypeOrVoidContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typeTypeOrVoid);
		try {
			setState(156);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
			case ASH_BOUNTY_TYPE:
			case ASH_BUFFER_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MATCHER_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				typeType();
				}
				break;
			case VOID:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
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
		enterRule(_localctx, 18, RULE_fieldDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			typeType();
			setState(159);
			variableDeclarator();
			setState(160);
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
		enterRule(_localctx, 20, RULE_constDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			typeType();
			setState(163);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 22, RULE_constantDeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(IDENTIFIER);
			setState(166);
			match(ASSIGN);
			setState(167);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 24, RULE_variableDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(IDENTIFIER);
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(170);
				match(ASSIGN);
				setState(171);
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
		enterRule(_localctx, 26, RULE_variableInitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
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
		enterRule(_localctx, 28, RULE_formalParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(LPAREN);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING))) != 0) || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (ASH_BOUNTY_TYPE - 69)) | (1L << (ASH_BUFFER_TYPE - 69)) | (1L << (ASH_CLASS_TYPE - 69)) | (1L << (ASH_COINMASTER_TYPE - 69)) | (1L << (ASH_EFFECT_TYPE - 69)) | (1L << (ASH_ELEMENT_TYPE - 69)) | (1L << (ASH_FAMILIAR_TYPE - 69)) | (1L << (ASH_ITEM_TYPE - 69)) | (1L << (ASH_LOCATION_TYPE - 69)) | (1L << (ASH_MATCHER_TYPE - 69)) | (1L << (ASH_MONSTER_TYPE - 69)) | (1L << (ASH_PHYLUM_TYPE - 69)) | (1L << (ASH_SERVANT_TYPE - 69)) | (1L << (ASH_SKILL_TYPE - 69)) | (1L << (ASH_SLOT_TYPE - 69)) | (1L << (ASH_STAT_TYPE - 69)) | (1L << (ASH_THRALL_TYPE - 69)))) != 0) || _la==IDENTIFIER) {
				{
				setState(177);
				formalParameterList();
				}
			}

			setState(180);
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
		enterRule(_localctx, 30, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			formalParameter();
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(183);
				match(COMMA);
				setState(184);
				formalParameter();
				}
				}
				setState(189);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public FormalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameter; }
	}

	public final FormalParameterContext formalParameter() throws RecognitionException {
		FormalParameterContext _localctx = new FormalParameterContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_formalParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			typeType();
			setState(191);
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
		public TerminalNode STRING_LITERAL() { return getToken(AshParser.STRING_LITERAL, 0); }
		public TerminalNode BOOL_LITERAL() { return getToken(AshParser.BOOL_LITERAL, 0); }
		public TerminalNode NULL_LITERAL() { return getToken(AshParser.NULL_LITERAL, 0); }
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
		enterRule(_localctx, 34, RULE_literal);
		try {
			setState(199);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(193);
				integerLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(194);
				floatLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(195);
				match(STRING_LITERAL);
				}
				break;
			case BOOL_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(196);
				match(BOOL_LITERAL);
				}
				break;
			case NULL_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(197);
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
				setState(198);
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
		public TerminalNode DECIMAL_LITERAL() { return getToken(AshParser.DECIMAL_LITERAL, 0); }
		public TerminalNode HEX_LITERAL() { return getToken(AshParser.HEX_LITERAL, 0); }
		public TerminalNode OCT_LITERAL() { return getToken(AshParser.OCT_LITERAL, 0); }
		public TerminalNode BINARY_LITERAL() { return getToken(AshParser.BINARY_LITERAL, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_integerLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
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
		public TerminalNode FLOAT_LITERAL() { return getToken(AshParser.FLOAT_LITERAL, 0); }
		public TerminalNode HEX_FLOAT_LITERAL() { return getToken(AshParser.HEX_FLOAT_LITERAL, 0); }
		public FloatLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatLiteral; }
	}

	public final FloatLiteralContext floatLiteral() throws RecognitionException {
		FloatLiteralContext _localctx = new FloatLiteralContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_floatLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
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
		public TerminalNode ASH_BOOLEANS_LITERAL() { return getToken(AshParser.ASH_BOOLEANS_LITERAL, 0); }
		public TerminalNode ASH_BOUNTY_LITERAL() { return getToken(AshParser.ASH_BOUNTY_LITERAL, 0); }
		public TerminalNode ASH_CLASS_LITERAL() { return getToken(AshParser.ASH_CLASS_LITERAL, 0); }
		public TerminalNode ASH_CLASSES_LITERAL() { return getToken(AshParser.ASH_CLASSES_LITERAL, 0); }
		public TerminalNode ASH_COINMASTER_LITERAL() { return getToken(AshParser.ASH_COINMASTER_LITERAL, 0); }
		public TerminalNode ASH_EFFECT_LITERAL() { return getToken(AshParser.ASH_EFFECT_LITERAL, 0); }
		public TerminalNode ASH_EFFECTS_LITERAL() { return getToken(AshParser.ASH_EFFECTS_LITERAL, 0); }
		public TerminalNode ASH_ELEMENT_LITERAL() { return getToken(AshParser.ASH_ELEMENT_LITERAL, 0); }
		public TerminalNode ASH_ELEMENTS_LITERAL() { return getToken(AshParser.ASH_ELEMENTS_LITERAL, 0); }
		public TerminalNode ASH_FAMILIAR_LITERAL() { return getToken(AshParser.ASH_FAMILIAR_LITERAL, 0); }
		public TerminalNode ASH_FAMILIARS_LITERAL() { return getToken(AshParser.ASH_FAMILIARS_LITERAL, 0); }
		public TerminalNode ASH_FLOATS_LITERAL() { return getToken(AshParser.ASH_FLOATS_LITERAL, 0); }
		public TerminalNode ASH_INTS_LITERAL() { return getToken(AshParser.ASH_INTS_LITERAL, 0); }
		public TerminalNode ASH_ITEM_LITERAL() { return getToken(AshParser.ASH_ITEM_LITERAL, 0); }
		public TerminalNode ASH_ITEMS_LITERAL() { return getToken(AshParser.ASH_ITEMS_LITERAL, 0); }
		public TerminalNode ASH_LOCATION_LITERAL() { return getToken(AshParser.ASH_LOCATION_LITERAL, 0); }
		public TerminalNode ASH_LOCATIONS_LITERAL() { return getToken(AshParser.ASH_LOCATIONS_LITERAL, 0); }
		public TerminalNode ASH_MONSTER_LITERAL() { return getToken(AshParser.ASH_MONSTER_LITERAL, 0); }
		public TerminalNode ASH_MONSTERS_LITERAL() { return getToken(AshParser.ASH_MONSTERS_LITERAL, 0); }
		public TerminalNode ASH_PHYLUM_LITERAL() { return getToken(AshParser.ASH_PHYLUM_LITERAL, 0); }
		public TerminalNode ASH_SERVANT_LITERAL() { return getToken(AshParser.ASH_SERVANT_LITERAL, 0); }
		public TerminalNode ASH_SKILL_LITERAL() { return getToken(AshParser.ASH_SKILL_LITERAL, 0); }
		public TerminalNode ASH_SKILLS_LITERAL() { return getToken(AshParser.ASH_SKILLS_LITERAL, 0); }
		public TerminalNode ASH_SLOT_LITERAL() { return getToken(AshParser.ASH_SLOT_LITERAL, 0); }
		public TerminalNode ASH_SLOTS_LITERAL() { return getToken(AshParser.ASH_SLOTS_LITERAL, 0); }
		public TerminalNode ASH_STAT_LITERAL() { return getToken(AshParser.ASH_STAT_LITERAL, 0); }
		public TerminalNode ASH_STATS_LITERAL() { return getToken(AshParser.ASH_STATS_LITERAL, 0); }
		public TerminalNode ASH_STRINGS_LITERAL() { return getToken(AshParser.ASH_STRINGS_LITERAL, 0); }
		public TerminalNode ASH_THRALL_LITERAL() { return getToken(AshParser.ASH_THRALL_LITERAL, 0); }
		public AshLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ashLiteral; }
	}

	public final AshLiteralContext ashLiteral() throws RecognitionException {
		AshLiteralContext _localctx = new AshLiteralContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_ashLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_la = _input.LA(1);
			if ( !(((((_la - 40)) & ~0x3f) == 0 && ((1L << (_la - 40)) & ((1L << (ASH_BOOLEANS_LITERAL - 40)) | (1L << (ASH_BOUNTY_LITERAL - 40)) | (1L << (ASH_CLASS_LITERAL - 40)) | (1L << (ASH_CLASSES_LITERAL - 40)) | (1L << (ASH_COINMASTER_LITERAL - 40)) | (1L << (ASH_EFFECT_LITERAL - 40)) | (1L << (ASH_EFFECTS_LITERAL - 40)) | (1L << (ASH_ELEMENT_LITERAL - 40)) | (1L << (ASH_ELEMENTS_LITERAL - 40)) | (1L << (ASH_FAMILIAR_LITERAL - 40)) | (1L << (ASH_FAMILIARS_LITERAL - 40)) | (1L << (ASH_FLOATS_LITERAL - 40)) | (1L << (ASH_INTS_LITERAL - 40)) | (1L << (ASH_ITEM_LITERAL - 40)) | (1L << (ASH_ITEMS_LITERAL - 40)) | (1L << (ASH_LOCATION_LITERAL - 40)) | (1L << (ASH_LOCATIONS_LITERAL - 40)) | (1L << (ASH_MONSTER_LITERAL - 40)) | (1L << (ASH_MONSTERS_LITERAL - 40)) | (1L << (ASH_PHYLUM_LITERAL - 40)) | (1L << (ASH_SERVANT_LITERAL - 40)) | (1L << (ASH_SKILL_LITERAL - 40)) | (1L << (ASH_SKILLS_LITERAL - 40)) | (1L << (ASH_SLOT_LITERAL - 40)) | (1L << (ASH_SLOTS_LITERAL - 40)) | (1L << (ASH_STAT_LITERAL - 40)) | (1L << (ASH_STATS_LITERAL - 40)) | (1L << (ASH_STRINGS_LITERAL - 40)) | (1L << (ASH_THRALL_LITERAL - 40)))) != 0)) ) {
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
		enterRule(_localctx, 42, RULE_elementValuePairs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			elementValuePair();
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(208);
				match(COMMA);
				setState(209);
				elementValuePair();
				}
				}
				setState(214);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 44, RULE_elementValuePair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(IDENTIFIER);
			setState(216);
			match(ASSIGN);
			setState(217);
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
		enterRule(_localctx, 46, RULE_elementValue);
		try {
			setState(221);
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
			case ASH_BUFFER_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MATCHER_TYPE:
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
				setState(219);
				expression(0);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(220);
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
		enterRule(_localctx, 48, RULE_elementValueArrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(LBRACE);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (LBRACE - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
				{
				setState(224);
				elementValue();
				setState(229);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(225);
						match(COMMA);
						setState(226);
						elementValue();
						}
						} 
					}
					setState(231);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				}
				}
			}

			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(234);
				match(COMMA);
				}
			}

			setState(237);
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
		public TerminalNode DEFAULT() { return getToken(AshParser.DEFAULT, 0); }
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
		enterRule(_localctx, 50, RULE_defaultValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			match(DEFAULT);
			setState(240);
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
		enterRule(_localctx, 52, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(LBRACE);
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BREAK) | (1L << CONTINUE) | (1L << DO) | (1L << FLOAT) | (1L << FOR) | (1L << FOREACH) | (1L << IF) | (1L << INT) | (1L << RETURN) | (1L << STRING) | (1L << SWITCH) | (1L << THROW) | (1L << TRY) | (1L << VOID) | (1L << WHILE) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (LBRACE - 64)) | (1L << (SEMI - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
				{
				{
				setState(243);
				blockStatement();
				}
				}
				setState(248);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(249);
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
		enterRule(_localctx, 54, RULE_blockStatement);
		try {
			setState(255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(251);
				variableDeclaration();
				setState(252);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(254);
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
		enterRule(_localctx, 56, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			typeType();
			setState(258);
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
		public TerminalNode IF() { return getToken(AshParser.IF, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(AshParser.ELSE, 0); }
		public TerminalNode FOR() { return getToken(AshParser.FOR, 0); }
		public ForControlContext forControl() {
			return getRuleContext(ForControlContext.class,0);
		}
		public ForeachContext foreach() {
			return getRuleContext(ForeachContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(AshParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(AshParser.DO, 0); }
		public TerminalNode TRY() { return getToken(AshParser.TRY, 0); }
		public FinallyBlockContext finallyBlock() {
			return getRuleContext(FinallyBlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public TerminalNode SWITCH() { return getToken(AshParser.SWITCH, 0); }
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
		public TerminalNode RETURN() { return getToken(AshParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THROW() { return getToken(AshParser.THROW, 0); }
		public TerminalNode BREAK() { return getToken(AshParser.BREAK, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public TerminalNode CONTINUE() { return getToken(AshParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(AshParser.SEMI, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_statement);
		int _la;
		try {
			int _alt;
			setState(343);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(260);
				((StatementContext)_localctx).blockLabel = block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(261);
				match(IF);
				setState(262);
				parExpression();
				setState(263);
				statement();
				setState(266);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(264);
					match(ELSE);
					setState(265);
					statement();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(268);
				match(FOR);
				setState(269);
				match(LPAREN);
				setState(270);
				forControl();
				setState(271);
				match(RPAREN);
				setState(272);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(274);
				foreach();
				setState(275);
				statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(277);
				match(WHILE);
				setState(278);
				parExpression();
				setState(279);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(281);
				match(DO);
				setState(282);
				statement();
				setState(283);
				match(WHILE);
				setState(284);
				parExpression();
				setState(285);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(287);
				match(TRY);
				setState(288);
				block();
				setState(298);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CATCH:
					{
					setState(290); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(289);
						catchClause();
						}
						}
						setState(292); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==CATCH );
					setState(295);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==FINALLY) {
						{
						setState(294);
						finallyBlock();
						}
					}

					}
					break;
				case FINALLY:
					{
					setState(297);
					finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(300);
				match(SWITCH);
				setState(301);
				parExpression();
				setState(302);
				match(LBRACE);
				setState(306);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(303);
						switchBlockStatementGroup();
						}
						} 
					}
					setState(308);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				}
				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CASE || _la==DEFAULT) {
					{
					{
					setState(309);
					switchLabel();
					}
					}
					setState(314);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(315);
				match(RBRACE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(317);
				match(RETURN);
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
					{
					setState(318);
					expression(0);
					}
				}

				setState(321);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(322);
				match(THROW);
				setState(323);
				expression(0);
				setState(324);
				match(SEMI);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(326);
				match(BREAK);
				setState(328);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(327);
					match(IDENTIFIER);
					}
				}

				setState(330);
				match(SEMI);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(331);
				match(CONTINUE);
				setState(333);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(332);
					match(IDENTIFIER);
					}
				}

				setState(335);
				match(SEMI);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(336);
				match(SEMI);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(337);
				((StatementContext)_localctx).statementExpression = expression(0);
				setState(338);
				match(SEMI);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(340);
				((StatementContext)_localctx).identifierLabel = match(IDENTIFIER);
				setState(341);
				match(COLON);
				setState(342);
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
		public TerminalNode CATCH() { return getToken(AshParser.CATCH, 0); }
		public CatchTypeContext catchType() {
			return getRuleContext(CatchTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 60, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			match(CATCH);
			setState(346);
			match(LPAREN);
			setState(347);
			catchType();
			setState(348);
			match(IDENTIFIER);
			setState(349);
			match(RPAREN);
			setState(350);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public CatchTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchType; }
	}

	public final CatchTypeContext catchType() throws RecognitionException {
		CatchTypeContext _localctx = new CatchTypeContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_catchType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
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
		public TerminalNode FINALLY() { return getToken(AshParser.FINALLY, 0); }
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
		enterRule(_localctx, 64, RULE_finallyBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(354);
			match(FINALLY);
			setState(355);
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
		enterRule(_localctx, 66, RULE_switchBlockStatementGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(357);
				switchLabel();
				}
				}
				setState(360); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CASE || _la==DEFAULT );
			setState(363); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(362);
				blockStatement();
				}
				}
				setState(365); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BREAK) | (1L << CONTINUE) | (1L << DO) | (1L << FLOAT) | (1L << FOR) | (1L << FOREACH) | (1L << IF) | (1L << INT) | (1L << RETURN) | (1L << STRING) | (1L << SWITCH) | (1L << THROW) | (1L << TRY) | (1L << VOID) | (1L << WHILE) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (LBRACE - 64)) | (1L << (SEMI - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER );
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
		public TerminalNode CASE() { return getToken(AshParser.CASE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public TerminalNode DEFAULT() { return getToken(AshParser.DEFAULT, 0); }
		public SwitchLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchLabel; }
	}

	public final SwitchLabelContext switchLabel() throws RecognitionException {
		SwitchLabelContext _localctx = new SwitchLabelContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_switchLabel);
		try {
			setState(375);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				enterOuterAlt(_localctx, 1);
				{
				setState(367);
				match(CASE);
				setState(370);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
				case 1:
					{
					setState(368);
					((SwitchLabelContext)_localctx).constantExpression = expression(0);
					}
					break;
				case 2:
					{
					setState(369);
					((SwitchLabelContext)_localctx).enumConstantName = match(IDENTIFIER);
					}
					break;
				}
				setState(372);
				match(COLON);
				}
				break;
			case DEFAULT:
				enterOuterAlt(_localctx, 2);
				{
				setState(373);
				match(DEFAULT);
				setState(374);
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
		enterRule(_localctx, 70, RULE_forControl);
		int _la;
		try {
			setState(389);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(377);
				enhancedForControl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(379);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
					{
					setState(378);
					forInit();
					}
				}

				setState(381);
				match(SEMI);
				setState(383);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
					{
					setState(382);
					expression(0);
					}
				}

				setState(385);
				match(SEMI);
				setState(387);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
					{
					setState(386);
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
		enterRule(_localctx, 72, RULE_forInit);
		try {
			setState(393);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(391);
				variableDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(392);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 74, RULE_enhancedForControl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			typeType();
			setState(396);
			match(IDENTIFIER);
			setState(397);
			match(COLON);
			setState(398);
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

	public static class ForeachContext extends ParserRuleContext {
		public TerminalNode FOREACH() { return getToken(AshParser.FOREACH, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(AshParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(AshParser.IDENTIFIER, i);
		}
		public TerminalNode IN() { return getToken(AshParser.IN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForeachContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_foreach; }
	}

	public final ForeachContext foreach() throws RecognitionException {
		ForeachContext _localctx = new ForeachContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_foreach);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(FOREACH);
			setState(401);
			match(IDENTIFIER);
			setState(404);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(402);
				match(COMMA);
				setState(403);
				match(IDENTIFIER);
				}
			}

			setState(406);
			match(IN);
			setState(407);
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
		enterRule(_localctx, 78, RULE_parExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			match(LPAREN);
			setState(410);
			expression(0);
			setState(411);
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
		enterRule(_localctx, 80, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			expression(0);
			setState(418);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(414);
				match(COMMA);
				setState(415);
				expression(0);
				}
				}
				setState(420);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 82, RULE_methodCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			match(IDENTIFIER);
			setState(422);
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
		public TerminalNode CONTAINS() { return getToken(AshParser.CONTAINS, 0); }
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		int _startState = 84;
		enterRecursionRule(_localctx, 84, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				{
				setState(425);
				primary();
				}
				break;
			case 2:
				{
				setState(426);
				methodCall();
				}
				break;
			case 3:
				{
				setState(427);
				match(LPAREN);
				setState(428);
				typeType();
				setState(429);
				match(RPAREN);
				setState(430);
				expression(17);
				}
				break;
			case 4:
				{
				setState(432);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 108)) & ~0x3f) == 0 && ((1L << (_la - 108)) & ((1L << (INC - 108)) | (1L << (DEC - 108)) | (1L << (ADD - 108)) | (1L << (SUB - 108)))) != 0)) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(433);
				expression(15);
				}
				break;
			case 5:
				{
				setState(434);
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
				setState(435);
				expression(14);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(503);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(501);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(438);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(439);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 112)) & ~0x3f) == 0 && ((1L << (_la - 112)) & ((1L << (MUL - 112)) | (1L << (DIV - 112)) | (1L << (MOD - 112)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(440);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(441);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(442);
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
						setState(443);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(444);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(452);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
						case 1:
							{
							setState(445);
							match(LT);
							setState(446);
							match(LT);
							}
							break;
						case 2:
							{
							setState(447);
							match(GT);
							setState(448);
							match(GT);
							setState(449);
							match(GT);
							}
							break;
						case 3:
							{
							setState(450);
							match(GT);
							setState(451);
							match(GT);
							}
							break;
						}
						setState(454);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(455);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(456);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 96)) & ~0x3f) == 0 && ((1L << (_la - 96)) & ((1L << (GT - 96)) | (1L << (LT - 96)) | (1L << (LE - 96)) | (1L << (GE - 96)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(457);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(458);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(459);
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
						setState(460);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(461);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(462);
						((ExpressionContext)_localctx).bop = match(BITAND);
						setState(463);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(464);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(465);
						((ExpressionContext)_localctx).bop = match(CARET);
						setState(466);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(467);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(468);
						((ExpressionContext)_localctx).bop = match(BITOR);
						setState(469);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(470);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(471);
						((ExpressionContext)_localctx).bop = match(AND);
						setState(472);
						expression(6);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(473);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(474);
						((ExpressionContext)_localctx).bop = match(OR);
						setState(475);
						expression(5);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(476);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(477);
						((ExpressionContext)_localctx).bop = match(QUESTION);
						setState(478);
						expression(0);
						setState(479);
						match(COLON);
						setState(480);
						expression(4);
						}
						break;
					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(482);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(483);
						match(CONTAINS);
						setState(484);
						expression(3);
						}
						break;
					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(485);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(486);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & ((1L << (ASSIGN - 95)) | (1L << (ADD_ASSIGN - 95)) | (1L << (SUB_ASSIGN - 95)) | (1L << (MUL_ASSIGN - 95)) | (1L << (DIV_ASSIGN - 95)) | (1L << (AND_ASSIGN - 95)) | (1L << (OR_ASSIGN - 95)) | (1L << (XOR_ASSIGN - 95)) | (1L << (MOD_ASSIGN - 95)) | (1L << (LSHIFT_ASSIGN - 95)) | (1L << (RSHIFT_ASSIGN - 95)) | (1L << (URSHIFT_ASSIGN - 95)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(487);
						expression(1);
						}
						break;
					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(488);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(489);
						((ExpressionContext)_localctx).bop = match(DOT);
						setState(492);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
						case 1:
							{
							setState(490);
							match(IDENTIFIER);
							}
							break;
						case 2:
							{
							setState(491);
							methodCall();
							}
							break;
						}
						}
						break;
					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(494);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(495);
						match(LBRACK);
						setState(496);
						expression(0);
						setState(497);
						match(RBRACK);
						}
						break;
					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(499);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(500);
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
				setState(505);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
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
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 86, RULE_primary);
		try {
			setState(513);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(506);
				match(LPAREN);
				setState(507);
				expression(0);
				setState(508);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(510);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(511);
				match(IDENTIFIER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(512);
				typeTypeOrVoid();
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
		enterRule(_localctx, 88, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			typeType();
			setState(520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(516);
				match(COMMA);
				setState(517);
				typeType();
				}
				}
				setState(522);
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
		public MapTypeContext mapType() {
			return getRuleContext(MapTypeContext.class,0);
		}
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
		enterRule(_localctx, 90, RULE_typeType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(523);
				mapType();
				}
				break;
			case 2:
				{
				setState(524);
				primitiveType();
				}
				break;
			case 3:
				{
				setState(525);
				ashType();
				}
				break;
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
		public TerminalNode BOOLEAN() { return getToken(AshParser.BOOLEAN, 0); }
		public TerminalNode STRING() { return getToken(AshParser.STRING, 0); }
		public TerminalNode INT() { return getToken(AshParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(AshParser.FLOAT, 0); }
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(528);
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

	public static class MapTypeContext extends ParserRuleContext {
		public MapTypeKeysContext mapTypeKeys() {
			return getRuleContext(MapTypeKeysContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(AshParser.IDENTIFIER, 0); }
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public AshTypeContext ashType() {
			return getRuleContext(AshTypeContext.class,0);
		}
		public MapTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapType; }
	}

	public final MapTypeContext mapType() throws RecognitionException {
		MapTypeContext _localctx = new MapTypeContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_mapType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(530);
				match(IDENTIFIER);
				}
				break;
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
				{
				setState(531);
				primitiveType();
				}
				break;
			case ASH_BOUNTY_TYPE:
			case ASH_BUFFER_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MATCHER_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
				{
				setState(532);
				ashType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(535);
			match(LBRACK);
			setState(536);
			mapTypeKeys();
			setState(537);
			match(RBRACK);
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

	public static class MapTypeKeysContext extends ParserRuleContext {
		public List<PrimitiveTypeContext> primitiveType() {
			return getRuleContexts(PrimitiveTypeContext.class);
		}
		public PrimitiveTypeContext primitiveType(int i) {
			return getRuleContext(PrimitiveTypeContext.class,i);
		}
		public List<AshTypeContext> ashType() {
			return getRuleContexts(AshTypeContext.class);
		}
		public AshTypeContext ashType(int i) {
			return getRuleContext(AshTypeContext.class,i);
		}
		public MapTypeKeysContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapTypeKeys; }
	}

	public final MapTypeKeysContext mapTypeKeys() throws RecognitionException {
		MapTypeKeysContext _localctx = new MapTypeKeysContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_mapTypeKeys);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case FLOAT:
			case INT:
			case STRING:
				{
				setState(539);
				primitiveType();
				}
				break;
			case ASH_BOUNTY_TYPE:
			case ASH_BUFFER_TYPE:
			case ASH_CLASS_TYPE:
			case ASH_COINMASTER_TYPE:
			case ASH_EFFECT_TYPE:
			case ASH_ELEMENT_TYPE:
			case ASH_FAMILIAR_TYPE:
			case ASH_ITEM_TYPE:
			case ASH_LOCATION_TYPE:
			case ASH_MATCHER_TYPE:
			case ASH_MONSTER_TYPE:
			case ASH_PHYLUM_TYPE:
			case ASH_SERVANT_TYPE:
			case ASH_SKILL_TYPE:
			case ASH_SLOT_TYPE:
			case ASH_STAT_TYPE:
			case ASH_THRALL_TYPE:
				{
				setState(540);
				ashType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(543);
				match(COMMA);
				setState(546);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case BOOLEAN:
				case FLOAT:
				case INT:
				case STRING:
					{
					setState(544);
					primitiveType();
					}
					break;
				case ASH_BOUNTY_TYPE:
				case ASH_BUFFER_TYPE:
				case ASH_CLASS_TYPE:
				case ASH_COINMASTER_TYPE:
				case ASH_EFFECT_TYPE:
				case ASH_ELEMENT_TYPE:
				case ASH_FAMILIAR_TYPE:
				case ASH_ITEM_TYPE:
				case ASH_LOCATION_TYPE:
				case ASH_MATCHER_TYPE:
				case ASH_MONSTER_TYPE:
				case ASH_PHYLUM_TYPE:
				case ASH_SERVANT_TYPE:
				case ASH_SKILL_TYPE:
				case ASH_SLOT_TYPE:
				case ASH_STAT_TYPE:
				case ASH_THRALL_TYPE:
					{
					setState(545);
					ashType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(552);
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

	public static class AshTypeContext extends ParserRuleContext {
		public TerminalNode ASH_BOUNTY_TYPE() { return getToken(AshParser.ASH_BOUNTY_TYPE, 0); }
		public TerminalNode ASH_BUFFER_TYPE() { return getToken(AshParser.ASH_BUFFER_TYPE, 0); }
		public TerminalNode ASH_CLASS_TYPE() { return getToken(AshParser.ASH_CLASS_TYPE, 0); }
		public TerminalNode ASH_COINMASTER_TYPE() { return getToken(AshParser.ASH_COINMASTER_TYPE, 0); }
		public TerminalNode ASH_EFFECT_TYPE() { return getToken(AshParser.ASH_EFFECT_TYPE, 0); }
		public TerminalNode ASH_ELEMENT_TYPE() { return getToken(AshParser.ASH_ELEMENT_TYPE, 0); }
		public TerminalNode ASH_FAMILIAR_TYPE() { return getToken(AshParser.ASH_FAMILIAR_TYPE, 0); }
		public TerminalNode ASH_ITEM_TYPE() { return getToken(AshParser.ASH_ITEM_TYPE, 0); }
		public TerminalNode ASH_LOCATION_TYPE() { return getToken(AshParser.ASH_LOCATION_TYPE, 0); }
		public TerminalNode ASH_MATCHER_TYPE() { return getToken(AshParser.ASH_MATCHER_TYPE, 0); }
		public TerminalNode ASH_MONSTER_TYPE() { return getToken(AshParser.ASH_MONSTER_TYPE, 0); }
		public TerminalNode ASH_PHYLUM_TYPE() { return getToken(AshParser.ASH_PHYLUM_TYPE, 0); }
		public TerminalNode ASH_SERVANT_TYPE() { return getToken(AshParser.ASH_SERVANT_TYPE, 0); }
		public TerminalNode ASH_SKILL_TYPE() { return getToken(AshParser.ASH_SKILL_TYPE, 0); }
		public TerminalNode ASH_SLOT_TYPE() { return getToken(AshParser.ASH_SLOT_TYPE, 0); }
		public TerminalNode ASH_STAT_TYPE() { return getToken(AshParser.ASH_STAT_TYPE, 0); }
		public TerminalNode ASH_THRALL_TYPE() { return getToken(AshParser.ASH_THRALL_TYPE, 0); }
		public AshTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ashType; }
	}

	public final AshTypeContext ashType() throws RecognitionException {
		AshTypeContext _localctx = new AshTypeContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_ashType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (ASH_BOUNTY_TYPE - 69)) | (1L << (ASH_BUFFER_TYPE - 69)) | (1L << (ASH_CLASS_TYPE - 69)) | (1L << (ASH_COINMASTER_TYPE - 69)) | (1L << (ASH_EFFECT_TYPE - 69)) | (1L << (ASH_ELEMENT_TYPE - 69)) | (1L << (ASH_FAMILIAR_TYPE - 69)) | (1L << (ASH_ITEM_TYPE - 69)) | (1L << (ASH_LOCATION_TYPE - 69)) | (1L << (ASH_MATCHER_TYPE - 69)) | (1L << (ASH_MONSTER_TYPE - 69)) | (1L << (ASH_PHYLUM_TYPE - 69)) | (1L << (ASH_SERVANT_TYPE - 69)) | (1L << (ASH_SKILL_TYPE - 69)) | (1L << (ASH_SLOT_TYPE - 69)) | (1L << (ASH_STAT_TYPE - 69)) | (1L << (ASH_THRALL_TYPE - 69)))) != 0)) ) {
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
		enterRule(_localctx, 100, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(555);
			match(LPAREN);
			setState(557);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << FLOAT) | (1L << INT) | (1L << STRING) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << ASH_BOOLEANS_LITERAL) | (1L << ASH_BOUNTY_LITERAL) | (1L << ASH_CLASS_LITERAL) | (1L << ASH_CLASSES_LITERAL) | (1L << ASH_COINMASTER_LITERAL) | (1L << ASH_EFFECT_LITERAL) | (1L << ASH_EFFECTS_LITERAL) | (1L << ASH_ELEMENT_LITERAL) | (1L << ASH_ELEMENTS_LITERAL) | (1L << ASH_FAMILIAR_LITERAL) | (1L << ASH_FAMILIARS_LITERAL) | (1L << ASH_FLOATS_LITERAL) | (1L << ASH_INTS_LITERAL) | (1L << ASH_ITEM_LITERAL) | (1L << ASH_ITEMS_LITERAL) | (1L << ASH_LOCATION_LITERAL) | (1L << ASH_LOCATIONS_LITERAL) | (1L << ASH_MONSTER_LITERAL) | (1L << ASH_MONSTERS_LITERAL) | (1L << ASH_PHYLUM_LITERAL) | (1L << ASH_SERVANT_LITERAL) | (1L << ASH_SKILL_LITERAL) | (1L << ASH_SKILLS_LITERAL) | (1L << ASH_SLOT_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ASH_SLOTS_LITERAL - 64)) | (1L << (ASH_STAT_LITERAL - 64)) | (1L << (ASH_STATS_LITERAL - 64)) | (1L << (ASH_STRINGS_LITERAL - 64)) | (1L << (ASH_THRALL_LITERAL - 64)) | (1L << (ASH_BOUNTY_TYPE - 64)) | (1L << (ASH_BUFFER_TYPE - 64)) | (1L << (ASH_CLASS_TYPE - 64)) | (1L << (ASH_COINMASTER_TYPE - 64)) | (1L << (ASH_EFFECT_TYPE - 64)) | (1L << (ASH_ELEMENT_TYPE - 64)) | (1L << (ASH_FAMILIAR_TYPE - 64)) | (1L << (ASH_ITEM_TYPE - 64)) | (1L << (ASH_LOCATION_TYPE - 64)) | (1L << (ASH_MATCHER_TYPE - 64)) | (1L << (ASH_MONSTER_TYPE - 64)) | (1L << (ASH_PHYLUM_TYPE - 64)) | (1L << (ASH_SERVANT_TYPE - 64)) | (1L << (ASH_SKILL_TYPE - 64)) | (1L << (ASH_SLOT_TYPE - 64)) | (1L << (ASH_STAT_TYPE - 64)) | (1L << (ASH_THRALL_TYPE - 64)) | (1L << (LPAREN - 64)) | (1L << (BANG - 64)) | (1L << (TILDE - 64)) | (1L << (INC - 64)) | (1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)))) != 0) || _la==IDENTIFIER) {
				{
				setState(556);
				expressionList();
				}
			}

			setState(559);
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
		case 42:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		case 3:
			return precpred(_ctx, 10);
		case 4:
			return precpred(_ctx, 9);
		case 5:
			return precpred(_ctx, 8);
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		case 9:
			return precpred(_ctx, 4);
		case 10:
			return precpred(_ctx, 3);
		case 11:
			return precpred(_ctx, 2);
		case 12:
			return precpred(_ctx, 1);
		case 13:
			return precpred(_ctx, 20);
		case 14:
			return precpred(_ctx, 19);
		case 15:
			return precpred(_ctx, 16);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0087\u0234\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\3\2\3\2\7\2k\n\2\f\2\16\2n\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3v\n\3\3"+
		"\4\3\4\3\4\3\4\6\4|\n\4\r\4\16\4}\3\4\5\4\u0081\n\4\3\4\5\4\u0084\n\4"+
		"\3\5\3\5\3\5\3\5\3\6\3\6\3\6\5\6\u008d\n\6\3\7\3\7\3\7\5\7\u0092\n\7\3"+
		"\b\3\b\3\b\3\b\3\b\5\b\u0099\n\b\3\t\3\t\3\n\3\n\5\n\u009f\n\n\3\13\3"+
		"\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\5\16\u00af\n"+
		"\16\3\17\3\17\3\20\3\20\5\20\u00b5\n\20\3\20\3\20\3\21\3\21\3\21\7\21"+
		"\u00bc\n\21\f\21\16\21\u00bf\13\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\5\23\u00ca\n\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\27"+
		"\7\27\u00d5\n\27\f\27\16\27\u00d8\13\27\3\30\3\30\3\30\3\30\3\31\3\31"+
		"\5\31\u00e0\n\31\3\32\3\32\3\32\3\32\7\32\u00e6\n\32\f\32\16\32\u00e9"+
		"\13\32\5\32\u00eb\n\32\3\32\5\32\u00ee\n\32\3\32\3\32\3\33\3\33\3\33\3"+
		"\34\3\34\7\34\u00f7\n\34\f\34\16\34\u00fa\13\34\3\34\3\34\3\35\3\35\3"+
		"\35\3\35\5\35\u0102\n\35\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\5\37\u010d\n\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\6\37\u0125\n\37"+
		"\r\37\16\37\u0126\3\37\5\37\u012a\n\37\3\37\5\37\u012d\n\37\3\37\3\37"+
		"\3\37\3\37\7\37\u0133\n\37\f\37\16\37\u0136\13\37\3\37\7\37\u0139\n\37"+
		"\f\37\16\37\u013c\13\37\3\37\3\37\3\37\3\37\5\37\u0142\n\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\5\37\u014b\n\37\3\37\3\37\3\37\5\37\u0150\n"+
		"\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u015a\n\37\3 \3 \3 \3"+
		" \3 \3 \3 \3!\3!\3\"\3\"\3\"\3#\6#\u0169\n#\r#\16#\u016a\3#\6#\u016e\n"+
		"#\r#\16#\u016f\3$\3$\3$\5$\u0175\n$\3$\3$\3$\5$\u017a\n$\3%\3%\5%\u017e"+
		"\n%\3%\3%\5%\u0182\n%\3%\3%\5%\u0186\n%\5%\u0188\n%\3&\3&\5&\u018c\n&"+
		"\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\5(\u0197\n(\3(\3(\3(\3)\3)\3)\3)\3*\3"+
		"*\3*\7*\u01a3\n*\f*\16*\u01a6\13*\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\3,"+
		"\3,\3,\3,\5,\u01b7\n,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\5,\u01c7"+
		"\n,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,"+
		"\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\5,\u01ef\n,\3,\3,\3,"+
		"\3,\3,\3,\3,\7,\u01f8\n,\f,\16,\u01fb\13,\3-\3-\3-\3-\3-\3-\3-\5-\u0204"+
		"\n-\3.\3.\3.\7.\u0209\n.\f.\16.\u020c\13.\3/\3/\3/\5/\u0211\n/\3\60\3"+
		"\60\3\61\3\61\3\61\5\61\u0218\n\61\3\61\3\61\3\61\3\61\3\62\3\62\5\62"+
		"\u0220\n\62\3\62\3\62\3\62\5\62\u0225\n\62\7\62\u0227\n\62\f\62\16\62"+
		"\u022a\13\62\3\63\3\63\3\64\3\64\5\64\u0230\n\64\3\64\3\64\3\64\2\3V\65"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFH"+
		"JLNPRTVXZ\\^`bdf\2\20\5\2``ss\u0087\u0087\3\2!$\3\2%&\3\2*F\3\2nq\3\2"+
		"de\4\2rsww\3\2pq\4\2bcij\4\2hhkk\4\2aax\u0082\3\2no\6\2\3\3\17\17\25\25"+
		"\33\33\3\2GW\2\u0260\2l\3\2\2\2\4u\3\2\2\2\6w\3\2\2\2\b\u0085\3\2\2\2"+
		"\n\u0089\3\2\2\2\f\u008e\3\2\2\2\16\u0093\3\2\2\2\20\u009a\3\2\2\2\22"+
		"\u009e\3\2\2\2\24\u00a0\3\2\2\2\26\u00a4\3\2\2\2\30\u00a7\3\2\2\2\32\u00ab"+
		"\3\2\2\2\34\u00b0\3\2\2\2\36\u00b2\3\2\2\2 \u00b8\3\2\2\2\"\u00c0\3\2"+
		"\2\2$\u00c9\3\2\2\2&\u00cb\3\2\2\2(\u00cd\3\2\2\2*\u00cf\3\2\2\2,\u00d1"+
		"\3\2\2\2.\u00d9\3\2\2\2\60\u00df\3\2\2\2\62\u00e1\3\2\2\2\64\u00f1\3\2"+
		"\2\2\66\u00f4\3\2\2\28\u0101\3\2\2\2:\u0103\3\2\2\2<\u0159\3\2\2\2>\u015b"+
		"\3\2\2\2@\u0162\3\2\2\2B\u0164\3\2\2\2D\u0168\3\2\2\2F\u0179\3\2\2\2H"+
		"\u0187\3\2\2\2J\u018b\3\2\2\2L\u018d\3\2\2\2N\u0192\3\2\2\2P\u019b\3\2"+
		"\2\2R\u019f\3\2\2\2T\u01a7\3\2\2\2V\u01b6\3\2\2\2X\u0203\3\2\2\2Z\u0205"+
		"\3\2\2\2\\\u0210\3\2\2\2^\u0212\3\2\2\2`\u0217\3\2\2\2b\u021f\3\2\2\2"+
		"d\u022b\3\2\2\2f\u022d\3\2\2\2hk\5\4\3\2ik\5\16\b\2jh\3\2\2\2ji\3\2\2"+
		"\2kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2mo\3\2\2\2nl\3\2\2\2op\7\2\2\3p\3\3\2"+
		"\2\2qv\5\6\4\2rv\5\b\5\2sv\5\n\6\2tv\5\f\7\2uq\3\2\2\2ur\3\2\2\2us\3\2"+
		"\2\2ut\3\2\2\2v\5\3\2\2\2w\u0080\7\23\2\2x\u0081\7(\2\2y{\7c\2\2z|\t\2"+
		"\2\2{z\3\2\2\2|}\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\177\3\2\2\2\177\u0081\7"+
		"b\2\2\u0080x\3\2\2\2\u0080y\3\2\2\2\u0081\u0083\3\2\2\2\u0082\u0084\7"+
		"^\2\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2\u0084\7\3\2\2\2\u0085\u0086"+
		"\7\26\2\2\u0086\u0087\7\u0087\2\2\u0087\u0088\7^\2\2\u0088\t\3\2\2\2\u0089"+
		"\u008a\7\30\2\2\u008a\u008c\7(\2\2\u008b\u008d\7^\2\2\u008c\u008b\3\2"+
		"\2\2\u008c\u008d\3\2\2\2\u008d\13\3\2\2\2\u008e\u008f\7\31\2\2\u008f\u0091"+
		"\7\u0087\2\2\u0090\u0092\7^\2\2\u0091\u0090\3\2\2\2\u0091\u0092\3\2\2"+
		"\2\u0092\r\3\2\2\2\u0093\u0094\5\22\n\2\u0094\u0095\7\u0087\2\2\u0095"+
		"\u0098\5\36\20\2\u0096\u0099\5\20\t\2\u0097\u0099\7^\2\2\u0098\u0096\3"+
		"\2\2\2\u0098\u0097\3\2\2\2\u0099\17\3\2\2\2\u009a\u009b\5\66\34\2\u009b"+
		"\21\3\2\2\2\u009c\u009f\5\\/\2\u009d\u009f\7\37\2\2\u009e\u009c\3\2\2"+
		"\2\u009e\u009d\3\2\2\2\u009f\23\3\2\2\2\u00a0\u00a1\5\\/\2\u00a1\u00a2"+
		"\5\32\16\2\u00a2\u00a3\7^\2\2\u00a3\25\3\2\2\2\u00a4\u00a5\5\\/\2\u00a5"+
		"\u00a6\5\30\r\2\u00a6\27\3\2\2\2\u00a7\u00a8\7\u0087\2\2\u00a8\u00a9\7"+
		"a\2\2\u00a9\u00aa\5\34\17\2\u00aa\31\3\2\2\2\u00ab\u00ae\7\u0087\2\2\u00ac"+
		"\u00ad\7a\2\2\u00ad\u00af\5\34\17\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3"+
		"\2\2\2\u00af\33\3\2\2\2\u00b0\u00b1\5V,\2\u00b1\35\3\2\2\2\u00b2\u00b4"+
		"\7X\2\2\u00b3\u00b5\5 \21\2\u00b4\u00b3\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5"+
		"\u00b6\3\2\2\2\u00b6\u00b7\7Y\2\2\u00b7\37\3\2\2\2\u00b8\u00bd\5\"\22"+
		"\2\u00b9\u00ba\7_\2\2\u00ba\u00bc\5\"\22\2\u00bb\u00b9\3\2\2\2\u00bc\u00bf"+
		"\3\2\2\2\u00bd\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be!\3\2\2\2\u00bf"+
		"\u00bd\3\2\2\2\u00c0\u00c1\5\\/\2\u00c1\u00c2\7\u0087\2\2\u00c2#\3\2\2"+
		"\2\u00c3\u00ca\5&\24\2\u00c4\u00ca\5(\25\2\u00c5\u00ca\7(\2\2\u00c6\u00ca"+
		"\7\'\2\2\u00c7\u00ca\7)\2\2\u00c8\u00ca\5*\26\2\u00c9\u00c3\3\2\2\2\u00c9"+
		"\u00c4\3\2\2\2\u00c9\u00c5\3\2\2\2\u00c9\u00c6\3\2\2\2\u00c9\u00c7\3\2"+
		"\2\2\u00c9\u00c8\3\2\2\2\u00ca%\3\2\2\2\u00cb\u00cc\t\3\2\2\u00cc\'\3"+
		"\2\2\2\u00cd\u00ce\t\4\2\2\u00ce)\3\2\2\2\u00cf\u00d0\t\5\2\2\u00d0+\3"+
		"\2\2\2\u00d1\u00d6\5.\30\2\u00d2\u00d3\7_\2\2\u00d3\u00d5\5.\30\2\u00d4"+
		"\u00d2\3\2\2\2\u00d5\u00d8\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2"+
		"\2\2\u00d7-\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d9\u00da\7\u0087\2\2\u00da"+
		"\u00db\7a\2\2\u00db\u00dc\5\60\31\2\u00dc/\3\2\2\2\u00dd\u00e0\5V,\2\u00de"+
		"\u00e0\5\62\32\2\u00df\u00dd\3\2\2\2\u00df\u00de\3\2\2\2\u00e0\61\3\2"+
		"\2\2\u00e1\u00ea\7Z\2\2\u00e2\u00e7\5\60\31\2\u00e3\u00e4\7_\2\2\u00e4"+
		"\u00e6\5\60\31\2\u00e5\u00e3\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3"+
		"\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea"+
		"\u00e2\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ed\3\2\2\2\u00ec\u00ee\7_"+
		"\2\2\u00ed\u00ec\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u00f0\7[\2\2\u00f0\63\3\2\2\2\u00f1\u00f2\7\n\2\2\u00f2\u00f3\5\60\31"+
		"\2\u00f3\65\3\2\2\2\u00f4\u00f8\7Z\2\2\u00f5\u00f7\58\35\2\u00f6\u00f5"+
		"\3\2\2\2\u00f7\u00fa\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9"+
		"\u00fb\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fb\u00fc\7[\2\2\u00fc\67\3\2\2\2"+
		"\u00fd\u00fe\5:\36\2\u00fe\u00ff\7^\2\2\u00ff\u0102\3\2\2\2\u0100\u0102"+
		"\5<\37\2\u0101\u00fd\3\2\2\2\u0101\u0100\3\2\2\2\u01029\3\2\2\2\u0103"+
		"\u0104\5\\/\2\u0104\u0105\5\32\16\2\u0105;\3\2\2\2\u0106\u015a\5\66\34"+
		"\2\u0107\u0108\7\22\2\2\u0108\u0109\5P)\2\u0109\u010c\5<\37\2\u010a\u010b"+
		"\7\r\2\2\u010b\u010d\5<\37\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d"+
		"\u015a\3\2\2\2\u010e\u010f\7\20\2\2\u010f\u0110\7X\2\2\u0110\u0111\5H"+
		"%\2\u0111\u0112\7Y\2\2\u0112\u0113\5<\37\2\u0113\u015a\3\2\2\2\u0114\u0115"+
		"\5N(\2\u0115\u0116\5<\37\2\u0116\u015a\3\2\2\2\u0117\u0118\7 \2\2\u0118"+
		"\u0119\5P)\2\u0119\u011a\5<\37\2\u011a\u015a\3\2\2\2\u011b\u011c\7\13"+
		"\2\2\u011c\u011d\5<\37\2\u011d\u011e\7 \2\2\u011e\u011f\5P)\2\u011f\u0120"+
		"\7^\2\2\u0120\u015a\3\2\2\2\u0121\u0122\7\36\2\2\u0122\u012c\5\66\34\2"+
		"\u0123\u0125\5> \2\u0124\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u0124"+
		"\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0129\3\2\2\2\u0128\u012a\5B\"\2\u0129"+
		"\u0128\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012d\3\2\2\2\u012b\u012d\5B"+
		"\"\2\u012c\u0124\3\2\2\2\u012c\u012b\3\2\2\2\u012d\u015a\3\2\2\2\u012e"+
		"\u012f\7\34\2\2\u012f\u0130\5P)\2\u0130\u0134\7Z\2\2\u0131\u0133\5D#\2"+
		"\u0132\u0131\3\2\2\2\u0133\u0136\3\2\2\2\u0134\u0132\3\2\2\2\u0134\u0135"+
		"\3\2\2\2\u0135\u013a\3\2\2\2\u0136\u0134\3\2\2\2\u0137\u0139\5F$\2\u0138"+
		"\u0137\3\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2"+
		"\2\2\u013b\u013d\3\2\2\2\u013c\u013a\3\2\2\2\u013d\u013e\7[\2\2\u013e"+
		"\u015a\3\2\2\2\u013f\u0141\7\27\2\2\u0140\u0142\5V,\2\u0141\u0140\3\2"+
		"\2\2\u0141\u0142\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u015a\7^\2\2\u0144"+
		"\u0145\7\35\2\2\u0145\u0146\5V,\2\u0146\u0147\7^\2\2\u0147\u015a\3\2\2"+
		"\2\u0148\u014a\7\4\2\2\u0149\u014b\7\u0087\2\2\u014a\u0149\3\2\2\2\u014a"+
		"\u014b\3\2\2\2\u014b\u014c\3\2\2\2\u014c\u015a\7^\2\2\u014d\u014f\7\t"+
		"\2\2\u014e\u0150\7\u0087\2\2\u014f\u014e\3\2\2\2\u014f\u0150\3\2\2\2\u0150"+
		"\u0151\3\2\2\2\u0151\u015a\7^\2\2\u0152\u015a\7^\2\2\u0153\u0154\5V,\2"+
		"\u0154\u0155\7^\2\2\u0155\u015a\3\2\2\2\u0156\u0157\7\u0087\2\2\u0157"+
		"\u0158\7g\2\2\u0158\u015a\5<\37\2\u0159\u0106\3\2\2\2\u0159\u0107\3\2"+
		"\2\2\u0159\u010e\3\2\2\2\u0159\u0114\3\2\2\2\u0159\u0117\3\2\2\2\u0159"+
		"\u011b\3\2\2\2\u0159\u0121\3\2\2\2\u0159\u012e\3\2\2\2\u0159\u013f\3\2"+
		"\2\2\u0159\u0144\3\2\2\2\u0159\u0148\3\2\2\2\u0159\u014d\3\2\2\2\u0159"+
		"\u0152\3\2\2\2\u0159\u0153\3\2\2\2\u0159\u0156\3\2\2\2\u015a=\3\2\2\2"+
		"\u015b\u015c\7\6\2\2\u015c\u015d\7X\2\2\u015d\u015e\5@!\2\u015e\u015f"+
		"\7\u0087\2\2\u015f\u0160\7Y\2\2\u0160\u0161\5\66\34\2\u0161?\3\2\2\2\u0162"+
		"\u0163\7\u0087\2\2\u0163A\3\2\2\2\u0164\u0165\7\16\2\2\u0165\u0166\5\66"+
		"\34\2\u0166C\3\2\2\2\u0167\u0169\5F$\2\u0168\u0167\3\2\2\2\u0169\u016a"+
		"\3\2\2\2\u016a\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016d\3\2\2\2\u016c"+
		"\u016e\58\35\2\u016d\u016c\3\2\2\2\u016e\u016f\3\2\2\2\u016f\u016d\3\2"+
		"\2\2\u016f\u0170\3\2\2\2\u0170E\3\2\2\2\u0171\u0174\7\5\2\2\u0172\u0175"+
		"\5V,\2\u0173\u0175\7\u0087\2\2\u0174\u0172\3\2\2\2\u0174\u0173\3\2\2\2"+
		"\u0175\u0176\3\2\2\2\u0176\u017a\7g\2\2\u0177\u0178\7\n\2\2\u0178\u017a"+
		"\7g\2\2\u0179\u0171\3\2\2\2\u0179\u0177\3\2\2\2\u017aG\3\2\2\2\u017b\u0188"+
		"\5L\'\2\u017c\u017e\5J&\2\u017d\u017c\3\2\2\2\u017d\u017e\3\2\2\2\u017e"+
		"\u017f\3\2\2\2\u017f\u0181\7^\2\2\u0180\u0182\5V,\2\u0181\u0180\3\2\2"+
		"\2\u0181\u0182\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0185\7^\2\2\u0184\u0186"+
		"\5R*\2\u0185\u0184\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0188\3\2\2\2\u0187"+
		"\u017b\3\2\2\2\u0187\u017d\3\2\2\2\u0188I\3\2\2\2\u0189\u018c\5:\36\2"+
		"\u018a\u018c\5R*\2\u018b\u0189\3\2\2\2\u018b\u018a\3\2\2\2\u018cK\3\2"+
		"\2\2\u018d\u018e\5\\/\2\u018e\u018f\7\u0087\2\2\u018f\u0190\7g\2\2\u0190"+
		"\u0191\5V,\2\u0191M\3\2\2\2\u0192\u0193\7\21\2\2\u0193\u0196\7\u0087\2"+
		"\2\u0194\u0195\7_\2\2\u0195\u0197\7\u0087\2\2\u0196\u0194\3\2\2\2\u0196"+
		"\u0197\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u0199\7\24\2\2\u0199\u019a\5"+
		"V,\2\u019aO\3\2\2\2\u019b\u019c\7X\2\2\u019c\u019d\5V,\2\u019d\u019e\7"+
		"Y\2\2\u019eQ\3\2\2\2\u019f\u01a4\5V,\2\u01a0\u01a1\7_\2\2\u01a1\u01a3"+
		"\5V,\2\u01a2\u01a0\3\2\2\2\u01a3\u01a6\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a4"+
		"\u01a5\3\2\2\2\u01a5S\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a7\u01a8\7\u0087"+
		"\2\2\u01a8\u01a9\5f\64\2\u01a9U\3\2\2\2\u01aa\u01ab\b,\1\2\u01ab\u01b7"+
		"\5X-\2\u01ac\u01b7\5T+\2\u01ad\u01ae\7X\2\2\u01ae\u01af\5\\/\2\u01af\u01b0"+
		"\7Y\2\2\u01b0\u01b1\5V,\23\u01b1\u01b7\3\2\2\2\u01b2\u01b3\t\6\2\2\u01b3"+
		"\u01b7\5V,\21\u01b4\u01b5\t\7\2\2\u01b5\u01b7\5V,\20\u01b6\u01aa\3\2\2"+
		"\2\u01b6\u01ac\3\2\2\2\u01b6\u01ad\3\2\2\2\u01b6\u01b2\3\2\2\2\u01b6\u01b4"+
		"\3\2\2\2\u01b7\u01f9\3\2\2\2\u01b8\u01b9\f\17\2\2\u01b9\u01ba\t\b\2\2"+
		"\u01ba\u01f8\5V,\20\u01bb\u01bc\f\16\2\2\u01bc\u01bd\t\t\2\2\u01bd\u01f8"+
		"\5V,\17\u01be\u01c6\f\r\2\2\u01bf\u01c0\7c\2\2\u01c0\u01c7\7c\2\2\u01c1"+
		"\u01c2\7b\2\2\u01c2\u01c3\7b\2\2\u01c3\u01c7\7b\2\2\u01c4\u01c5\7b\2\2"+
		"\u01c5\u01c7\7b\2\2\u01c6\u01bf\3\2\2\2\u01c6\u01c1\3\2\2\2\u01c6\u01c4"+
		"\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01f8\5V,\16\u01c9\u01ca\f\f\2\2\u01ca"+
		"\u01cb\t\n\2\2\u01cb\u01f8\5V,\r\u01cc\u01cd\f\13\2\2\u01cd\u01ce\t\13"+
		"\2\2\u01ce\u01f8\5V,\f\u01cf\u01d0\f\n\2\2\u01d0\u01d1\7t\2\2\u01d1\u01f8"+
		"\5V,\13\u01d2\u01d3\f\t\2\2\u01d3\u01d4\7v\2\2\u01d4\u01f8\5V,\n\u01d5"+
		"\u01d6\f\b\2\2\u01d6\u01d7\7u\2\2\u01d7\u01f8\5V,\t\u01d8\u01d9\f\7\2"+
		"\2\u01d9\u01da\7l\2\2\u01da\u01f8\5V,\b\u01db\u01dc\f\6\2\2\u01dc\u01dd"+
		"\7m\2\2\u01dd\u01f8\5V,\7\u01de\u01df\f\5\2\2\u01df\u01e0\7f\2\2\u01e0"+
		"\u01e1\5V,\2\u01e1\u01e2\7g\2\2\u01e2\u01e3\5V,\6\u01e3\u01f8\3\2\2\2"+
		"\u01e4\u01e5\f\4\2\2\u01e5\u01e6\7\b\2\2\u01e6\u01f8\5V,\5\u01e7\u01e8"+
		"\f\3\2\2\u01e8\u01e9\t\f\2\2\u01e9\u01f8\5V,\3\u01ea\u01eb\f\26\2\2\u01eb"+
		"\u01ee\7`\2\2\u01ec\u01ef\7\u0087\2\2\u01ed\u01ef\5T+\2\u01ee\u01ec\3"+
		"\2\2\2\u01ee\u01ed\3\2\2\2\u01ef\u01f8\3\2\2\2\u01f0\u01f1\f\25\2\2\u01f1"+
		"\u01f2\7\\\2\2\u01f2\u01f3\5V,\2\u01f3\u01f4\7]\2\2\u01f4\u01f8\3\2\2"+
		"\2\u01f5\u01f6\f\22\2\2\u01f6\u01f8\t\r\2\2\u01f7\u01b8\3\2\2\2\u01f7"+
		"\u01bb\3\2\2\2\u01f7\u01be\3\2\2\2\u01f7\u01c9\3\2\2\2\u01f7\u01cc\3\2"+
		"\2\2\u01f7\u01cf\3\2\2\2\u01f7\u01d2\3\2\2\2\u01f7\u01d5\3\2\2\2\u01f7"+
		"\u01d8\3\2\2\2\u01f7\u01db\3\2\2\2\u01f7\u01de\3\2\2\2\u01f7\u01e4\3\2"+
		"\2\2\u01f7\u01e7\3\2\2\2\u01f7\u01ea\3\2\2\2\u01f7\u01f0\3\2\2\2\u01f7"+
		"\u01f5\3\2\2\2\u01f8\u01fb\3\2\2\2\u01f9\u01f7\3\2\2\2\u01f9\u01fa\3\2"+
		"\2\2\u01faW\3\2\2\2\u01fb\u01f9\3\2\2\2\u01fc\u01fd\7X\2\2\u01fd\u01fe"+
		"\5V,\2\u01fe\u01ff\7Y\2\2\u01ff\u0204\3\2\2\2\u0200\u0204\5$\23\2\u0201"+
		"\u0204\7\u0087\2\2\u0202\u0204\5\22\n\2\u0203\u01fc\3\2\2\2\u0203\u0200"+
		"\3\2\2\2\u0203\u0201\3\2\2\2\u0203\u0202\3\2\2\2\u0204Y\3\2\2\2\u0205"+
		"\u020a\5\\/\2\u0206\u0207\7_\2\2\u0207\u0209\5\\/\2\u0208\u0206\3\2\2"+
		"\2\u0209\u020c\3\2\2\2\u020a\u0208\3\2\2\2\u020a\u020b\3\2\2\2\u020b["+
		"\3\2\2\2\u020c\u020a\3\2\2\2\u020d\u0211\5`\61\2\u020e\u0211\5^\60\2\u020f"+
		"\u0211\5d\63\2\u0210\u020d\3\2\2\2\u0210\u020e\3\2\2\2\u0210\u020f\3\2"+
		"\2\2\u0211]\3\2\2\2\u0212\u0213\t\16\2\2\u0213_\3\2\2\2\u0214\u0218\7"+
		"\u0087\2\2\u0215\u0218\5^\60\2\u0216\u0218\5d\63\2\u0217\u0214\3\2\2\2"+
		"\u0217\u0215\3\2\2\2\u0217\u0216\3\2\2\2\u0218\u0219\3\2\2\2\u0219\u021a"+
		"\7\\\2\2\u021a\u021b\5b\62\2\u021b\u021c\7]\2\2\u021ca\3\2\2\2\u021d\u0220"+
		"\5^\60\2\u021e\u0220\5d\63\2\u021f\u021d\3\2\2\2\u021f\u021e\3\2\2\2\u0220"+
		"\u0228\3\2\2\2\u0221\u0224\7_\2\2\u0222\u0225\5^\60\2\u0223\u0225\5d\63"+
		"\2\u0224\u0222\3\2\2\2\u0224\u0223\3\2\2\2\u0225\u0227\3\2\2\2\u0226\u0221"+
		"\3\2\2\2\u0227\u022a\3\2\2\2\u0228\u0226\3\2\2\2\u0228\u0229\3\2\2\2\u0229"+
		"c\3\2\2\2\u022a\u0228\3\2\2\2\u022b\u022c\t\17\2\2\u022ce\3\2\2\2\u022d"+
		"\u022f\7X\2\2\u022e\u0230\5R*\2\u022f\u022e\3\2\2\2\u022f\u0230\3\2\2"+
		"\2\u0230\u0231\3\2\2\2\u0231\u0232\7Y\2\2\u0232g\3\2\2\29jlu}\u0080\u0083"+
		"\u008c\u0091\u0098\u009e\u00ae\u00b4\u00bd\u00c9\u00d6\u00df\u00e7\u00ea"+
		"\u00ed\u00f8\u0101\u010c\u0126\u0129\u012c\u0134\u013a\u0141\u014a\u014f"+
		"\u0159\u016a\u016f\u0174\u0179\u017d\u0181\u0185\u0187\u018b\u0196\u01a4"+
		"\u01b6\u01c6\u01ee\u01f7\u01f9\u0203\u020a\u0210\u0217\u021f\u0224\u0228"+
		"\u022f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}