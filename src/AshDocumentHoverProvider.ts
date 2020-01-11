import * as vscode from 'vscode';

import { AshManual, ManualEntry } from './AshManual';

export class AshDocumentHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);

        if (AshManual[word] != null) {// tslint:disable-line
            return new vscode.Hover(
                new vscode.MarkdownString(
                    this.convertManualEntryToMarkdown(AshManual[word])
                )
            );
        } else {
            return null;
        }

    }

    convertManualEntryToMarkdown(entry: ManualEntry): string {
        const linkUrl = `https://wiki.kolmafia.us/index.php?title=${entry.name}`;
        return (
            `**${entry.name}**\n\n` +
            `${entry.signatures.map((s) => `*${s}*`).join('\n\n')}\n\n` +
            `${entry.documentation}\n\n` +
            `For more info: [${linkUrl}](${linkUrl})`
        );
    }
}