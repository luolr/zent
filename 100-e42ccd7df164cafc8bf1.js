(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{913:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return j});var s=t(773),e=t.n(s),p=t(33),c=t.n(p),o=t(34),i=t.n(o),l=t(35),u=t.n(l),r=t(36),d=t.n(r),k=t(45),m=t.n(k),h=t(37),g=t.n(h),f=t(38),v=t.n(f),b=t(0),y=t.n(b),w=t(195),_=t(136),z=function(){var n=["http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png","http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png","http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png","http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png"],a=function(a){function t(){var a,s;c()(this,t);for(var e=arguments.length,p=new Array(e),o=0;o<e;o++)p[o]=arguments[o];return s=u()(this,(a=d()(t)).call.apply(a,[this].concat(p))),v()(m()(s),"handlePreview",function(a){Object(_.Ib)({images:n,index:n.indexOf(a.target.src),parentComponent:m()(s),scaleRatio:3})}),s}return g()(t,a),i()(t,[{key:"render",value:function(){var a=this;return y.a.createElement("div",{className:"image-preview-demo"},n.map(function(n,t){return y.a.createElement("img",{src:n,key:t,onClick:a.handlePreview,alt:"",width:"160"})}))}}]),t}(y.a.Component);return y.a.createElement(a,null)};function E(n){return y.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function C(n){return y.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function N(n){return y.a.createElement(E,{tag:"style",html:n.style})}var x=function(n){function a(){var n,t;c()(this,a);for(var s=arguments.length,e=new Array(s),p=0;p<s;p++)e[p]=arguments[p];return t=u()(this,(n=d()(a)).call.apply(n,[this].concat(e))),v()(m()(t),"state",{showCode:!1}),v()(m()(t),"toggle",function(){t.setState({showCode:!t.state.showCode})}),t}return g()(a,n),i()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,t||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(E,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),j=function(n){function a(){return c()(this,a),u()(this,d()(a).apply(this,arguments))}return g()(a,n),i()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(N,{style:""}),y.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#previewimage">¶</a><a href="javascript:void(0)" id="previewimage" class="anchor-point"></a>previewImage</h2>\n<p>This component is used to preview images.</p>\n<h3 class="anchor-heading"><a href="#guide">¶</a><a href="javascript:void(0)" id="guide" class="anchor-point"></a>Guide</h3>\n<ul>\n<li>It\'s used to zoom thumbnail.</li>\n<li>Next image and previous image can be selected.</li>\n<li>Images can be rotated.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.a.createElement(x,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> previewImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> imgArr <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handlePreview</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      images<span class="token punctuation">:</span> imgArr<span class="token punctuation">,</span>\n      index<span class="token punctuation">:</span> imgArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      scaleRatio<span class="token punctuation">:</span> <span class="token number">3</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image-preview-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          imgArr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>image<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlePreview<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>images</td>\n<td>Urls for images</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>index</td>\n<td>Start index</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>showRotateBtn</td>\n<td>Show rotate button</td>\n<td>bool</td>\n<td>true</td>\n<td>true,false</td>\n</tr>\n<tr>\n<td>scaleRatio</td>\n<td>Custom scale Ratio</td>\n<td>number</td>\n<td>1.5</td>\n<td></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Parent component instance，i18n needs this to pass context through</td>\n<td>ReactInstance</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Optional. Custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Optional. Custom prefix.</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(b.Component)}}]);