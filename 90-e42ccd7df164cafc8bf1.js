(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{881:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return A});var t=s(773),p=s.n(t),e=s(33),o=s.n(e),c=s(34),u=s.n(c),l=s(35),i=s.n(l),r=s(36),k=s.n(r),d=s(45),g=s.n(d),m=s(37),h=s.n(m),f=s(38),b=s.n(f),v=s(0),y=s.n(v),z=s(195),C=s(136),S=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),b()(g()(s),"state",{pageSize:10,current:1}),b()(g()(s),"onChange",function(n){console.log(n),s.setState(n)}),s}return h()(a,n),u()(a,[{key:"render",value:function(){var n=this.state,a=n.current,s=n.pageSize;return y.a.createElement("div",null,y.a.createElement(C.db,{current:a,pageSize:s,total:101,onChange:this.onChange}),y.a.createElement("br",null),y.a.createElement(C.V,{current:a,pageSize:s,total:101,onChange:this.onChange}),y.a.createElement("br",null),y.a.createElement(C.Y,{current:a,pageSize:s,total:101,onChange:this.onChange}))}}]),a}(v.Component);return y.a.createElement(n,null)},w=function(){var n=[10,20,30],a=function(a){function s(){var n,a;o()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return a=i()(this,(n=k()(s)).call.apply(n,[this].concat(p))),b()(g()(a),"state",{pageSize:10,current:2}),b()(g()(a),"onChange",function(n){console.log(n),a.setState(n)}),a}return h()(s,a),u()(s,[{key:"render",value:function(){var a=this.state,s=a.current,t=a.pageSize;return y.a.createElement("div",null,y.a.createElement(C.db,{current:s,pageSize:t,pageSizeOptions:n,total:101,onChange:this.onChange}))}}]),s}(v.Component);return y.a.createElement(a,null)},E=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),b()(g()(s),"state",{pageSize:10,current:2}),b()(g()(s),"onChange",function(n){console.log(n),s.setState(n)}),s}return h()(a,n),u()(a,[{key:"render",value:function(){var n=this.state,a=n.current,s=n.pageSize;return y.a.createElement("div",null,y.a.createElement(C.db,{current:a,pageSize:s,total:0,onChange:this.onChange}),y.a.createElement("br",null),y.a.createElement(C.V,{current:a,pageSize:s,total:0,onChange:this.onChange}),y.a.createElement("br",null),y.a.createElement(C.Y,{current:a,pageSize:s,total:0,onChange:this.onChange}))}}]),a}(v.Component);return y.a.createElement(n,null)},N=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),b()(g()(s),"state",{pageSize:10,current:2}),b()(g()(s),"onChange",function(n){console.log(n),s.setState(n)}),s}return h()(a,n),u()(a,[{key:"render",value:function(){var n=this.state,a=n.current,s=n.pageSize;return y.a.createElement("div",null,y.a.createElement(C.db,{current:a,pageSize:s,total:101,formatTotal:function(n){return"一百零一"},onChange:this.onChange}))}}]),a}(v.Component);return y.a.createElement(n,null)};function j(n){return y.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function P(n){return y.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return y.a.createElement(j,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),b()(g()(s),"state",{showCode:!1}),b()(g()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return h()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},p),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),A=function(n){function a(){return o()(this,a),i()(this,k()(a).apply(this,arguments))}return h()(a,n),u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(z.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(T,{style:""}),y.a.createElement(P,{html:'<h2 class="anchor-heading"><a href="#pagination">¶</a><a href="javascript:void(0)" id="pagination" class="anchor-point"></a>Pagination</h2>\n<p>Pagination has 3 different styles.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.a.createElement(_,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> MiniPagination<span class="token punctuation">,</span> LitePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    current<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> options <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> current<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LitePagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniPagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(S)),y.a.createElement(_,{title:"Change page size",id:"Demodynamicpagesize",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> PAGE_SIZE_OPTIONS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    current<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> options <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> current<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSizeOptions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>PAGE_SIZE_OPTIONS<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(w)),y.a.createElement(_,{title:"No data",id:"Demoempty",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> MiniPagination<span class="token punctuation">,</span> LitePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    current<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> options <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> current<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LitePagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniPagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(E)),y.a.createElement(_,{title:"Format total",id:"Demoformat",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    current<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> options <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> current<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n          <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>\n          <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">formatTotal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'一百零一\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(P,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#pagination">¶</a><a href="javascript:void(0)" id="pagination" class="anchor-point"></a>Pagination</h4>\n<p>⚠️ Warning: API is not compatible with old versions.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Callback when pageSize or current changes</td>\n<td><code>({pageSize: number, current: number}) => any</code></td>\n<td></td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>current</td>\n<td>Current page number</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>total</td>\n<td>Total number of items</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>formatTotal</td>\n<td>Format total for display</td>\n<td><code>(total: number) => React.ReactNode</code></td>\n<td><code>identity</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>pageSize</td>\n<td>Number of items per page</td>\n<td><code>number</code></td>\n<td><code>10</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>pageSizeOptions</td>\n<td>Page size options</td>\n<td><code>Array&#x3C;number></code>\n \n|\n \n<code>Array&#x3C;{text: node, value: number}></code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showQuickJumper</td>\n<td>Allow quick jump to page</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showSizeChanger</td>\n<td>Allow change page size</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>buttonBordered</td>\n<td>Button has border</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#litepagination">¶</a><a href="javascript:void(0)" id="litepagination" class="anchor-point"></a>LitePagination</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Callback when pageSize or current changes</td>\n<td><code>({pageSize: number, current: number}) => any</code></td>\n<td></td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>current</td>\n<td>Current page number</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>total</td>\n<td>Total number of items</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>pageSize</td>\n<td>Number of items per page</td>\n<td><code>number</code></td>\n<td><code>10</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>pageSizeOptions</td>\n<td>Page size options</td>\n<td><code>Array&#x3C;number></code>\n \n|\n \n<code>Array&#x3C;{text: node, value: number}></code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showQuickJumper</td>\n<td>Allow quick jump to page</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showSizeChanger</td>\n<td>Allow change page size</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>buttonBordered</td>\n<td>Button has border</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#minipagination">¶</a><a href="javascript:void(0)" id="minipagination" class="anchor-point"></a>MiniPagination</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>Callback when pageSize or current changes</td>\n<td><code>({pageSize: number, current: number}) => any</code></td>\n<td></td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>current</td>\n<td>Current page number</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>total</td>\n<td>Total number of items</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>pageSize</td>\n<td>Number of items per page</td>\n<td><code>number</code></td>\n<td><code>10</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>buttonBordered</td>\n<td>Button has border</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component)}}]);