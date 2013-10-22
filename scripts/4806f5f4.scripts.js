"use strict";angular.module("fivefifteenApp",["fivefifteenApp.directives","fivefifteenApp.filters"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/success",{templateUrl:"views/success.html",controller:"MainCtrl"}).when("/learned",{templateUrl:"views/learned.html",controller:"MainCtrl"}).when("/challenges",{templateUrl:"views/challenges.html",controller:"MainCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"MainCtrl"}).when("/objectives",{templateUrl:"views/objectives.html",controller:"MainCtrl"}).when("/feedback",{templateUrl:"views/feedback.html",controller:"MainCtrl"}).when("/preview",{templateUrl:"views/preview.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),function(){function a(a,b){return"!"!==a[0][0]?'<a href="'+f(b.href)+'"'+(b.title?' title="'+f(b.title)+'"':"")+">"+n.lexer(a[1])+"</a>":'<img src="'+f(b.href)+'" alt="'+f(a[1])+'"'+(b.title?' title="'+f(b.title)+'"':"")+">"}function b(){return p=o.pop()}function c(){switch(p.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+p.depth+">"+n.lexer(p.text)+"</h"+p.depth+">\n";case"code":return q.highlight&&(p.code=q.highlight(p.text,p.lang),null!=p.code&&p.code!==p.text&&(p.escaped=!0,p.text=p.code)),p.escaped||(p.text=f(p.text,!0)),"<pre><code"+(p.lang?' class="lang-'+p.lang+'"':"")+">"+p.text+"</code></pre>\n";case"blockquote_start":for(var a="";"blockquote_end"!==b().type;)a+=c();return"<blockquote>\n"+a+"</blockquote>\n";case"list_start":for(var e=p.ordered?"ol":"ul",a="";"list_end"!==b().type;)a+=c();return"<"+e+">\n"+a+"</"+e+">\n";case"list_item_start":for(var a="";"list_item_end"!==b().type;)a+="text"===p.type?d():c();return"<li>"+a+"</li>\n";case"loose_item_start":for(var a="";"list_item_end"!==b().type;)a+=c();return"<li>"+a+"</li>\n";case"html":return p.pre||q.pedantic?p.text:n.lexer(p.text);case"paragraph":return"<p>"+n.lexer(p.text)+"</p>\n";case"text":return"<p>"+d()+"</p>\n"}}function d(){for(var a,c=p.text;(a=o[o.length-1])&&"text"===a.type;)c+="\n"+b().text;return n.lexer(c)}function e(a){o=a.reverse();for(var d="";b();)d+=c();return o=null,p=null,d}function f(a,b){return a.replace(b?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(a){for(var b,c="",d=a.length,e=0;d>e;e++)b=a.charCodeAt(e),Math.random()>.5&&(b="x"+b.toString(16)),c+="&#"+b+";";return c}function h(){var a="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b";return a}function i(a,b){return a=a.source,b=b||"",function c(d,e){return d?(e=e.source||e,e=e.replace(/(^|[^\[])\^/g,"$1"),a=a.replace(d,e),c):new RegExp(a,b)}}function j(){}function k(a,b){return l(b),e(m.lexer(a))}function l(a){a||(a=r),q!==a&&(q=a,q.gfm?(m.fences=m.gfm.fences,m.paragraph=m.gfm.paragraph,n.text=n.gfm.text,n.url=n.gfm.url):(m.fences=m.normal.fences,m.paragraph=m.normal.paragraph,n.text=n.normal.text,n.url=n.normal.url),q.pedantic?(n.em=n.pedantic.em,n.strong=n.pedantic.strong):(n.em=n.normal.em,n.strong=n.normal.strong))}var m={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:j,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,text:/^[^\n]+/};m.bullet=/(?:[*+-]|\d+\.)/,m.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,m.item=i(m.item,"gm")(/bull/g,m.bullet)(),m.list=i(m.list)(/bull/g,m.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),m.html=i(m.html)("comment",/<!--[^\0]*?-->/)("closed",/<(tag)[^\0]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h())(),m.paragraph=i(m.paragraph)("hr",m.hr)("heading",m.heading)("lheading",m.lheading)("blockquote",m.blockquote)("tag","<"+h())("def",m.def)(),m.normal={fences:m.fences,paragraph:m.paragraph},m.gfm={fences:/^ *(```|~~~) *(\w+)? *\n([^\0]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/},m.gfm.paragraph=i(m.paragraph)("(?!","(?!"+m.gfm.fences.source.replace("\\1","\\2")+"|")(),m.lexer=function(a){var b=[];return b.links={},a=a.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),m.token(a,b,!0)},m.token=function(a,b,c){for(var d,e,f,g,h,i,j,a=a.replace(/^ +$/gm,"");a;)if((f=m.newline.exec(a))&&(a=a.substring(f[0].length),f[0].length>1&&b.push({type:"space"})),f=m.code.exec(a))a=a.substring(f[0].length),f=f[0].replace(/^ {4}/gm,""),b.push({type:"code",text:q.pedantic?f:f.replace(/\n+$/,"")});else if(f=m.fences.exec(a))a=a.substring(f[0].length),b.push({type:"code",lang:f[2],text:f[3]});else if(f=m.heading.exec(a))a=a.substring(f[0].length),b.push({type:"heading",depth:f[1].length,text:f[2]});else if(f=m.lheading.exec(a))a=a.substring(f[0].length),b.push({type:"heading",depth:"="===f[2]?1:2,text:f[1]});else if(f=m.hr.exec(a))a=a.substring(f[0].length),b.push({type:"hr"});else if(f=m.blockquote.exec(a))a=a.substring(f[0].length),b.push({type:"blockquote_start"}),f=f[0].replace(/^ *> ?/gm,""),m.token(f,b,c),b.push({type:"blockquote_end"});else if(f=m.list.exec(a)){for(a=a.substring(f[0].length),b.push({type:"list_start",ordered:isFinite(f[2])}),f=f[0].match(m.item),d=!1,j=f.length,i=0;j>i;i++)g=f[i],h=g.length,g=g.replace(/^ *([*+-]|\d+\.) +/,""),~g.indexOf("\n ")&&(h-=g.length,g=q.pedantic?g.replace(/^ {1,4}/gm,""):g.replace(new RegExp("^ {1,"+h+"}","gm"),"")),e=d||/\n\n(?!\s*$)/.test(g),i!==j-1&&(d="\n"===g[g.length-1],e||(e=d)),b.push({type:e?"loose_item_start":"list_item_start"}),m.token(g,b),b.push({type:"list_item_end"});b.push({type:"list_end"})}else(f=m.html.exec(a))?(a=a.substring(f[0].length),b.push({type:q.sanitize?"paragraph":"html",pre:"pre"===f[1],text:f[0]})):c&&(f=m.def.exec(a))?(a=a.substring(f[0].length),b.links[f[1].toLowerCase()]={href:f[2],title:f[3]}):c&&(f=m.paragraph.exec(a))?(a=a.substring(f[0].length),b.push({type:"paragraph",text:f[0]})):(f=m.text.exec(a))&&(a=a.substring(f[0].length),b.push({type:"text",text:f[0]}));return b};var n={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:j,tag:/^<!--[^\0]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,em:/^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,code:/^(`+)([^\0]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/};n._linkInside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,n._linkHref=/\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/,n.link=i(n.link)("inside",n._linkInside)("href",n._linkHref)(),n.reflink=i(n.reflink)("inside",n._linkInside)(),n.normal={url:n.url,strong:n.strong,em:n.em,text:n.text},n.pedantic={strong:/^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/},n.gfm={url:/^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,text:/^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/},n.lexer=function(b){for(var c,d,e,h,i="",j=o.links;b;)if(h=n.escape.exec(b))b=b.substring(h[0].length),i+=h[1];else if(h=n.autolink.exec(b))b=b.substring(h[0].length),"@"===h[2]?(d=":"===h[1][6]?g(h[1].substring(7)):g(h[1]),e=g("mailto:")+d):(d=f(h[1]),e=d),i+='<a href="'+e+'">'+d+"</a>";else if(h=n.url.exec(b))b=b.substring(h[0].length),d=f(h[1]),e=d,i+='<a href="'+e+'">'+d+"</a>";else if(h=n.tag.exec(b))b=b.substring(h[0].length),i+=q.sanitize?f(h[0]):h[0];else if(h=n.link.exec(b))b=b.substring(h[0].length),i+=a(h,{href:h[2],title:h[3]});else if((h=n.reflink.exec(b))||(h=n.nolink.exec(b))){if(b=b.substring(h[0].length),c=(h[2]||h[1]).replace(/\s+/g," "),c=j[c.toLowerCase()],!c||!c.href){i+=h[0][0],b=h[0].substring(1)+b;continue}i+=a(h,c)}else(h=n.strong.exec(b))?(b=b.substring(h[0].length),i+="<strong>"+n.lexer(h[2]||h[1])+"</strong>"):(h=n.em.exec(b))?(b=b.substring(h[0].length),i+="<em>"+n.lexer(h[2]||h[1])+"</em>"):(h=n.code.exec(b))?(b=b.substring(h[0].length),i+="<code>"+f(h[2],!0)+"</code>"):(h=n.br.exec(b))?(b=b.substring(h[0].length),i+="<br>"):(h=n.text.exec(b))&&(b=b.substring(h[0].length),i+=f(h[0]));return i};var o,p;j.exec=j;var q,r;k.options=k.setOptions=function(a){return r=a,l(a),k},k.setOptions({gfm:!0,pedantic:!1,sanitize:!1,highlight:null}),k.parser=function(a,b){return l(b),e(a)},k.lexer=function(a,b){return l(b),m.lexer(a)},k.parse=k,"undefined"!=typeof module?module.exports=k:this.marked=k}.call(function(){return this||("undefined"!=typeof window?window:global)}()),angular.module("fivefifteenApp").controller("MainCtrl",["$scope","Data",function(a,b){a.data=b,a.steps={stops:["success","learned","challenges","projects","objectives","feedback"],url:"views/steps.html"}}]).factory("Data",function(){return{}}),angular.module("fivefifteenApp.filters",[]).filter("markdown",function(){return function(a){if("undefined"!=typeof a){var b=marked(a);return b}}}),angular.module("fivefifteenApp.directives",[]).directive("clock",["$timeout","Data",function(a,b){return function(c,d){function e(){f=a(function(){var a=new Date,b=new Date;b.setTime(a.getTime()-g.getTime()),d.text("Minute/s elapsed: "+b.getMinutes()),e()},1e3)}var f;b.initTime||(b.initTime=new Date);var g=b.initTime,h=new Date,i=new Date;i.setTime(h.getTime()-g.getTime()),d.text("Minute/s elapsed: "+i.getMinutes()),d.bind("$destroy",function(){a.cancel(f)}),e()}}]);