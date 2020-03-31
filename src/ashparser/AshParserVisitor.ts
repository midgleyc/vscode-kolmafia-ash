// Generated from src/ashparser/AshParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AshParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AshParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AshParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.miscAshDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMiscAshDeclarations?: (ctx: MiscAshDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.notifyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotifyDeclaration?: (ctx: NotifyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.scriptDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptDeclaration?: (ctx: ScriptDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.sinceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinceDeclaration?: (ctx: SinceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.nonAggregateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonAggregateLiteral?: (ctx: NonAggregateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.ashLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAshLiteral?: (ctx: AshLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.ashAggregateLiteralItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAshAggregateLiteralItem?: (ctx: AshAggregateLiteralItemContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.ashAggregateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAshAggregateLiteral?: (ctx: AshAggregateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.foreach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach?: (ctx: ForeachContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.typeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeType?: (ctx: TypeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.mapTypeKeys`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapTypeKeys?: (ctx: MapTypeKeysContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.ashType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAshType?: (ctx: AshTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AshParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

