"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const StatusBarHelper_1 = require("./StatusBarHelper");
const disposable_1 = require("@hediet/std/disposable");
class TaskStatusBarController extends disposable_1.DisposableComponent {
    constructor(task, idx, name) {
        super();
        this.name = name;
        const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -0 + idx);
        this.statusBarItem = item;
        const startCommand = StatusBarHelper_1.getAnonymousCommand(() => __awaiter(this, void 0, void 0, function* () {
            yield vscode.tasks.executeTask(task);
        }));
        this.startCommand = startCommand.command;
        this.addDisposable(startCommand.disposable);
        const killCommand = StatusBarHelper_1.getAnonymousCommand(() => __awaiter(this, void 0, void 0, function* () {
            const e = vscode.tasks.taskExecutions.find(e => e.task.name === task.name);
            if (e) {
                e.terminate();
            }
        }));
        this.killCommand = killCommand.command;
        this.addDisposable(killCommand.disposable);
        const isRunning = vscode.tasks.taskExecutions.some(e => e.task.name === task.name);
        if (isRunning) {
            this.started();
        }
        else {
            this.ended();
        }
        item.show();
    }
    started() {
        this.statusBarItem.command = this.killCommand;
        this.statusBarItem.text = `$(primitive-square) ${this.name}`;
    }
    ended() {
        this.statusBarItem.command = this.startCommand;
        this.statusBarItem.text = `$(play) ${this.name}`;
    }
    dispose() {
        super.dispose();
        this.statusBarItem.hide();
        this.statusBarItem.dispose();
    }
}
const taskLabelFilterKey = "tasksStatusbar.taskLabelFilter";
const nameTemplateKey = "tasksStatusbar.nameTemplate";
class Extension extends disposable_1.DisposableComponent {
    constructor() {
        super();
        this.nameTemplate = null;
        this.taskBarEntries = new Map();
        this.addDisposable(vscode.commands.registerCommand("tasksStatusbar.reload", () => {
            this.reload();
        }));
        this.addDisposable(vscode.tasks.onDidStartTask(e => {
            const entry = this.taskBarEntries.get(e.execution.task.name);
            if (!entry) {
                return;
            }
            entry.started();
        }));
        this.addDisposable(vscode.tasks.onDidEndTask(e => {
            const entry = this.taskBarEntries.get(e.execution.task.name);
            if (!entry) {
                return;
            }
            entry.ended();
        }));
        this.addDisposable(vscode.workspace.onDidChangeConfiguration(() => {
            this.reload();
        }));
        this.reload();
    }
    reload() {
        this.updateSettings();
        this.updateSync();
    }
    updateSettings() {
        const c = vscode.workspace.getConfiguration();
        this.taskLabelFilter = new RegExp(c.get(taskLabelFilterKey) || "dev|watch");
        this.nameTemplate = c.get(nameTemplateKey) || null;
    }
    updateSync() {
        this.update().catch(e => console.error(e));
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            let tasks = yield vscode.tasks.fetchTasks();
            for (const e of this.taskBarEntries.values()) {
                e.dispose();
            }
            this.taskBarEntries.clear();
            let idx = 0;
            for (const task of tasks) {
                idx++;
                const e = this.taskLabelFilter.exec(task.name);
                if (!e) {
                    continue;
                }
                let name = task.name;
                if (this.nameTemplate) {
                    name = name.replace(this.taskLabelFilter, this.nameTemplate);
                }
                const controller = new TaskStatusBarController(task, idx, name);
                this.taskBarEntries.set(task.name, controller);
            }
        });
    }
    dispose() {
        super.dispose();
        for (const e of this.taskBarEntries.values()) {
            e.dispose();
        }
    }
}
function activate(context) {
    const e = new Extension();
    context.subscriptions.push(e);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map