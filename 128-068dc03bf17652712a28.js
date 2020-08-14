(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{989:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return T}));var t=s(844),e=s.n(t),p=s(838),c=s.n(p),o=s(839),l=s.n(o),i=s(518),u=s.n(i),r=s(840),k=s.n(r),d=s(841),h=s.n(d),m=s(842),g=s.n(m),f=s(843),y=s.n(f),w=s(0),b=s.n(w),v=s(210),S=s(145);function E(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var e=g()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return h()(this,s)}}var z=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;c()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),y()(u()(n),"state",{checkedLarge:!0,checkedSmall:!0}),y()(u()(n),"handleChangeLarge",(function(a){n.setState({checkedLarge:a})})),y()(u()(n),"handleChangeSmall",(function(a){n.setState({checkedSmall:a})})),n}return l()(s,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement(S.Switch,{checked:this.state.checkedLarge,onChange:this.handleChangeLarge}),"  ",b.a.createElement(S.Switch,{size:"small",checked:this.state.checkedSmall,onChange:this.handleChangeSmall}))}}]),s}(b.a.Component);return b.a.createElement(n,null)},C=function(){return b.a.createElement("div",null,b.a.createElement(S.Switch,{checked:!0,disabled:!0}),"  ",b.a.createElement(S.Switch,{checked:!1,disabled:!0}))},_=function(){return b.a.createElement("div",null,b.a.createElement(S.Switch,{checked:!0,loading:!0}),"  ",b.a.createElement(S.Switch,{loading:!0}),"  ",b.a.createElement(S.Switch,{checked:!0,size:"small",loading:!0}),"  ",b.a.createElement(S.Switch,{size:"small",loading:!0}))};function N(n){return b.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return b.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return b.a.createElement(N,{tag:"style",html:n.style})}var L=function(n){k()(s,n);var a=E(s);function s(){var n;c()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),y()(u()(n),"state",{showCode:!1}),y()(u()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return b.a.createElement("div",{className:"zandoc-react-demo"},b.a.createElement("div",{className:"zandoc-react-demo__preview"},e),b.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.a.createElement("div",{className:"zandoc-react-demo__title"},b.a.createElement("p",null,s||"")),b.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.a.createElement("pre",{className:"zandoc-react-demo__code"},b.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(w.Component),T=function(n){k()(s,n);var a=E(s);function s(){return c()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(j,{style:""}),b.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#switch">¶</a><a href="javascript:void(0)" id="switch" class="anchor-point"></a>Switch</h2>\n<p>Switch is a switching selector。</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Switch is recommended to be used when you need to indicate the switch between two status.</li>\n<li>itching <code>Switch</code> will trigger the status change directly.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.a.createElement(L,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Switch</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedLarge<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    checkedSmall<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeLarge</span> <span class="token operator">=</span> <span class="token parameter">checked</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedLarge<span class="token operator">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeSmall</span> <span class="token operator">=</span> <span class="token parameter">checked</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedSmall<span class="token operator">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">checkedLarge</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChangeLarge</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">checkedSmall</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChangeSmall</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(z)),b.a.createElement(L,{title:"disabled",id:"Demodisable",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Switch</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(C)),b.a.createElement(L,{title:"Switch with loading",id:"Demoloading",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Switch</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(_)),b.a.createElement(D,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>The current status</td>\n<td>bool</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggered when the value of \n<code>checked</code>\n is changed.</td>\n<td>func(checked: bool)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable the switch</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>The size of the switch</td>\n<td>string</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>The status of loading</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(w.Component)}}]);