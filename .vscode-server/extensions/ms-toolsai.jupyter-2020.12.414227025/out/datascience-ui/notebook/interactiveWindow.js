!function(e){function t(t){for(var n,l,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={interactiveWindow:0},a=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,function(e){if(e.exports&&!e.exports.__esModule&&void 0===e.exports.default){if(e.exports.headers&&e.exports.headers.common&&e.exports.headers.common.Accept&&e.exports.adapter&&e.exports.transformRequest&&e.exports.transformResponse)return;e.exports.default=e.exports}}(o),o.exports}l.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=function(e){return l.p+""+({"vendors~dataresource~geojson~modeldebug~nteract_transforms~nteract_transforms_vsdom":"vendors~dataresource~geojson~modeldebug~nteract_transforms~nteract_transforms_vsdom",modeldebug:"modeldebug",nteract_transforms_vsdom:"nteract_transforms_vsdom","vendors~dataresource~vega":"vendors~dataresource~vega","vendors~dataresource":"vendors~dataresource","vendors~geojson":"vendors~geojson","vendors~nteract_transforms":"vendors~nteract_transforms","vendors~vega":"vendors~vega",vega:"vega","vendors~plotly":"vendors~plotly"}[e]||e)+".bundle.js"}(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;a.push([7,"monaco","commons"]),o()}({"+oPt":function(e,t,o){(t=e.exports=o("I1BE")(!1)).i(o("9RTN"),""),t.push([e.i,"/* Import common styles and then override them below */\n.toolbar-menu-bar-child {\n  background: var(--override-background, var(--vscode-editor-background));\n  z-index: 10;\n}\n#main-panel-content {\n  grid-area: content;\n  max-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.messages-result-container {\n  width: 100%;\n}\n.messages-result-container pre {\n  white-space: pre-wrap;\n  font-family: monospace;\n  margin: 0px;\n  word-break: break-all;\n}\n.cell-wrapper {\n  margin: 0px;\n  padding: 0px;\n  display: block;\n}\n.cell-result-container {\n  margin: 0px;\n  display: grid;\n  grid-auto-columns: minmax(0, 1fr);\n}\n.cell-outer {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) 8px;\n  grid-column-gap: 3px;\n  width: 100%;\n}\n.cell-output {\n  margin: 0px;\n  width: 100%;\n  overflow-x: scroll;\n  background: transparent;\n}\n.cell-output > div {\n  background: var(--override-widget-background, var(--vscode-notifications-background));\n}\nxmp {\n  margin: 0px;\n}\n.cell-input {\n  margin: 0;\n}\n.markdown-cell-output {\n  width: 100%;\n  overflow-x: scroll;\n}\n.cell-output-text {\n  white-space: pre-wrap;\n  word-break: break-all;\n  overflow-x: hidden;\n}\n",""])},7:function(e,t,o){o("201c"),e.exports=o("EMpZ")},EMpZ:function(e,t,o){"use strict";o.r(t);o("HWNH"),o("usN3");var n=o("q1tI"),r=o("i8i4"),a=o("/MKj"),l=o("uaVO"),s=o("XVEm"),i=o("eyGK"),c=o("Aohs"),p=o("mrSG"),u=o("yXML"),d=o("KoO9"),h=o("jss3"),b=o("d+9d"),m=o("PG7e"),f=o("qUK1"),g=o("uunU"),v=o("btyL"),C=o("kobn"),S=o("cwXv"),E=o("t4XM"),y=(o("KbE7"),o("aUsF")),O=o("2g1K"),T=o("2rLJ"),k=o("PX74"),I=function(e){function t(t){return e.call(this,t)||this}return Object(p.g)(t,e),t.prototype.render=function(){var e="collapse-input-svg "+(this.props.open?" collapse-input-svg-rotate":"")+" collapse-input-svg-"+this.props.theme,t="collapse-input remove-style "+(this.props.visible?"":" invisible"),o=this.props.open?Object(S.a)("DataScience.collapseSingle","Collapse"):Object(S.a)("DataScience.expandSingle","Expand"),r=this.props.open?"true":"false";return n.createElement("button",{className:t,title:o,onClick:this.props.onClick,"aria-expanded":r},n.createElement("svg",{version:"1.1",baseProfile:"full",width:"8px",height:"11px"},n.createElement("polygon",{points:"0,0 0,10 5,5",className:e,fill:"black"})),this.props.label&&n.createElement("label",{className:"collapseInputLabel"},this.props.label))},t}(n.Component),x=o("QZoQ"),M=o("M7O9"),V=function(){function e(){this.historyStack=[]}return e.prototype.completeUp=function(e){if(this.historyStack.length>0){void 0===this.up&&(this.up=0);var t=this.up<this.historyStack.length?this.historyStack[this.up]:e;return this.adjustCursors(this.up),t}return e},e.prototype.completeDown=function(e){if(this.historyStack.length>0&&void 0!==this.down){var t=this.historyStack[this.down];return this.adjustCursors(this.down),t}return e},e.prototype.add=function(e,t){this.historyStack=0===this.last&&this.historyStack.length>0&&this.historyStack[this.last]===e?this.historyStack:Object(p.j)([e],this.historyStack),t?this.reset():0===this.last?(this.up=void 0,this.down=void 0):this.last&&(this.up=this.last+1,this.down=this.last-1)},e.prototype.reset=function(){this.up=void 0,this.down=void 0},e.prototype.adjustCursors=function(e){this.last=e,this.historyStack.length>1&&(e<this.historyStack.length?this.up=e+1:(this.up=this.historyStack.length,e=this.historyStack.length-1),this.down=e>0?e-1:void 0)},e}(),j=o("XHnH"),w=o("pm+A");function R(e,t){return{type:e,payload:{data:t,messageDirection:"incoming"}}}function D(e){return{type:e,payload:{messageDirection:"incoming",data:void 0}}}var P={focusInput:function(){return D(w.a.FOCUS_INPUT)},restartKernel:function(){return D(w.a.RESTART_KERNEL)},interruptKernel:function(){return D(w.a.INTERRUPT_KERNEL)},deleteAllCells:function(){return D(j.b.DeleteAllCells)},deleteCell:function(e){return R(w.a.DELETE_CELL,{cellId:e})},undo:function(){return D(j.b.Undo)},redo:function(){return D(j.b.Redo)},linkClick:function(e){return R(w.a.LINK_CLICK,{href:e})},showPlot:function(e){return R(j.b.ShowPlot,e)},toggleInputBlock:function(e){return R(w.a.TOGGLE_INPUT_BLOCK,{cellId:e})},gotoCell:function(e){return R(w.a.GOTO_CELL,{cellId:e})},copyCellCode:function(e){return R(w.a.COPY_CELL_CODE,{cellId:e})},clickCell:function(e){return R(w.a.CLICK_CELL,{cellId:e})},editCell:function(e,t){return R(w.a.EDIT_CELL,{cellId:e,version:t.versionId,modelId:t.model.id,forward:t.forward,reverse:t.reverse,id:e,code:t.model.getValue()})},submitInput:function(e,t){return R(w.a.SUBMIT_INPUT,{code:e,cellId:t})},toggleVariableExplorer:function(){return D(w.a.TOGGLE_VARIABLE_EXPLORER)},setVariableExplorerHeight:function(e,t){return R(w.a.SET_VARIABLE_EXPLORER_HEIGHT,{containerHeight:e,gridHeight:t})},expandAll:function(){return D(j.b.ExpandAll)},collapseAll:function(){return D(j.b.CollapseAll)},export:function(){return D(w.a.EXPORT)},exportAs:function(){return D(w.a.EXPORT_NOTEBOOK_AS)},showDataViewer:function(e,t){return R(w.a.SHOW_DATA_VIEWER,{variable:e,columnSize:t})},editorLoaded:function(){return D(w.a.EDITOR_LOADED)},scroll:function(e){return R(w.a.SCROLL,{isAtBottom:e})},unfocus:function(e){return R(w.a.UNFOCUS_CELL,{cellId:e})},codeCreated:function(e,t){return R(w.a.CODE_CREATED,{cellId:e,modelId:t})},editorUnmounted:function(){return D(w.a.UNMOUNT)},selectKernel:function(){return D(j.b.SelectKernel)},selectServer:function(){return D(w.a.SELECT_SERVER)},openSettings:function(e){return R(w.a.OPEN_SETTINGS,{setting:e})},getVariableData:function(e,t,o,n){return void 0===o&&(o=0),void 0===n&&(n=100),R(w.a.GET_VARIABLE_DATA,{executionCount:e,sortColumn:"name",sortAscending:!0,startIndex:o,pageSize:n,refreshCount:t})},widgetFailed:function(e){return R(w.a.IPYWIDGET_RENDER_FAILURE,e)},runExternalCommand:function(e,t){return R(j.b.ExecuteExternalCommand,{buttonId:e,cell:t})}},L=function(e){function t(t){var o=e.call(this,t)||this;return o.codeRef=n.createRef(),o.wrapperRef=n.createRef(),o.toggleInputBlock=function(){var e=o.getCell().id;o.props.toggleInputBlock(e)},o.getCell=function(){return o.props.cellVM.cell},o.isCodeCell=function(){return"code"===o.props.cellVM.cell.data.cell_type},o.renderNormalToolbar=function(){var e=o.getCell(),t=e.id,r=!e||!e.file||e.file===u.a.EmptyFileName;return n.createElement("div",{className:"cell-toolbar",key:0},n.createElement(C.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.gotoCell(t)},tooltip:Object(S.a)("DataScience.gotoCodeButtonTooltip","Go to code"),hidden:r},n.createElement(v.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:v.b.GoToSourceCode})),n.createElement(C.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.copyCellCode(t)},tooltip:Object(S.a)("DataScience.copyBackToSourceButtonTooltip","Paste code into file"),hidden:!r},n.createElement(v.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:v.b.Copy})),n.createElement(C.a,{baseTheme:o.props.baseTheme,onClick:function(){return o.props.deleteCell(t)},tooltip:Object(S.a)("DataScience.deleteButtonTooltip","Remove Cell")},n.createElement(v.a,{baseTheme:o.props.baseTheme,class:"image-button-image",image:v.b.Cancel})),o.renderExternalButtons())},o.onMouseClick=function(e){e.stopPropagation(),o.props.clickCell(o.props.cellVM.cell.id)},o.renderControls=function(){var e=o.props.cellVM.cell.state===O.a.init||o.props.cellVM.cell.state===O.a.executing,t=o.props.cellVM.inputBlockCollapseNeeded&&o.props.cellVM.inputBlockShow&&!o.props.cellVM.editable&&o.isCodeCell(),r=o.props.cellVM&&o.props.cellVM.cell&&o.props.cellVM.cell.data&&o.props.cellVM.cell.data.execution_count?o.props.cellVM.cell.data.execution_count.toString():"-",a=o.props.cellVM.cell.id===u.a.EditCellId,l=a?null:o.renderNormalToolbar();return n.createElement("div",{className:"controls-div"},n.createElement(x.a,{isBusy:e,count:a&&o.props.editExecutionCount?o.props.editExecutionCount:r,visible:o.isCodeCell()}),n.createElement(I,{theme:o.props.baseTheme,visible:t,open:o.props.cellVM.inputBlockOpen,onClick:o.toggleInputBlock,tooltip:Object(S.a)("DataScience.collapseInputTooltip","Collapse input block")}),l)},o.renderInput=function(){return o.isCodeCell()?n.createElement(T.a,{cellVM:o.props.cellVM,editorOptions:o.props.editorOptions,history:o.inputHistory,codeTheme:o.props.codeTheme,onCodeChange:o.onCodeChange,onCodeCreated:o.onCodeCreated,unfocused:o.onUnfocused,testMode:!!o.props.testMode,showWatermark:o.props.showWatermark,ref:o.codeRef,monacoTheme:o.props.monacoTheme,openLink:o.openLink,editorMeasureClassName:o.props.editorMeasureClassName,keyDown:o.isEditCell()?o.onEditCellKeyDown:void 0,showLineNumbers:o.props.cellVM.showLineNumbers,font:o.props.font,disableUndoStack:o.props.cellVM.cell.id!==u.a.EditCellId,codeVersion:o.props.cellVM.codeVersion?o.props.cellVM.codeVersion:0,focusPending:o.props.focusPending,language:o.props.language,isNotebookTrusted:!0}):null},o.onUnfocused=function(){o.props.unfocus(o.getCell().id)},o.onCodeChange=function(e){o.props.editCell(o.getCell().id,e)},o.onCodeCreated=function(e,t,n,r){o.props.codeCreated(n,r)},o.hasOutput=function(){return o.getCell().state===O.a.finished||o.getCell().state===O.a.error||o.getCell().state===O.a.executing},o.getCodeCell=function(){return o.props.cellVM.cell.data},o.onKeyDown=function(e){if(o.getCell().id===u.a.EditCellId){var t={code:e.key,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,target:e.target,stopPropagation:function(){return e.stopPropagation()},preventDefault:function(){return e.preventDefault()}};o.onEditCellKeyDown(u.a.EditCellId,t)}},o.onKeyUp=function(e){if(o.getCell().id===u.a.EditCellId){var t={code:e.key,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,target:e.target,stopPropagation:function(){return e.stopPropagation()},preventDefault:function(){return e.preventDefault()}};o.onEditCellKeyUp(u.a.EditCellId,t)}},o.onEditCellKeyDown=function(e,t){"Enter"===t.code&&t.shiftKey||"NumpadEnter"===t.code&&t.shiftKey?o.editCellSubmit(t):"KeyU"===t.code&&t.ctrlKey&&t.editorInfo&&!t.editorInfo.isSuggesting?(t.editorInfo.clear(),t.stopPropagation(),t.preventDefault()):"Escape"!==t.code||t.shiftKey||!t.editorInfo||t.editorInfo.isSuggesting||(t.editorInfo.clear(),t.stopPropagation(),t.preventDefault())},o.onEditCellKeyUp=function(e,t){"Escape"===t.code&&t.shiftKey&&o.editCellShiftEscape(t)},o.editCellShiftEscape=function(e){var t=document.activeElement;if(null!==t){var n=o.findTabStop(1,t);n&&(e.stopPropagation(),e.preventDefault(),n.focus())}},o.openLink=function(e){o.props.linkClick(e.toString())},o.state={showingMarkdownEditor:!1},t.cellVM.cell.id===u.a.EditCellId&&(o.inputHistory=new V),o}return Object(p.g)(t,e),t.prototype.render=function(){return"messages"===this.props.cellVM.cell.data.cell_type?n.createElement(M.a,{messages:this.props.cellVM.cell.data.messages}):this.renderNormalCell()},t.prototype.componentDidUpdate=function(e){!this.props.cellVM.selected||e.cellVM.selected||this.props.cellVM.focused||this.giveFocus(),this.props.cellVM.scrollCount!==e.cellVM.scrollCount&&this.scrollAndFlash()},t.prototype.shouldComponentUpdate=function(e){return!y(this.props,e)},t.prototype.scrollAndFlash=function(){var e=this;this.wrapperRef&&this.wrapperRef.current&&(this.wrapperRef.current.scrollIntoView&&this.wrapperRef.current.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}),this.wrapperRef.current.classList.add("flash"),setTimeout((function(){e.wrapperRef.current&&e.wrapperRef.current.classList.remove("flash")}),1e3))},t.prototype.giveFocus=function(){this.wrapperRef&&this.wrapperRef.current&&(this.wrapperRef.current.contains(document.activeElement)||this.wrapperRef.current.focus(),this.wrapperRef.current.scrollIntoView&&this.wrapperRef.current.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},t.prototype.renderNormalCell=function(){var e=this.props.settings.showCellInputCode||this.props.cellVM.directInput||this.props.cellVM.editable||this.shouldRenderResults(),t=this.props.cellVM.editable?"cell-outer-editable":"cell-outer",o=this.props.cellVM.editable?"cell-wrapper":"cell-wrapper cell-wrapper-noneditable",r=!!this.props.settings.themeMatplotlibPlots;return e?n.createElement("div",{className:o,role:this.props.role,ref:this.wrapperRef,tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onClick:this.onMouseClick},n.createElement("div",{className:t},this.renderControls(),n.createElement("div",{className:"content-div"},n.createElement("div",{className:"cell-result-container"},this.renderInput(),n.createElement("div",null,n.createElement(k.a,{cellVM:this.props.cellVM,baseTheme:this.props.baseTheme,expandImage:this.props.showPlot,maxTextSize:this.props.maxTextSize,enableScroll:this.props.enableScroll,themeMatplotlibPlots:r,widgetFailed:this.props.widgetFailed,openSettings:this.props.openSettings})))))):null},t.prototype.renderExternalButtons=function(){var e=this,t=[];return this.props.externalButtons.forEach((function(o,r){e.isCodeCell()&&t.push(n.createElement(C.a,{baseTheme:e.props.baseTheme,onClick:function(){o.running=!0,e.props.runExternalCommand(o.buttonId,e.props.cellVM.cell)},disabled:!o.statusToEnable.includes(e.props.cellVM.cell.state),tooltip:o.tooltip,key:r},n.createElement(v.a,{baseTheme:e.props.baseTheme,class:"image-button-image",codicon:o.running?void 0:o.codicon,image:o.running?v.b.Sync:v.b.Cancel})))})),t},t.prototype.isEditCell=function(){return this.getCell().id===u.a.EditCellId},t.prototype.shouldRenderResults=function(){return this.isCodeCell()&&this.hasOutput()&&this.getCodeCell().outputs&&this.getCodeCell().outputs.length>0&&!this.props.cellVM.hideOutput},t.prototype.editCellSubmit=function(e){if(e.editorInfo&&e.editorInfo.contents){e.stopPropagation(),e.preventDefault();for(var t=e.editorInfo.contents.length-1;t>=0&&"\n"===e.editorInfo.contents[t];)t-=1;var o=e.editorInfo.contents.slice(0,t+1);this.inputHistory&&this.inputHistory.add(o,e.editorInfo.isDirty),e.editorInfo.clear(),this.props.submitInput(o,this.props.cellVM.cell.id)}},t.prototype.findTabStop=function(e,t){if(t){var o=document.querySelectorAll("input, button, select, textarea, a[href]");if(o){var n=Array.prototype.filter.call(o,(function(e){return e.tabIndex>=0})),r=n.indexOf(t);return e>=0?n[r+1]||n[0]:n[r-1]||n[0]}}},t}(n.Component),_=Object(a.b)(null,P)(L);o("Zytl");function A(e){return Object(p.a)(Object(p.a)({},e.main),{variableState:e.variables})}var K=function(e){function t(t){var o=e.call(this,t)||this;return o.mainPanelRef=n.createRef(),o.mainPanelToolbarRef=n.createRef(),o.contentPanelRef=n.createRef(),o.renderCount=0,o.internalScrollCount=0,o.footerPanelClick=function(e){o.props.focusInput()},o.getInputExecutionCount=function(){return o.props.currentExecutionCount+1},o.getContentProps=function(e){return{baseTheme:e,cellVMs:o.props.cellVMs,testMode:o.props.testMode,codeTheme:o.props.codeTheme,submittedText:o.props.submittedText,settings:o.props.settings,skipNextScroll:!!o.props.skipNextScroll,editable:!1,renderCell:o.renderCell,scrollToBottom:o.scrollDiv,scrollBeyondLastLine:!!o.props.settings&&o.props.settings.extraSettings.editor.scrollBeyondLastLine}},o.getVariableProps=function(e){var t=0;return o.mainPanelToolbarRef.current&&(t=o.mainPanelToolbarRef.current.offsetHeight),{gridHeight:o.props.variableState.gridHeight,containerHeight:o.props.variableState.containerHeight,variables:o.props.variableState.variables,debugging:o.props.debugging,busy:o.props.busy,showDataExplorer:o.props.showDataViewer,skipDefault:o.props.skipDefault,testMode:o.props.testMode,closeVariableExplorer:o.props.toggleVariableExplorer,setVariableExplorerHeight:o.props.setVariableExplorerHeight,baseTheme:e,pageIn:o.pageInVariableData,fontSize:o.props.font.size,executionCount:o.props.currentExecutionCount,refreshCount:o.props.variableState.refreshCount,offsetHeight:t}},o.pageInVariableData=function(e,t){o.props.getVariableData(o.props.currentExecutionCount,o.props.variableState.refreshCount,e,t)},o.renderCell=function(e,t,r){if(o.props.settings&&o.props.editorOptions){var a=Object(p.a)(Object(p.a)({},o.props.editorOptions),{hover:{enabled:e.inputBlockOpen}});return n.createElement("div",{key:e.cell.id,id:e.cell.id,ref:r},n.createElement(g.a,null,n.createElement(_,{role:"listitem",editorOptions:a,maxTextSize:void 0,enableScroll:!1,autoFocus:!1,testMode:o.props.testMode,cellVM:e,baseTheme:o.props.baseTheme,codeTheme:o.props.codeTheme,showWatermark:e.cell.id===u.a.EditCellId,editExecutionCount:o.getInputExecutionCount().toString(),monacoTheme:o.props.monacoTheme,font:o.props.font,settings:o.props.settings,focusPending:o.props.focusPending,language:o.props.kernel.language,externalButtons:o.props.externalButtons})))}return null},o.scrollDiv=function(e){o.props.isAtBottom&&(o.internalScrollCount+=1,e&&e.scrollIntoView&&e.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},o.handleScroll=function(e){var t;if(o.internalScrollCount>0)o.internalScrollCount-=1;else if(o.contentPanelRef.current){var n=!!(null===(t=o.props.settings)||void 0===t?void 0:t.alwaysScrollOnNewCell)||o.contentPanelRef.current.computeIsAtBottom(e.currentTarget);o.props.scroll(n)}},o.linkClick=function(e){Object(b.a)(e,o.props.linkClick)},o}return Object(p.g)(t,e),t.prototype.componentDidMount=function(){document.addEventListener("click",this.linkClick,!0),this.props.editorLoaded()},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.linkClick),this.props.editorUnmounted()},t.prototype.render=function(){var e={fontSize:this.props.font.size,fontFamily:this.props.font.family},t=!this.props.busy&&this.props.loaded||this.props.testMode?void 0:n.createElement(E.a,null);return this.props.testMode&&(this.renderCount=this.renderCount+1),n.createElement("div",{id:"main-panel",ref:this.mainPanelRef,role:"Main",style:e},n.createElement("div",{className:"styleSetter"},n.createElement("style",null,(this.props.rootCss?this.props.rootCss:"")+"\n"+Object(d.a)(this.props.settings))),n.createElement("header",{id:"main-panel-toolbar",ref:this.mainPanelToolbarRef},this.renderToolbarPanel(),t),n.createElement("section",{id:"main-panel-variable","aria-label":Object(S.a)("DataScience.collapseVariableExplorerLabel","Variables")},this.renderVariablePanel(this.props.baseTheme)),n.createElement("main",{id:"main-panel-content",onScroll:this.handleScroll},this.renderContentPanel(this.props.baseTheme)),n.createElement("section",{id:"main-panel-footer",onClick:this.footerPanelClick,"aria-label":Object(S.a)("DataScience.editSection","Input new cells here")},this.renderFooterPanel(this.props.baseTheme)))},t.prototype.renderToolbarPanel=function(){var e=this.props.variableState.visible?Object(S.a)("DataScience.collapseVariableExplorerTooltip","Hide variables active in jupyter kernel"):Object(S.a)("DataScience.expandVariableExplorerTooltip","Show variables active in jupyter kernel");return n.createElement("div",{id:"toolbar-panel"},n.createElement("div",{className:"toolbar-menu-bar"},n.createElement("div",{className:"toolbar-menu-bar-child"},n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.deleteAllCells,tooltip:Object(S.a)("DataScience.clearAll","Remove all cells")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.Cancel})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.redo,disabled:0===this.props.redoStack.length,tooltip:Object(S.a)("DataScience.redo","Redo")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.Redo})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.undo,disabled:0===this.props.undoStack.length,tooltip:Object(S.a)("DataScience.undo","Undo")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.Undo})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.restartKernel,tooltip:Object(S.a)("DataScience.restartServer","Restart Jupyter kernel")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.Restart})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.interruptKernel,tooltip:Object(S.a)("DataScience.interruptKernel","Interrupt Jupyter kernel")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.Interrupt})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.toggleVariableExplorer,tooltip:e},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.VariableExplorer})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.export,disabled:0===this.props.cellVMs.length||this.props.busy,tooltip:Object(S.a)("DataScience.export","Export as Jupyter notebook")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.SaveAs})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.exportAs,disabled:this.props.busy||!this.props.isNotebookTrusted,className:"native-button",tooltip:Object(S.a)("DataScience.notebookExportAs","Export as")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.ExportToPython})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.expandAll,disabled:0===this.props.cellVMs.length,tooltip:Object(S.a)("DataScience.expandAll","Expand all cell inputs")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.ExpandAll})),n.createElement(C.a,{baseTheme:this.props.baseTheme,onClick:this.props.collapseAll,disabled:0===this.props.cellVMs.length,tooltip:Object(S.a)("DataScience.collapseAll","Collapse all cell inputs")},n.createElement(v.a,{baseTheme:this.props.baseTheme,class:"image-button-image",image:v.b.CollapseAll}))),this.renderKernelSelection()))},t.prototype.renderKernelSelection=function(){return n.createElement(m.a,{baseTheme:this.props.baseTheme,font:this.props.font,kernel:this.props.kernel,selectServer:this.props.selectServer,selectKernel:this.props.selectKernel,shouldShowTrustMessage:!1})},t.prototype.renderVariablePanel=function(e){if(this.props.variableState.visible){var t=this.getVariableProps(e);return n.createElement(f.a,Object(p.a)({},t))}return null},t.prototype.renderContentPanel=function(e){if(!this.props.monacoReady&&!this.props.testMode)return null;var t=this.getContentProps(e);return n.createElement(h.a,Object(p.a)({},t,{ref:this.contentPanelRef}))},t.prototype.renderFooterPanel=function(e){if(!(this.props.monacoReady&&this.props.editCellVM&&this.props.settings&&this.props.editorOptions&&this.props.settings.allowInput))return null;var t=this.getInputExecutionCount(),o=this.props.settings.colorizeInputBox?"edit-panel-colorized":"edit-panel";return n.createElement("div",{className:o},n.createElement(g.a,null,n.createElement(_,{role:"form",editorOptions:this.props.editorOptions,maxTextSize:void 0,enableScroll:!1,autoFocus:document.hasFocus(),testMode:this.props.testMode,cellVM:this.props.editCellVM,baseTheme:e,codeTheme:this.props.codeTheme,showWatermark:!0,editExecutionCount:t.toString(),monacoTheme:this.props.monacoTheme,font:this.props.font,settings:this.props.settings,focusPending:this.props.focusPending,language:this.props.kernel.language,externalButtons:this.props.externalButtons})))},t}(n.Component);var N,B=o("TMpg"),U=o("y18Z"),F=o("Ost8"),G=o("EWE8"),H=o("Z/LF"),W=o("p1gK"),z=o("QLg1"),X=o("Ezry"),J=o("9BvU");!function(e){function t(e,t){return!e.testMode||"messages"!==t.data.cell_type}function o(e,t,o,n){if("code"===e.cell.data.cell_type){if(e.inputBlockShow===o&&e.inputBlockOpen===n)return e;var r=Object(p.a)({},e);if(e.inputBlockShow!==o&&(r.inputBlockShow=!!o),e.inputBlockOpen!==n&&e.inputBlockCollapseNeeded&&e.inputBlockShow){var a=function(e,t){var o=Object(z.h)(e,t);return Object(W.d)(o)}(e,t);a.includes("\n")?n?(r.inputBlockOpen=!0,r.inputBlockText=a):(a.length>0&&(a=(a=(a=a.split("\n",1)[0]).slice(0,255)).concat("...")),r.inputBlockOpen=!1,r.inputBlockText=a):(r.inputBlockCollapseNeeded=!1,r.inputBlockOpen=!0,r.inputBlockText=a)}return r}return e}function n(e,t){var n,r=Object(z.e)(e,t.settings,!1,t.debugging),a=!!t.settings&&t.settings.showCellInputCode,l=!(null===(n=t.settings)||void 0===n?void 0:n.collapseCellInputCodeByDefault);return(r=o(r,t.settings,a,l)).hasBeenRun=!0,r}e.alterCellVM=o,e.prepareCellVM=n,e.startCell=function(e){if(t(e.prevState,e.payload.data)){var o=J.a.updateOrAdd(e,n);if(o.cellVMs.length>e.prevState.cellVMs.length&&e.payload.data.id!==u.a.EditCellId){var r=o.cellVMs[o.cellVMs.length-1];Object(X.d)(e,j.b.UpdateModel,{source:"user",kind:"add",oldDirty:e.prevState.dirty,newDirty:!0,cell:r.cell,fullText:Object(z.h)(r,o.settings),currentText:r.inputBlockText})}return o}return e.prevState},e.updateCell=function(e){return t(e.prevState,e.payload.data)?J.a.updateOrAdd(e,n):e.prevState},e.finishCell=function(e){return t(e.prevState,e.payload.data.cell)?J.a.updateOrAdd(Object(p.a)(Object(p.a)({},e),{payload:Object(p.a)(Object(p.a)({},e.payload),{data:e.payload.data.cell})}),n):e.prevState},e.deleteAllCells=function(e){return Object(X.d)(e,j.b.DeleteAllCells),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:[],undoStack:J.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs)})},e.deleteCell=function(e){var t=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.data.cellId}));if(t>=0&&e.payload.data.cellId){Object(X.d)(e,j.b.UpdateModel,{source:"user",kind:"remove",index:t,oldDirty:e.prevState.dirty,newDirty:!0,cell:e.prevState.cellVMs[t].cell});var o=e.prevState.cellVMs.filter((function(e,o){return o!==t}));return Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:o,undoStack:J.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs)})}return e.prevState},e.unmount=function(e){return Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:[],undoStack:[],redoStack:[],editCellVM:void 0})},e.loaded=function(e){return Object(X.d)(e,j.b.LoadAllCellsComplete,{cells:[]}),Object(p.a)(Object(p.a)({},e.prevState),{loaded:!0,busy:!1})}}(N||(N={}));var q,Y,Z=o("Ja+E");(Y=q||(q={})).expandAll=function(e){var t;if(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode){var o=e.prevState.cellVMs.map((function(t){return N.alterCellVM(Object(p.a)({},t),e.prevState.settings,!0,!0)}));return Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:o})}return e.prevState},Y.collapseAll=function(e){var t;if(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode){var o=e.prevState.cellVMs.map((function(t){return N.alterCellVM(Object(p.a)({},t),e.prevState.settings,!0,!1)}));return Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:o})}return e.prevState},Y.toggleInputBlock=function(e){if(e.payload.data.cellId){var t=Object(p.j)(e.prevState.cellVMs),o=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.data.cellId})),n=e.prevState.cellVMs[o];return t[o]=N.alterCellVM(Object(p.a)({},n),e.prevState.settings,!0,!n.inputBlockOpen),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:t})}return e.prevState},Y.updateSettings=function(e){var t,o=JSON.parse(e.payload.data),n=Object(Z.a)(o),r=o.extraSettings?o.extraSettings.editor.fontFamily:e.prevState.font.family,a=o.extraSettings?o.extraSettings.editor.fontSize:e.prevState.font.size;if(o&&o.extraSettings&&o.extraSettings.theme!==e.prevState.vscodeThemeName){var l=J.a.computeKnownDark(o);Object(X.d)(e,U.a.GetCssRequest,{isDark:l}),Object(X.d)(e,U.a.GetMonacoThemeRequest,{isDark:l})}var s=e.prevState.cellVMs;return o.showCellInputCode!==(null===(t=e.prevState.settings)||void 0===t?void 0:t.showCellInputCode)&&(s=e.prevState.cellVMs.map((function(e){return N.alterCellVM(e,o,o.showCellInputCode,!o.collapseCellInputCodeByDefault)}))),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:s,settings:o,editorOptions:n,font:{size:a,family:r}})},Y.scrollToCell=function(e){var t=e.prevState.cellVMs.findIndex((function(t){return t.cell.id===e.payload.data.id}));if(t>=0){var o=Object(p.j)(e.prevState.cellVMs);return o[t]=Object(p.a)(Object(p.a)({},o[t]),{scrollCount:o[t].scrollCount+1}),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:o})}return e.prevState},Y.scrolled=function(e){return Object(p.a)(Object(p.a)({},e.prevState),{isAtBottom:e.payload.data.isAtBottom})},Y.clickCell=function(e){return e.payload.data.cellId===u.a.EditCellId&&e.prevState.editCellVM&&!e.prevState.editCellVM.focused?Object(p.a)(Object(p.a)({},e.prevState),{editCellVM:Object(p.a)(Object(p.a)({},e.prevState.editCellVM),{focused:!0})}):e.prevState.editCellVM&&e.payload.data.cellId!==u.a.EditCellId?Object(p.a)(Object(p.a)({},e.prevState),{editCellVM:Object(p.a)(Object(p.a)({},e.prevState.editCellVM),{focused:!1})}):F.a.focusPending(e.prevState)},Y.unfocusCell=function(e){return e.payload.data.cellId===u.a.EditCellId&&e.prevState.editCellVM&&e.prevState.editCellVM.focused?Object(p.a)(Object(p.a)({},e.prevState),{editCellVM:Object(p.a)(Object(p.a)({},e.prevState.editCellVM),{focused:!1})}):e.prevState};var Q,$,ee,te=o("xk4V"),oe=o("PZUy"),ne=o("kYDi"),re=o("BkRI");($=Q||(Q={})).undo=function(e){if(e.prevState.undoStack.length>0){var t=e.prevState.undoStack[e.prevState.undoStack.length-1],o=e.prevState.undoStack.slice(0,e.prevState.undoStack.length-1),n=J.a.pushStack(e.prevState.redoStack,e.prevState.cellVMs);return Object(X.d)(e,j.b.Undo),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:t,undoStack:o,redoStack:n,skipNextScroll:!0})}return e.prevState},$.redo=function(e){if(e.prevState.redoStack.length>0){var t=e.prevState.redoStack[e.prevState.redoStack.length-1],o=e.prevState.redoStack.slice(0,e.prevState.redoStack.length-1),n=J.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs);return Object(X.d)(e,j.b.Redo),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:t,undoStack:n,redoStack:o,skipNextScroll:!0})}return e.prevState},$.startDebugging=function(e){return Object(p.a)(Object(p.a)({},e.prevState),{debugging:!0})},$.stopDebugging=function(e){return Object(p.a)(Object(p.a)({},e.prevState),{debugging:!1})},$.submitInput=function(e){var t=new oe.a(e.prevState.settings);if(t.stripFirstMarker(e.payload.data.code).length>0&&e.prevState.editCellVM){var o=re(e.prevState.editCellVM);o.cell.state=O.a.executing,o.cell.data.source=e.payload.data.code;var n=e.payload.data.code.splitLines({trim:!1}),r=n[0];t.isMarkdown(r)?(o.cell.data=Object(ne.a)(o.cell.data,"markdown"),o.cell.data.source=Object(W.c)(n),o.cell.state=O.a.finished):"markdown"===o.cell.data.cell_type&&(o.cell.state=O.a.finished),o=Object(z.e)(o.cell,e.prevState.settings,!1,!1);var a=!!e.prevState.settings&&e.prevState.settings.collapseCellInputCodeByDefault;return(o=N.alterCellVM(o,e.prevState.settings,!0,!a)).useQuickEdit=!1,o.cell.id=te(),o.directInput=!0,o.cell.state!==O.a.finished&&Object(X.d)(e,j.b.SubmitNewCell,{code:e.payload.data.code,id:o.cell.id}),Object(p.a)(Object(p.a)({},e.prevState),{cellVMs:Object(p.j)(e.prevState.cellVMs,[o]),undoStack:J.a.pushStack(e.prevState.undoStack,e.prevState.cellVMs),skipNextScroll:!1,submittedText:!0})}return e.prevState};var ae=((ee={})[w.a.RESTART_KERNEL]=G.a.restartKernel,ee[w.a.INTERRUPT_KERNEL]=G.a.interruptKernel,ee[j.b.SelectKernel]=G.a.selectKernel,ee[w.a.SELECT_SERVER]=G.a.selectJupyterURI,ee[w.a.OPEN_SETTINGS]=F.a.openSettings,ee[w.a.EXPORT]=H.a.exportCells,ee[w.a.EXPORT_NOTEBOOK_AS]=H.a.showExportAsMenu,ee[w.a.SAVE]=H.a.save,ee[w.a.SHOW_DATA_VIEWER]=H.a.showDataViewer,ee[w.a.DELETE_CELL]=N.deleteCell,ee[j.b.ShowPlot]=H.a.showPlot,ee[w.a.LINK_CLICK]=H.a.linkClick,ee[w.a.GOTO_CELL]=H.a.gotoCell,ee[w.a.TOGGLE_INPUT_BLOCK]=q.toggleInputBlock,ee[w.a.COPY_CELL_CODE]=H.a.copyCellCode,ee[w.a.EDIT_CELL]=H.a.editCell,ee[w.a.SUBMIT_INPUT]=Q.submitInput,ee[j.b.ExpandAll]=q.expandAll,ee[w.a.EDITOR_LOADED]=H.a.started,ee[j.b.LoadAllCells]=N.loaded,ee[w.a.SCROLL]=q.scrolled,ee[w.a.CLICK_CELL]=q.clickCell,ee[w.a.UNFOCUS_CELL]=q.unfocusCell,ee[w.a.UNMOUNT]=N.unmount,ee[w.a.FOCUS_INPUT]=F.a.focusInput,ee[w.a.LOAD_IPYWIDGET_CLASS_SUCCESS]=F.a.handleLoadIPyWidgetClassSuccess,ee[w.a.LOAD_IPYWIDGET_CLASS_FAILURE]=F.a.handleLoadIPyWidgetClassFailure,ee[w.a.IPYWIDGET_WIDGET_VERSION_NOT_SUPPORTED]=F.a.notifyAboutUnsupportedWidgetVersions,ee[w.a.IPYWIDGET_RENDER_FAILURE]=F.a.handleIPyWidgetRenderFailure,ee[j.b.Undo]=Q.undo,ee[j.b.Redo]=Q.redo,ee[j.b.StartCell]=N.startCell,ee[j.b.FinishCell]=N.finishCell,ee[j.b.UpdateCellWithExecutionResults]=N.updateCell,ee[j.b.RestartKernel]=G.a.handleRestarted,ee[U.a.GetCssResponse]=F.a.handleCss,ee[j.b.MonacoReady]=F.a.monacoReady,ee[U.a.GetMonacoThemeResponse]=F.a.monacoThemeChange,ee[j.b.GetAllCells]=H.a.getAllCells,ee[j.b.ExpandAll]=q.expandAll,ee[j.b.CollapseAll]=q.collapseAll,ee[j.b.DeleteAllCells]=N.deleteAllCells,ee[j.b.StartProgress]=F.a.startProgress,ee[j.b.StopProgress]=F.a.stopProgress,ee[U.b.UpdateSettings]=q.updateSettings,ee[j.b.StartDebugging]=Q.startDebugging,ee[j.b.StopDebugging]=Q.stopDebugging,ee[j.b.ScrollToCell]=q.scrollToCell,ee[j.b.UpdateKernel]=G.a.updateStatus,ee[U.b.LocInit]=F.a.handleLocInit,ee[j.b.UpdateDisplayData]=F.a.handleUpdateDisplayData,ee[j.b.HasCell]=H.a.hasCell,ee[j.b.UpdateExternalCellButtons]=F.a.handleWebviewButtons,ee[j.b.ExecuteExternalCommand]=H.a.executeExternalCommand,ee);var le,se,ie,ce,pe=Object(c.a)(),ue=window.inTestMode,de=!ue&&"undefined"!=typeof acquireVsCodeApi,he=new i.a,be=(le=de,se=pe,ie=ue,ce=he,B.a(le,se,ie,!1,!1,ae,ce)),me=Object(a.b)(A,P)(K);r.render(n.createElement(a.a,{store:be},n.createElement(l.a,null),n.createElement(me,null),n.createElement(s.a,{postOffice:he,widgetContainerId:"rootWidget",store:be})),document.getElementById("root"))},Zytl:function(e,t,o){var n=o("+oPt");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(n,r);n.locals&&(e.exports=n.locals)},vOLz:function(e,t){e.exports=log4js}});
//# sourceMappingURL=interactiveWindow.js.map