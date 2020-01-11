import * as vscode from 'vscode';
import { ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';

export class AshErrorListener implements ANTLRErrorListener<any> {

    public static readonly INSTANCE: AshErrorListener = new AshErrorListener();

    // We don't want to spam users with notifications when syntax errors are found,
    // so we only do it once
    errorFound: boolean = false;

    public syntaxError<T>(
        recognizer: Recognizer<T, any>,
        offendingSymbol: T,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined): void {

        if (this.errorFound) { return; }
        this.errorFound = true;

        const errorMsg =
            "Failed to parse the KoLmafia ASH file. This is most likely " +
            "due to syntax that is not yet supported. If you have a GitHub " +
            "account, you can [report the issue here](https://github.com/danielyxie/vscode-kolmafia-ash/issues) " +
            "to help improve the extension.\n\n" +
            `Line ${line}:${charPositionInLine} - ${msg}`;

        vscode.window.showWarningMessage(errorMsg);
    }
}