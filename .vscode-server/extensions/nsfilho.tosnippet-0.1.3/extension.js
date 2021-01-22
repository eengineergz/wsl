// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const state = {
	outputPanel: undefined,
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "toSnippet" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.tosnippet', async () => {
		if (vscode.window.activeTextEditor.selection.isEmpty) {
			vscode.window.showErrorMessage('You need select a text first for convert to a snippet');
		} else {
			let txt = vscode.window.activeTextEditor;
			let content = txt.document.getText(txt.selection);
			
			let tituloSnippet = await vscode.window.showInputBox({
				placeHolder: 'Snippet Title',
				prompt: 'A short title information about your snippet.',
			});
			let descricaoSnippet = await vscode.window.showInputBox({
				placeHolder: 'A long description about your code',
				prompt: 'Describe what this snippet will do.',
			});
			let atalhoSnippet = await vscode.window.showInputBox({
				placeHolder: 'prefix',
				prompt: 'How your snippet will be activated in code completition.',
			});;

			let newSnippet = {
				[tituloSnippet]: {
					prefix: atalhoSnippet,
					body: content.split('\n'),
					description: descricaoSnippet,
				}
			};
			if (state.outputPanel === undefined) {
				state.outputPanel = vscode.window.createOutputChannel('Snippet');
			}
			state.outputPanel.clear();
			state.outputPanel.append(JSON.stringify(newSnippet, null, 4));
			state.outputPanel.show();
		}
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
