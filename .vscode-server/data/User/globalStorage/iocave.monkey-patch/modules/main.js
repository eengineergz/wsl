require.config({
    paths: {
        "customize-ui" : "/home/bryan/.vscode-server/data/User/globalStorage/iocave.customize-ui/modules",
        "monkey-generated" : "/home/bryan/.vscode-server/data/User/globalStorage/iocave.monkey-patch/modules"
    }
});

define(["monkey-generated/entrypoint-main", "customize-ui/title-bar-main-process"], function (){});