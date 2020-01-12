import * as vsc from 'vscode';

import { AshManual } from './AshManual';
import { downloadAndUnzipVSCode } from 'vscode-test';

const ashFunctionNames: string[] = Object.keys(AshManual);

export class AshDocumentCompletionItemProvider implements vsc.CompletionItemProvider {
    provideCompletionItems(doc: vsc.TextDocument, pos: vsc.Position): vsc.ProviderResult<vsc.CompletionItem[]> {
        return new Promise((resolve) => {
            const range = doc.getWordRangeAtPosition(pos);
            const word = doc.getText(range);

            const items = ashFunctionNames.filter((fn) => fn.startsWith(word)).map((fn) => {
                const manualEntry = AshManual[fn];

                const item = new vsc.CompletionItem(fn, vsc.CompletionItemKind.Function);
                item.documentation = new vsc.MarkdownString(
                    `${manualEntry.signatures.map((s) => " ```typescript\n" + s + "\n```").join('\n\n')}\n\n` +
                    `${manualEntry.documentation}\n\n`
                );

                return item;
            });

            resolve(items);
        });
    }
}