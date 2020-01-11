import * as vscode from 'vscode';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

import { parse } from './parser';

import { DefaultAshParserListener } from './ashparser/DefaultAshParserListener';
import { AshParserListener } from './ashparser/AshParserListener';

export class AshDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        return new Promise((resolve, reject) => {
            const symbols: vscode.SymbolInformation[] = [];

            const listener: AshParserListener = new DefaultAshParserListener(symbols);

            try {
                const cst = parse(document.getText());
                ParseTreeWalker.DEFAULT.walk(listener, cst);
            } catch(e) {
                console.log("Parsing failed");
                console.log(e);
            }

            resolve(symbols);
        });
    }

}