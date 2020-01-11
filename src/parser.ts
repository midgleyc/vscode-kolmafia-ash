import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AshLexer } from './ashparser/AshLexer';
import { CompilationUnitContext, AshParser } from './ashparser/AshParser';
export { CompilationUnitContext };

/**
 * Parses the given source code and returns the AST
 * @param source Java source code to parse
 */
export function parse(source: string): CompilationUnitContext {
    const chars = new ANTLRInputStream(source);
    const lexer = new AshLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new AshParser(tokens);
    return parser.compilationUnit();
}