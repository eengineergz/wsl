/*
 * Wallaby.js - v1.0.1001
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
var JsDiff=function(){function e(e){return{newPos:e.newPos,components:e.components.slice(0)}}function t(e){for(var t=[],i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t}function i(e){var t=e;return t=t.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/"/g,"&quot;")}var n=function(e){this.ignoreWhitespace=e};n.prototype={diff:function(t,i){if(i===t)return[{value:i}];if(!i)return[{value:t,removed:!0}];if(!t)return[{value:i,added:!0}];i=this.tokenize(i),t=this.tokenize(t);var n=i.length,r=t.length,s=n+r,o=[{newPos:-1,components:[]}],a=this.extractCommon(o[0],i,t,0);if(o[0].newPos+1>=n&&a+1>=r)return o[0].components;for(var l=1;l<=s;l++)for(var c=-1*l;c<=l;c+=2){var u,h=o[c-1],f=o[c+1];a=(f?f.newPos:0)-c,h&&(o[c-1]=void 0);var p=h&&h.newPos+1<n,d=f&&0<=a&&a<r;if(p||d){!p||d&&h.newPos<f.newPos?(u=e(f),this.pushComponent(u.components,t[a],void 0,!0)):(u=e(h),u.newPos++,this.pushComponent(u.components,i[u.newPos],!0,void 0));var a=this.extractCommon(u,i,t,c);if(u.newPos+1>=n&&a+1>=r)return u.components;o[c]=u}else o[c]=void 0}},pushComponent:function(e,t,i,n){var r=e[e.length-1];r&&r.added===i&&r.removed===n?e[e.length-1]={value:this.join(r.value,t),added:i,removed:n}:e.push({value:t,added:i,removed:n})},extractCommon:function(e,t,i,n){for(var r=t.length,s=i.length,o=e.newPos,a=o-n;o+1<r&&a+1<s&&this.equals(t[o+1],i[a+1]);)o++,a++,this.pushComponent(e.components,t[o],void 0,void 0);return e.newPos=o,a},equals:function(e,t){var i=/\S/;return!(!this.ignoreWhitespace||i.test(e)||i.test(t))||e===t},join:function(e,t){return e+t},tokenize:function(e){return e}};var r=new n,s=new n((!0)),o=new n;s.tokenize=o.tokenize=function(e){return t(e.split(/(\s+|\b)/))};var a=new n((!0));a.tokenize=function(e){return t(e.split(/([{}:;,]|\s+)/))};var l=new n;return l.tokenize=function(e){for(var t=[],i=e.split(/^/m),n=0;n<i.length;n++){var r=i[n],s=i[n-1];"\n"==r&&s&&"\r"===s[s.length-1]?t[t.length-1]+="\n":r&&t.push(r)}return t},{Diff:n,diffChars:function(e,t){return r.diff(e,t)},diffWords:function(e,t){return s.diff(e,t)},diffWordsWithSpace:function(e,t){return o.diff(e,t)},diffLines:function(e,t){return l.diff(e,t)},diffCss:function(e,t){return a.diff(e,t)},createPatch:function(e,t,i,n,r){function s(e){return e.map(function(e){return" "+e})}function o(e,t,i){var n=c[c.length-2],r=t===c.length-2,s=t===c.length-3&&(i.added!==n.added||i.removed!==n.removed);/\n$/.test(i.value)||!r&&!s||e.push("\\ No newline at end of file")}var a=[];a.push("Index: "+e),a.push("==================================================================="),a.push("--- "+e+("undefined"==typeof n?"":"\t"+n)),a.push("+++ "+e+("undefined"==typeof r?"":"\t"+r));var c=l.diff(t,i);c[c.length-1].value||c.pop(),c.push({value:"",lines:[]});for(var u=0,h=0,f=[],p=1,d=1,g=0;g<c.length;g++){var y=c[g],v=y.lines||y.value.replace(/\n$/,"").split("\n");if(y.lines=v,y.added||y.removed){if(!u){var m=c[g-1];u=p,h=d,m&&(f=s(m.lines.slice(-4)),u-=f.length,h-=f.length)}f.push.apply(f,v.map(function(e){return(y.added?"+":"-")+e})),o(f,g,y),y.added?d+=v.length:p+=v.length}else{if(u)if(v.length<=8&&g<c.length-2)f.push.apply(f,s(v));else{var _=Math.min(v.length,4);a.push("@@ -"+u+","+(p-u+_)+" +"+h+","+(d-h+_)+" @@"),a.push.apply(a,f),a.push.apply(a,s(v.slice(0,_))),v.length<=4&&o(a,g,y),u=0,h=0,f=[]}p+=v.length,d+=v.length}}return a.join("\n")+"\n"},applyPatch:function(e,t){for(var i=t.split("\n"),n=[],r=!1,s=!1,o="I"===i[0][0]?4:0;o<i.length;o++)if("@"===i[o][0]){var a=i[o].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);n.unshift({start:a[3],oldlength:a[2],oldlines:[],newlength:a[4],newlines:[]})}else"+"===i[o][0]?n[0].newlines.push(i[o].substr(1)):"-"===i[o][0]?n[0].oldlines.push(i[o].substr(1)):" "===i[o][0]?(n[0].newlines.push(i[o].substr(1)),n[0].oldlines.push(i[o].substr(1))):"\\"===i[o][0]&&("+"===i[o-1][0]?r=!0:"-"===i[o-1][0]&&(s=!0));for(var l=e.split("\n"),o=n.length-1;o>=0;o--){for(var c=n[o],u=0;u<c.oldlength;u++)if(l[c.start-1+u]!==c.oldlines[u])return!1;Array.prototype.splice.apply(l,[c.start-1,+c.oldlength].concat(c.newlines))}if(r)for(;!l[l.length-1];)l.pop();else s&&l.push("");return l.join("\n")},convertChangesToXML:function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];r.added?t.push("<ins>"):r.removed&&t.push("<del>"),t.push(i(r.value)),r.added?t.push("</ins>"):r.removed&&t.push("</del>")}return t.join("")},convertChangesToDMP:function(e){for(var t,i=[],n=0;n<e.length;n++)t=e[n],i.push([t.added?1:t.removed?-1:0,t.value]);return i}}}();"undefined"!=typeof module&&(module.exports=JsDiff);