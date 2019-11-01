(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{792:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var s=t(33),e=t.n(s),o=t(34),p=t.n(o),c=t(35),r=t.n(c),i=t(36),u=t.n(i),l=t(45),d=t.n(l),k=t(37),h=t.n(k),m=t(38),f=t.n(m),g=t(773),v=t.n(g),y=t(0),w=t.n(y),j=t(195);function C(n){return w.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function E(n){return w.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function S(n){return w.a.createElement(C,{tag:"style",html:n.style})}y.Component;var b=function(n){function a(){return e()(this,a),r()(this,u()(a).apply(this,arguments))}return h()(a,n),p()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(j.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(S,{style:""}),w.a.createElement(E,{html:'<h2 class="anchor-heading"><a href="#guo-ji-hua">¶</a><a href="javascript:void(0)" id="guo-ji-hua" class="anchor-point"></a>国际化</h2>\n<p>目前 Zent 的默认语言为中文，同时提供英文支持。如需要在国际化场景下使用 Zent 组件，可以参考下面的方法。</p>\n<h4 class="anchor-heading"><a href="#i18nprovider">¶</a><a href="javascript:void(0)" id="i18nprovider" class="anchor-point"></a>I18nProvider</h4>\n<p>Zent 提供一个 Provider 组件用于配置组件内部文案的语言。组件利用 context 实现对组件内部文案的配置，需要在应用最外层包裹使用。</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> I18nProvider <span class="token keyword">as</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'zent/lib/i18n/en-US\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>App</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>Provider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n<p>目前仅有中文/英文两种语言包，分别对应 i18n 文件夹下 <code>en-US.js</code>/<code>zh-CN.js</code>两个文件。</p>'}))}}]),a}(y.Component)}}]);