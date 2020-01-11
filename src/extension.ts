import * as vscode from 'vscode';

import { AshDocumentHoverProvider } from './AshDocumentHoverProvider';
import { AshDocumentSymbolProvider } from './AshDocumentSymbolProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.languages.registerHoverProvider(
		{ language: 'ash' }, new AshDocumentHoverProvider()
	);

	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
		{ language: "ash" }, new AshDocumentSymbolProvider()
	));

}

// this method is called when your extension is deactivated
export function deactivate() {}
