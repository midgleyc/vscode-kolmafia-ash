// Generated from src/ashparser/AshParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./AshParser";
import { MiscAshDeclarationsContext } from "./AshParser";
import { ImportDeclarationContext } from "./AshParser";
import { NotifyDeclarationContext } from "./AshParser";
import { ScriptDeclarationContext } from "./AshParser";
import { SinceDeclarationContext } from "./AshParser";
import { FunctionDeclarationContext } from "./AshParser";
import { FunctionBodyContext } from "./AshParser";
import { TypeTypeOrVoidContext } from "./AshParser";
import { FieldDeclarationContext } from "./AshParser";
import { ConstDeclarationContext } from "./AshParser";
import { ConstantDeclaratorContext } from "./AshParser";
import { VariableDeclaratorContext } from "./AshParser";
import { VariableInitializerContext } from "./AshParser";
import { FormalParametersContext } from "./AshParser";
import { FormalParameterListContext } from "./AshParser";
import { FormalParameterContext } from "./AshParser";
import { LiteralContext } from "./AshParser";
import { NonAggregateLiteralContext } from "./AshParser";
import { IntegerLiteralContext } from "./AshParser";
import { FloatLiteralContext } from "./AshParser";
import { AshLiteralContext } from "./AshParser";
import { AshAggregateLiteralItemContext } from "./AshParser";
import { AshAggregateLiteralContext } from "./AshParser";
import { ElementValuePairsContext } from "./AshParser";
import { ElementValuePairContext } from "./AshParser";
import { ElementValueContext } from "./AshParser";
import { ElementValueArrayInitializerContext } from "./AshParser";
import { DefaultValueContext } from "./AshParser";
import { BlockContext } from "./AshParser";
import { VariableDeclarationContext } from "./AshParser";
import { BlockStatementContext } from "./AshParser";
import { StatementContext } from "./AshParser";
import { CatchClauseContext } from "./AshParser";
import { CatchTypeContext } from "./AshParser";
import { FinallyBlockContext } from "./AshParser";
import { SwitchBlockStatementGroupContext } from "./AshParser";
import { SwitchLabelContext } from "./AshParser";
import { ForControlContext } from "./AshParser";
import { ForInitContext } from "./AshParser";
import { EnhancedForControlContext } from "./AshParser";
import { ForeachContext } from "./AshParser";
import { ParExpressionContext } from "./AshParser";
import { ExpressionListContext } from "./AshParser";
import { MethodCallContext } from "./AshParser";
import { ExpressionContext } from "./AshParser";
import { PrimaryContext } from "./AshParser";
import { TypeListContext } from "./AshParser";
import { TypeTypeContext } from "./AshParser";
import { PrimitiveTypeContext } from "./AshParser";
import { MapTypeContext } from "./AshParser";
import { MapTypeKeysContext } from "./AshParser";
import { AshTypeContext } from "./AshParser";
import { ArgumentsContext } from "./AshParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AshParser`.
 */
export interface AshParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AshParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.miscAshDeclarations`.
	 * @param ctx the parse tree
	 */
	enterMiscAshDeclarations?: (ctx: MiscAshDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.miscAshDeclarations`.
	 * @param ctx the parse tree
	 */
	exitMiscAshDeclarations?: (ctx: MiscAshDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.notifyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNotifyDeclaration?: (ctx: NotifyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.notifyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNotifyDeclaration?: (ctx: NotifyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.scriptDeclaration`.
	 * @param ctx the parse tree
	 */
	enterScriptDeclaration?: (ctx: ScriptDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.scriptDeclaration`.
	 * @param ctx the parse tree
	 */
	exitScriptDeclaration?: (ctx: ScriptDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.sinceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSinceDeclaration?: (ctx: SinceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.sinceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSinceDeclaration?: (ctx: SinceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 */
	enterTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 */
	exitTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstDeclaration?: (ctx: ConstDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstDeclaration?: (ctx: ConstDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.nonAggregateLiteral`.
	 * @param ctx the parse tree
	 */
	enterNonAggregateLiteral?: (ctx: NonAggregateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.nonAggregateLiteral`.
	 * @param ctx the parse tree
	 */
	exitNonAggregateLiteral?: (ctx: NonAggregateLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.ashLiteral`.
	 * @param ctx the parse tree
	 */
	enterAshLiteral?: (ctx: AshLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.ashLiteral`.
	 * @param ctx the parse tree
	 */
	exitAshLiteral?: (ctx: AshLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.ashAggregateLiteralItem`.
	 * @param ctx the parse tree
	 */
	enterAshAggregateLiteralItem?: (ctx: AshAggregateLiteralItemContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.ashAggregateLiteralItem`.
	 * @param ctx the parse tree
	 */
	exitAshAggregateLiteralItem?: (ctx: AshAggregateLiteralItemContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.ashAggregateLiteral`.
	 * @param ctx the parse tree
	 */
	enterAshAggregateLiteral?: (ctx: AshAggregateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.ashAggregateLiteral`.
	 * @param ctx the parse tree
	 */
	exitAshAggregateLiteral?: (ctx: AshAggregateLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.foreach`.
	 * @param ctx the parse tree
	 */
	enterForeach?: (ctx: ForeachContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.foreach`.
	 * @param ctx the parse tree
	 */
	exitForeach?: (ctx: ForeachContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.typeType`.
	 * @param ctx the parse tree
	 */
	enterTypeType?: (ctx: TypeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.typeType`.
	 * @param ctx the parse tree
	 */
	exitTypeType?: (ctx: TypeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.mapTypeKeys`.
	 * @param ctx the parse tree
	 */
	enterMapTypeKeys?: (ctx: MapTypeKeysContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.mapTypeKeys`.
	 * @param ctx the parse tree
	 */
	exitMapTypeKeys?: (ctx: MapTypeKeysContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.ashType`.
	 * @param ctx the parse tree
	 */
	enterAshType?: (ctx: AshTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.ashType`.
	 * @param ctx the parse tree
	 */
	exitAshType?: (ctx: AshTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AshParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `AshParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

