(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{902:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return z});var t=s(773),p=s.n(t),o=s(33),e=s.n(o),c=s(34),l=s.n(c),u=s(35),i=s.n(u),k=s(36),r=s.n(k),d=s(45),g=s.n(d),m=s(37),h=s.n(m),v=s(38),w=s.n(v),f=s(0),y=s.n(f),b=s(195),S=s(136),C=function(){var n=[{value:1,text:"red"},{value:2,text:"blue"},{value:3,text:"green"}],a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=i()(this,(n=r()(s)).call.apply(n,[this].concat(p))),w()(g()(a),"handleSelect",function(n){S.bb.success(n)}),w()(g()(a),"handleClick",function(){S.bb.success("666")}),a}return h()(s,a),l()(s,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(S.qb,{dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"Normal"),y.a.createElement(S.qb,{type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"Button"),y.a.createElement(S.qb,{disabled:!0,type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"Disabled"),y.a.createElement(S.qb,{loading:!0,type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"Loading"),y.a.createElement(S.qb,{type:"danger",size:"large",dropdownData:n},"Big"),y.a.createElement(S.qb,{type:"success",size:"small",dropdownData:n},"Small"))}}]),s}(y.a.Component);return y.a.createElement(a,null)},E=function(){var n=[{id:1,value:"red"},{id:2,value:"green"},{id:3,value:"blue"}],a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=i()(this,(n=r()(s)).call.apply(n,[this].concat(p))),w()(g()(a),"handleSelect",function(n){S.bb.success(n)}),w()(g()(a),"handleClick",function(){S.bb.success("666")}),a}return h()(s,a),l()(s,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(S.qb,{type:"primary",dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",onClick:this.handleClick,onSelect:this.handleSelect},"Button"),y.a.createElement(S.qb,{type:"danger",disabled:!0,dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",onClick:this.handleClick,onSelect:this.handleSelect},"Disabled"))}}]),s}(y.a.Component);return y.a.createElement(a,null)},D=function(){var n=[{id:1,value:"red"},{id:2,value:"green"},{id:3,value:"blue"}],a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=i()(this,(n=r()(s)).call.apply(n,[this].concat(p))),w()(g()(a),"handleSelect",function(n){S.bb.success(n)}),w()(g()(a),"handleClick",function(){S.bb.success("666")}),a}return h()(s,a),l()(s,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(S.qb,{type:"primary",dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",dropdownPosition:"top-left",onClick:this.handleClick,onSelect:this.handleSelect},"Upside"),y.a.createElement(S.qb,{type:"danger",dropdownData:n,dropdownValue:"id",dropdownText:"value",dropdownPosition:"bottom-right",onClick:this.handleClick,onSelect:this.handleSelect},"Downside"))}}]),s}(y.a.Component);return y.a.createElement(a,null)};function j(n){return y.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function B(n){return y.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function N(n){return y.a.createElement(j,{tag:"style",html:n.style})}var x=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),w()(g()(s),"state",{showCode:!1}),w()(g()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},p),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(f.Component),z=function(n){function a(){return e()(this,a),i()(this,r()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(N,{style:""}),y.a.createElement(B,{html:'<h2 class="anchor-heading"><a href="#splitbutton">¶</a><a href="javascript:void(0)" id="splitbutton" class="anchor-point"></a>SplitButton</h2>\n<p>SplitButton a button with a dropdown menu</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.a.createElement(x,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'red\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Normal\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Button\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">disabled</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">loading</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Loading\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Big\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Small\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(C)),y.a.createElement(x,{title:"dropdown setting",id:"Demodropdown",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Button\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">disabled</span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(E)),y.a.createElement(x,{title:"dropdown position setting",id:"Demodropdownposition",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-left<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Upside\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom-right<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Downside\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(D)),y.a.createElement(B,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>button style</td>\n<td>string</td>\n<td><code>'default'</code></td>\n<td><code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>is the button disabled</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n、\n<code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>is show loading icon</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>button size</td>\n<td>string</td>\n<td><code>'medium'</code></td>\n<td><code>'large'</code>\n、\n<code>'medium'</code>\n、\n<code>'small'</code></td>\n</tr>\n<tr>\n<td>dropdownTrigger</td>\n<td>trigger for dropdown menu</td>\n<td>string</td>\n<td><code>'click'</code></td>\n<td><code>'click'</code>\n、\n<code>'hover'</code></td>\n</tr>\n<tr>\n<td>dropdownData</td>\n<td>data for dropdown menu</td>\n<td>array</td>\n<td>[]</td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownValue</td>\n<td>custom options value's corresponding key, e.g. \n<code>{ id: 1, name: 'Doc' }</code>\n needs \n<code>optionValue=\"id\"</code></td>\n<td>string</td>\n<td><code>'value'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownText</td>\n<td>custom options display text's corresponding key, e.g. \n<code>{ id: 1, name: 'Doc' }</code>\n needs \n<code>dropdownText=\"name\"</code></td>\n<td>string</td>\n<td><code>'text'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownPosition</td>\n<td>the position of dropodown menu</td>\n<td>string</td>\n<td><code>'auto-bottom-left'</code></td>\n<td>same as position in Pop</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>the click callback for left button</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>the select callback for the right dropdown menu</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class=\"anchor-heading\"><a href=\"#onselect\">¶</a><a href=\"javascript:void(0)\" id=\"onselect\" class=\"anchor-point\"></a>onSelect</h3>\n<p>the param in callback is dropdownValue</p>"}))}}]),a}(f.Component)}}]);