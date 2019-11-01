(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{927:function(n,s,a){"use strict";a.r(s),a.d(s,"default",function(){return E});var t=a(33),e=a.n(t),o=a(34),p=a.n(o),c=a(35),l=a.n(c),i=a(36),u=a.n(i),r=a(45),d=a.n(r),k=a(37),m=a.n(k),h=a(38),g=a.n(h),f=a(773),v=a.n(f),b=a(0),y=a.n(b),w=a(195);function C(n){return y.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return y.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return y.a.createElement(C,{tag:"style",html:n.style})}b.Component;var E=function(n){function s(){return e()(this,s),l()(this,u()(s).apply(this,arguments))}return m()(s,n),p()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(w.a)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(j,{style:""}),y.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#design">¶</a><a href="javascript:void(0)" id="design" class="anchor-point"></a>Design</h2>\n<p>Please use <code>@zent/design</code></p>\n<p>H5 page editor, build your H5 pages in a WYSIWYG way.</p>\n<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>components</td>\n<td>All available components in Design</td>\n<td>array</td>\n<td>[]</td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Current value</td>\n<td>array</td>\n<td>[]</td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>Callback when value changes</td>\n<td>func(value: array): void</td>\n<td>Yes</td>\n<td></td>\n</tr>\n<tr>\n<td>settings</td>\n<td>Design settings, will be passed to every Design component</td>\n<td>object</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onSettingsChange</td>\n<td>Callback to change settings</td>\n<td>func</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>defaultSelectedIndex</td>\n<td>Default selected index in value array</td>\n<td>number</td>\n<td>-1</td>\n<td>No</td>\n</tr>\n<tr>\n<td>preview</td>\n<td>Custom Preview component</td>\n<td>Component</td>\n<td>DesingPreview</td>\n<td>No</td>\n</tr>\n<tr>\n<td>previewFooter</td>\n<td>Custom footer after preview section</td>\n<td>node</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>confirmUnsavedLeave</td>\n<td>Show a confirm dialog if there\'re unsaved changes</td>\n<td>boolean</td>\n<td>true</td>\n<td>No</td>\n</tr>\n<tr>\n<td>cache</td>\n<td>Cache unsaved changes to \n<code>localStorage</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>No</td>\n</tr>\n<tr>\n<td>cacheId</td>\n<td>Cache id, must be used with \n<code>cache</code></td>\n<td>string</td>\n<td></td>\n<td>Yes if \n<code>cache</code>\n is \n<code>true</code>\n, No otherwise</td>\n</tr>\n<tr>\n<td>cacheRestoreMessage</td>\n<td>Message to restore cache from \n<code>localStorage</code></td>\n<td>node</td>\n<td>提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？</td>\n<td>No</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Is Design disabled</td>\n<td>boolean</td>\n<td>false</td>\n<td>No</td>\n</tr>\n<tr>\n<td>globalConfig</td>\n<td>Global config across Design</td>\n<td>object</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>children</td>\n<td>Additional children inside Design</td>\n<td>node</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>scrollTopOffset</td>\n<td>Top scroll offset</td>\n<td>number \n|\n func</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>scrollLeftOffset</td>\n<td>Left scroll offset</td>\n<td>number \n|\n func</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td>string</td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>Custom prefix</td>\n<td>string</td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>\n<p><code>components</code> is an array, all available componets should be included in this array. Each item in this array is a component description, here are the possible options.</p>\n<pre><code class="language-js">type Component <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Component type, must be unique</span>\n  type<span class="token punctuation">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Default component type</span>\n  <span class="token comment">// If `type` is an array, `defaultType` can be a number</span>\n  <span class="token comment">// If `defaultType` is a function, it will be called with `type` as the sole argument</span>\n  defaultType<span class="token operator">?</span><span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> string\n\n  <span class="token comment">// Component to render preview</span>\n  preview<span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// Component responsible for editing</span>\n  editor<span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// Preview component container</span>\n  previewItem<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// Preview controller, responsible for dnd, select and so on</span>\n  previewController<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// Editor component container</span>\n  editorItem<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// Is this component dragable?</span>\n  dragable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Should this component appear in the component list?</span>\n  appendable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Is this component configurable(add/delete on the bottom right corner)?</span>\n  configurable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// show delete button</span>\n  canDelete<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// show add button</span>\n  canInsert<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Is this component editable? Only editable components are selectable</span>\n  editable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Highlight preview when selected</span>\n  highlightWhenSelect<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Maximum number of instances this component can have</span>\n  <span class="token comment">// Zero is no limit</span>\n  <span class="token comment">// If passing a function, return false to stop adding more</span>\n  limit<span class="token operator">?</span><span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token punctuation">(</span>count<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// Tooltip when a component reaches its limit</span>\n  <span class="token comment">// If limit is a number, limitMessage has a default value.</span>\n  limitMessage<span class="token operator">?</span><span class="token punctuation">:</span> node <span class="token operator">|</span> <span class="token punctuation">(</span>count<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> node<span class="token punctuation">,</span>\n\n  <span class="token comment">// Callback when adding a new instance for component</span>\n  <span class="token comment">// Add only if Promise resolves.</span>\n  shouldCreate<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>comp<span class="token punctuation">:</span> Component<span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">,</span>\n\n  <span class="token comment">// Additional props passed to editor</span>\n  editorProps<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> object<span class="token punctuation">)</span> <span class="token operator">=></span> object <span class="token operator">|</span> object<span class="token punctuation">,</span>\n\n  <span class="token comment">// Addtional props passed to preview</span>\n  previewProps<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> object<span class="token punctuation">)</span> <span class="token operator">=></span> object <span class="token operator">|</span> object\n<span class="token punctuation">}</span></code></pre>\n<p>Each item in <code>value</code> array must have a <code>type</code> property, <code>Design</code> uses this property to determine why component in <code>component</code> array should be used to render this value.</p>\n<h3 class="anchor-heading"><a href="#design-group">¶</a><a href="javascript:void(0)" id="design-group" class="anchor-point"></a>Design.group</h3>\n<p>Declaration：<code>group(name: string): object</code></p>\n<p><code>Design</code> supports component grouping in add component area, all you have to do is insert <code>Desgin.group(groupName)</code> to the right place in your <code>components</code> array.</p>\n<pre><code class="language-js"><span class="token punctuation">[</span>\n  config<span class="token punctuation">,</span>\n\n  Design<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">\'分组1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  componentA<span class="token punctuation">,</span>\n  componentB<span class="token punctuation">,</span>\n\n  Design<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">\'分组2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  componentC<span class="token punctuation">,</span>\n  componentD\n<span class="token punctuation">]</span></code></pre>\n<h3 class="anchor-heading"><a href="#settings-and-onsettingschange">¶</a><a href="javascript:void(0)" id="settings-and-onsettingschange" class="anchor-point"></a><code>settings</code> and <code>onSettingsChange</code></h3>\n<p>You can pass in a <code>settings</code> object and a corresponding <code>onSettingsChange</code> callback. This two props will be pass to every Design component.</p>\n<p>There\'s a predefined setting called <code>previewBackground</code>, Design will use this value as the preview background.</p>\n<h3 class="anchor-heading"><a href="#design-instance-methods">¶</a><a href="javascript:void(0)" id="design-instance-methods" class="anchor-point"></a>Design Instance Methods</h3>\n<ul>\n<li><code>design.validate(): Promise</code>, trigger a validation, resolves only if there\'s no erro.</li>\n<li><code>design.markAsSaved()</code>, tell <code>Desgin</code> data has been saved.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#stripuuid">¶</a><a href="javascript:void(0)" id="stripuuid" class="anchor-point"></a>stripUUID</h3>\n<p>There\'s a <code>stripUUID</code> method on <code>Design</code> instance, you can use this method to strip all internal ids used by <code>Design</code> before sending data to server. This may help reduce data size.</p>\n<p>Note: calling <code>stripUUID</code> before sending data to server is optional.</p>\n<h3 class="anchor-heading"><a href="#how-to-implement-new-design-co">¶</a><a href="javascript:void(0)" id="how-to-implement-new-design-co" class="anchor-point"></a>How to Implement new Design Component?</h3>\n<p>Each Desgin component are divided in two parts: Preview and Editor.</p>\n<p>Preview is just a component which accepts <code>{ value: any, globalConfig: any, design: object }</code> as props and renders a UI with these props.</p>\n<p>It is a little bit complex about Editor component. You are recommended to extend the <code>@youzan/design/lib/base/editor/DesignEditor</code> base class, this class has some useful methods you can use(e.g. <code>onChange</code> event handlers).</p>\n<p>Editor has these props:</p>\n<p><code>{ value: any, onChange: func, showError: boolean, validation: object, design object }</code></p>\n<ul>\n<li><code>validate(value): Promise</code> You should resolve an error object if there\'re errors</li>\n<li><code>reorder&#x3C;T>(array: T[], fromIndex: number, toIndex: number): T[]</code> Reorder array after drag</li>\n<li><code>props.design</code> There\'re some useful methods on this prop</li>\n</ul>\n<p>A editor component must have these static properties: </p>\n<p><code>designType, designDescription, getInitialValue, validate</code></p>\n<p>You can use <a href="https://github.com/atlassian/react-beautiful-dnd"><code>react-beautiful-dnd</code></a> to implement drag-and-drop inside an editor, implement these two functions in your editor: <code>shouldHandleDragEnd(type: string): boolean</code> and <code>onDragEnd(result)</code>. Check <code>react-beautiful-dnd</code>\'s documentation for detailed instructions. There\'s also a demo in <code>components/image-ad</code>.</p>\n<h4 class="anchor-heading"><a href="#example">¶</a><a href="javascript:void(0)" id="example" class="anchor-point"></a>Example</h4>\n<pre><code class="language-jsx"><span class="token comment">// Preview</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NoticePreview</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rc-design-component-notice-preview<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Editor</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DesignEditor<span class="token punctuation">,</span> ControlGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@youzan/design/base/editor/DesignEditor\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> PLACEHOLDER <span class="token operator">=</span> <span class="token string">\'请填写内容，如果过长，将会在手机上滚动显示\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NoticeEditor</span> <span class="token keyword">extends</span> <span class="token class-name">DesignEditor</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> showError<span class="token punctuation">,</span> validation <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rc-design-component-notice-editor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>ControlGroup</span>\n          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>公告:<span class="token punctuation">"</span></span>\n          <span class="token attr-name">required</span>\n          <span class="token attr-name">showError</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showError <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMetaProperty</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">,</span> <span class="token string">\'touched\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">error</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>validation<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Input</span>\n            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>PLACEHOLDER<span class="token punctuation">}</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onInputChange<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onInputBlur<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>ControlGroup</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> designType <span class="token operator">=</span> <span class="token string">\'notice\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> designDescription <span class="token operator">=</span> <span class="token string">\'公告\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token function">getInitialValue</span><span class="token punctuation">(</span>settings<span class="token punctuation">,</span> globalConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      scrollable<span class="token punctuation">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> content <span class="token punctuation">}</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>content <span class="token operator">||</span> <span class="token operator">!</span>content<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        errors<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token string">\'请填写公告内容\'</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">resolve</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}))}}]),s}(b.Component)}}]);