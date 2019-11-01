(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{903:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return L});var t=s(773),e=s.n(t),p=s(33),c=s.n(p),o=s(34),l=s.n(o),i=s(35),u=s.n(i),k=s(36),r=s.n(k),d=s(45),h=s.n(d),m=s(37),g=s.n(m),f=s(38),b=s.n(f),w=s(0),v=s.n(w),y=s(195),S=s(136),E=function(){var n=function(n){function a(){var n,s;c()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=u()(this,(n=r()(a)).call.apply(n,[this].concat(e))),b()(h()(s),"state",{checkedLarge:!0,checkedSmall:!0}),b()(h()(s),"handleChangeLarge",function(n){s.setState({checkedLarge:n})}),b()(h()(s),"handleChangeSmall",function(n){s.setState({checkedSmall:n})}),s}return g()(a,n),l()(a,[{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(S.ub,{checked:this.state.checkedLarge,onChange:this.handleChangeLarge}),"  ",v.a.createElement(S.ub,{size:"small",checked:this.state.checkedSmall,onChange:this.handleChangeSmall}))}}]),a}(v.a.Component);return v.a.createElement(n,null)},z=function(){return v.a.createElement("div",null,v.a.createElement(S.ub,{checked:!0,disabled:!0}),"  ",v.a.createElement(S.ub,{checked:!1,disabled:!0}))},C=function(){return v.a.createElement("div",null,v.a.createElement(S.ub,{checked:!0,loading:!0}),"  ",v.a.createElement(S.ub,{loading:!0}),"  ",v.a.createElement(S.ub,{checked:!0,size:"small",loading:!0}),"  ",v.a.createElement(S.ub,{size:"small",loading:!0}))};function _(n){return v.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return v.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return v.a.createElement(_,{tag:"style",html:n.style})}var D=function(n){function a(){var n,s;c()(this,a);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return s=u()(this,(n=r()(a)).call.apply(n,[this].concat(e))),b()(h()(s),"state",{showCode:!1}),b()(h()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},e),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,s||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(_,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(w.Component),L=function(n){function a(){return c()(this,a),u()(this,r()(a).apply(this,arguments))}return g()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(j,{style:""}),v.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#switch">¶</a><a href="javascript:void(0)" id="switch" class="anchor-point"></a>Switch</h2>\n<p>Switch is a switching selector。</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Switch is recommended to be used when you need to indicate the switch between two status.</li>\n<li>itching <code>Switch</code> will trigger the status change directly.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.a.createElement(D,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedLarge<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    checkedSmall<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeLarge</span> <span class="token operator">=</span> checked <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedLarge<span class="token punctuation">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleChangeSmall</span> <span class="token operator">=</span> checked <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedSmall<span class="token punctuation">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkedLarge<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeLarge<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkedSmall<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChangeSmall<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(E)),v.a.createElement(D,{title:"disabled",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(z)),v.a.createElement(D,{title:"Switch with loading",id:"Demoloading",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(C)),v.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>The current status</td>\n<td>bool</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggered when the value of \n<code>checked</code>\n is changed.</td>\n<td>func(checked: bool)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable the switch</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>The size of the switch</td>\n<td>string</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>The status of loading</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(w.Component)}}]);