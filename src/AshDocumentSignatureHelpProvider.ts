import * as vscode from 'vscode';

export class AshDocumentSignatureHelpProvider implements vscode.SignatureHelpProvider {

    provideSignatureHelp(
        doc: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context:vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {

        return new Promise((resolve, reject) => {

        });
    }

}