(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{836:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return j});var t=s(45),p=s.n(t),o=s(38),e=s.n(o),c=s(773),u=s.n(c),l=s(33),i=s.n(l),k=s(34),r=s.n(k),d=s(35),m=s.n(d),g=s(36),h=s.n(g),f=s(37),y=s.n(f),v=s(0),w=s.n(v),b=s(195),z=s(136),E=function(){var n=[{id:205772,name:"test1"},{id:205773,name:"test2"},{id:205774,name:"test3"}],a=function(a){function s(n){var a;return i()(this,s),(a=m()(this,h()(s).call(this,n))).state={imageList:[]},a}return y()(s,a),r()(s,[{key:"renderTrigger",value:function(){return w.a.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({imageList:[{file:null,src:n}]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){a.setState({imageList:n}),setTimeout(function(){s(n)},1e3)})}},{key:"render",value:function(){return w.a.createElement("div",null,this.state.imageList.map(function(n,a){return w.a.createElement("img",{className:"zent-upload-demo-pic",width:"80",height:"80",key:a,src:n.src,style:{marginRight:"10px"}})}),w.a.createElement(z.Db,{className:"zent-upload-demo-pic",maxSize:1048576,maxAmount:2,triggerInline:!0,tips:"建议尺寸：640 x 640 像素",categoryList:n,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),errorMessages:{overMaxSize:function(n){return"Over size: ".concat(n.maxSize)},overMaxAmount:"So many",wrongMimeType:function(){return!1}}}))}}]),s}(w.a.Component);return w.a.createElement(a,null)},x=function(){var n=function(n){function a(n){var s;return i()(this,a),(s=m()(this,h()(a).call(this,n))).state={voiceList:[]},s}return y()(a,n),r()(a,[{key:"renderTrigger",value:function(){return w.a.createElement("span",null)}},{key:"fetchNetworkImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:[n]}),s(n)})}},{key:"updateLocalImage",value:function(n){var a=this;return new Promise(function(s){a.setState({voiceList:n}),s(n)})}},{key:"render",value:function(){return w.a.createElement("div",null,this.state.voiceList.map(function(n,a){return w.a.createElement("div",{key:a,style:{fontSize:12,lineHeight:1.5,marginTop:10}},w.a.createElement("p",null,"文件名称：",n.file.name),w.a.createElement("p",null,"文件大小：",(n.file.size/1024).toFixed(1)," KB"))}),w.a.createElement(z.Db,{maxSize:8e6,triggerInline:!0,tips:"",type:"voice",accept:"audio/mp3, audio/mpeg",maxAmount:1,onFetch:this.fetchNetworkImage.bind(this),onUpload:this.updateLocalImage.bind(this),triggerClassName:"",trigger:function(){return w.a.createElement("a",{href:"javascript:;"},"上传语音")}}))}}]),a}(w.a.Component);return w.a.createElement(n,null)};function L(n){return w.a.createElement(n.tag,u()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return w.a.createElement(L,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function N(n){return w.a.createElement(L,{tag:"style",html:n.style})}var I=function(n){function a(){var n,s;i()(this,a);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return s=m()(this,(n=h()(a)).call.apply(n,[this].concat(o))),e()(p()(s),"state",{showCode:!1}),e()(p()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return y()(a,n),r()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(L,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),j=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return y()(a,n),r()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(N,{style:"/* 上传图片组件垂直居中对齐(避免计算行高) */\n\t.zent-upload-demo-pic {\n\t\tvertical-align: middle;\n\t}"}),w.a.createElement(S,{html:'<h1 class="anchor-heading"><a href="#upload-wen-jian-shang-chuan">¶</a><a href="javascript:void(0)" id="upload-wen-jian-shang-chuan" class="anchor-point"></a>Upload 文件上传</h1>\n<p>文件上传，支持图片和音频。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(I,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205772</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205773</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">205774</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">\'test3\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          imageList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          imageList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n            file<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n            src<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            imageList<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>imageList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>img className<span class="token operator">=</span><span class="token string">\'zent-upload-demo-pic\'</span> width<span class="token operator">=</span><span class="token string">"80"</span> height<span class="token operator">=</span><span class="token string">"80"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>src<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginRight<span class="token punctuation">:</span> <span class="token string">\'10px\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span>Upload\n            className<span class="token operator">=</span><span class="token string">\'zent-upload-demo-pic\'</span>\n            maxSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">}</span>\n            maxAmount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>\n            triggerInline\n            tips<span class="token operator">=</span><span class="token string">"建议尺寸：640 x 640 像素"</span>\n            categoryList<span class="token operator">=</span><span class="token punctuation">{</span>categoryList<span class="token punctuation">}</span>\n            onFetch<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchNetworkImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            onUpload<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>updateLocalImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            errorMessages<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              overMaxSize<span class="token punctuation">:</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Over size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>maxSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// function</span>\n              overMaxAmount<span class="token punctuation">:</span> <span class="token string">\'So many\'</span><span class="token punctuation">,</span> <span class="token comment">// string</span>\n              wrongMimeType<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">\'\'</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// show nothing</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(E)),w.a.createElement(I,{title:"上传语音",id:"Demovoice",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n          voiceList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">renderTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">fetchNetworkImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          voiceList<span class="token punctuation">:</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateLocalImage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            voiceList<span class="token punctuation">:</span> data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>voiceList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> lineHeight<span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>文件名称：<span class="token punctuation">{</span>item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>文件大小：<span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>size <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span> KB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>\n            <span class="token attr-name">maxSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerInline</span>\n            <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>voice<span class="token punctuation">"</span></span>\n            <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/mp3, audio/mpeg<span class="token punctuation">"</span></span>\n            <span class="token attr-name">maxAmount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFetch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>fetchNetworkImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onUpload</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>updateLocalImage<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">triggerClassName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n            <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上传语音<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(x)),w.a.createElement(S,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>上传类型，默认为image，语音上传为voice</td>\n<td>string</td>\n<td><code>'image'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>localOnly</td>\n<td>是否只支持本地图片</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>tips</td>\n<td>提示文案</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>maxSize</td>\n<td>图片大小限制，单位为 byte</td>\n<td>number</td>\n<td><code>1024 * 1024</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>maxAmount</td>\n<td>图片数量限制，0为不限制，1为只支持单文件</td>\n<td>number</td>\n<td><code>0</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>支持文件类型</td>\n<td>string</td>\n<td><code>'image/gif, image/jpeg, image/png, image/bmp'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>silent</td>\n<td>Deprecated, 是否开启静默模式，不会提示成功/失败</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>triggerInline</td>\n<td>是否行内属性</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onFetch</td>\n<td>提取网络图片</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onUpload</td>\n<td>上传本地图片</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>filterFiles</td>\n<td>过滤文件，支持同步和promise的方式</td>\n<td>function</td>\n<td><code>noop</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>categoryList</td>\n<td>分组数据</td>\n<td>array</td>\n<td>[]</td>\n<td>否</td>\n</tr>\n<tr>\n<td>categoryId</td>\n<td>分组id</td>\n<td>number</td>\n<td>[]</td>\n<td>否</td>\n</tr>\n<tr>\n<td>auto</td>\n<td>是否自动弹出</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>withoutPopup</td>\n<td>是否不渲染在弹层上</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>triggerClassName</td>\n<td>重写trigger样式</td>\n<td>string</td>\n<td><code>'zent-upload-trigger'</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>errorMessages</td>\n<td>自定义错误提示文案，包含 overMaxSize、overMaxAmount、wrongMimeType 这几种类型</td>\n<td>object</td>\n<td><code>{}</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>className</td>\n<td>扩展类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>前缀命名空间</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(v.Component)}}]);