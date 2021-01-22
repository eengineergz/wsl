import {openLink, hotKeys, imageParser, toolbar, windowHack } from "./util.js";

handler.on("open", (md) => {
    if (md.autoTheme) {
        window.addThemeCss()
    }
    const editor=new Vditor('vditor', {
        value: md.content,
        height: document.documentElement.clientHeight,
        outline: true,
        "preview": {
            "markdown": {
                "toc": true
            },
            hljs: {
                style: 'github'
            },
            math: {
                engine: 'MathJax'
            }
        },
        toolbar,
        input(content) {
            handler.emit("save", content)
        },
        hint: {
            extend: hotKeys
        }
    })

    openLink()
    windowHack(editor);
    console.log(md)
    if(md.viewAbsoluteLocal){
        imageParser()
    }

    $('body').on('contextmenu', (e) => {
        var top = e.pageY - 10;
        var left = e.pageX - 90;
        $("#context-menu").css({
          display: "block",
          top: top,
          left: left
        }).addClass("show");
      }).on("click", (e) => {
        $("#context-menu").removeClass("show").hide();
        let id = e.target.id;
        if (!e.target.id) {
          return;
        }
        id = id.replace("Menu", "")
        switch (id) {
          case "copy":
            document.execCommand("copy")
            break;
          case "paste":
            vscodeEvent.emit('command','office.markdown.paste')
            break;
          case "export":
            vscodeEvent.emit("save", editor.getValue())
            vscodeEvent.emit('export')
            break;
        }
      });
    
      $("#context-menu a").on("click", function () {
        $(this).parent().removeClass("show").hide();
      });

})

handler.emit("init")

