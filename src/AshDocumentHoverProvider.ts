import * as vscode from 'vscode';

import { AshManual, ManualEntry } from './AshManual';

export class AshDocumentHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover | null> {
        return new Promise((resolve, reject) => {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            if (AshManual[word] != null) {// tslint:disable-line
                resolve(new vscode.Hover(
                    new vscode.MarkdownString(
                        this.convertManualEntryToMarkdown(AshManual[word])
                    )
                ));
            } else {
                resolve(null);
            }
        });
    }

    convertManualEntryToMarkdown(entry: ManualEntry): string {
        const linkUrl = `https://wiki.kolmafia.us/index.php?title=${entry.name}`;
        return (
            `**${entry.name}**\n\n` +
            `${entry.signatures.map((s) => " ```typescript\n" + s + "\n```").join('\n\n')}\n\n` +
            `${entry.documentation}\n\n` +
            `For more info: [${linkUrl}](${linkUrl})`
        );
    }
}