(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{994:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return R}));var t=s(518),e=s.n(t),p=s(843),c=s.n(p),o=s(844),l=s.n(o),u=s(838),i=s.n(u),r=s(839),k=s.n(r),d=s(840),m=s.n(d),g=s(841),h=s.n(g),f=s(842),v=s.n(f),y=s(0),E=s.n(y),b=s(210),w=s(145);function z(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=v()(n);if(a){var e=v()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return h()(this,s)}}var N=function(){var n=function(n){m()(s,n);var a=z(s);function s(){return i()(this,s),a.apply(this,arguments)}return k()(s,[{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement(w.BlockHeader,{title:"Youzan wsc",tooltip:E.a.createElement("span",null,"test"),position:"top-center"}),E.a.createElement("br",null),E.a.createElement(w.BlockHeader,{className:"test-class",title:"Youzan wsc",position:"top-center",leftContent:E.a.createElement("a",{className:"zent-link",href:"/"},"left content")}),E.a.createElement("br",null),E.a.createElement(w.BlockHeader,{title:"Youzan wsc",tooltip:E.a.createElement("span",null,"test"),position:"top-center",rightContent:E.a.createElement("a",{className:"zent-link",href:"/"},"right content")}),E.a.createElement("br",null),E.a.createElement(w.BlockHeader,{className:"test-class",title:"Youzan wsc",tooltip:E.a.createElement("span",null,"test"),position:"top-center",leftContent:E.a.createElement("a",{className:"zent-link",href:"/"},"left content"),rightContent:E.a.createElement("a",{className:"zent-link",href:"/"},"right content")}))}}]),s}(E.a.Component);return E.a.createElement(n,null)},q=function(){var n=function(n){m()(s,n);var a=z(s);function s(){return i()(this,s),a.apply(this,arguments)}return k()(s,[{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement(w.BlockHeader,{title:"ribbon (default)"}),E.a.createElement("br",null),E.a.createElement(w.BlockHeader,{type:"minimum",title:"minimum"}))}}]),s}(E.a.Component);return E.a.createElement(n,null)};function C(n){return E.a.createElement(n.tag,l()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function B(n){return E.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function H(n){return E.a.createElement(C,{tag:"style",html:n.style})}var _=function(n){m()(s,n);var a=z(s);function s(){var n;i()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),c()(e()(n),"state",{showCode:!1}),c()(e()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return k()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(C,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(y.Component),R=function(n){m()(s,n);var a=z(s);function s(){return i()(this,s),a.apply(this,arguments)}return k()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(H,{style:""}),E.a.createElement(B,{html:'<h2 class="anchor-heading"><a href="#blockheader">¶</a><a href="javascript:void(0)" id="blockheader" class="anchor-point"></a>BlockHeader</h2>\n<p>This is a block header.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.a.createElement(_,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">BlockHeader</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n          <span class="token attr-name">leftContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n          <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n          <span class="token attr-name">leftContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n          <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(N)),E.a.createElement(_,{title:"type",id:"Demotype",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">BlockHeader</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Type</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ribbon (default)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlockHeader</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minimum<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minimum<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Type</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(q)),E.a.createElement(B,{html:"<h2 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>custom class name</td>\n<td>string</td>\n<td>''</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>style type</td>\n<td>'ribbon' \n|\n 'minimum'</td>\n<td>'ribbon'</td>\n<td>'minimum'</td>\n</tr>\n<tr>\n<td>title</td>\n<td>title</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>content of the pop</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>pop position</td>\n<td>string</td>\n<td>'top-right'</td>\n<td></td>\n</tr>\n<tr>\n<td>leftContent</td>\n<td>left custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rightContent</td>\n<td>right custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),s}(y.Component)}}]);