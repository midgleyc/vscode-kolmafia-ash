import * as vscode from 'vscode';

import { AshParserListener } from "./AshParserListener";
import { FunctionDeclarationContext } from "./AshParser";
import { Interval } from 'antlr4ts/misc/Interval';

export class FunctionNameListener implements AshParserListener {

    symbolsRef: vscode.SymbolInformation[];

    constructor(symbolsRef: vscode.SymbolInformation[]) {
        this.symbolsRef = symbolsRef;
    }

    enterFunctionDeclaration(context: FunctionDeclarationContext) {
        // TODO there should be a better way to do this...
        const interval = new Interval(
            context.start.startIndex,
            context.stop?.stopIndex || Number.MAX_SAFE_INTEGER
        );

        const name = context.start.inputStream?.getText(interval);
        const startLine = context.start.line - 1;
        const stopLine = context.stop ? context.stop.line - 1 : startLine;
        const stopPosition = context.stop ? context.stop.stopIndex : context.start.stopIndex;

        if (name !== undefined) {
            this.symbolsRef.push(new vscode.SymbolInformation(
                name,
                vscode.SymbolKind.Function,
                new vscode.Range(
                    startLine,
                    context.start.charPositionInLine,
                    stopLine,
                    stopPosition
                )
            ));
        }
    }
}