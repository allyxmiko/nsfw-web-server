import{_ as t,c as a,o as n,a as s}from"./app-Bz0wMhSL.js";const e={},d=s(`<h4 id="接口说明" tabindex="-1"><a class="header-anchor" href="#接口说明"><span>接口说明:</span></a></h4><p>接口地址: <code>/nsfw</code> <br> 请求方法: <code>POST</code><br> Content-Type: <code>form-data</code><br></p><h4 id="参数列表" tabindex="-1"><a class="header-anchor" href="#参数列表"><span>参数列表:</span></a></h4><table><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>是否必须</th><th>描述</th></tr></thead><tbody><tr><td>images</td><td>[]file</td><td>无</td><td>是</td><td>图片数组</td></tr><tr><td>precent</td><td>boolean</td><td>false</td><td>否</td><td>是否以百分比形式返回</td></tr><tr><td>precision</td><td>int</td><td>0</td><td>否</td><td>精度，0：则原精度返回，2：保留2位小数</td></tr></tbody></table><h4 id="返回值说明" tabindex="-1"><a class="header-anchor" href="#返回值说明"><span>返回值说明</span></a></h4><table><thead><tr><th>字段名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>code</td><td>int</td><td>状态码，0表示正常请求</td></tr><tr><td>msg</td><td>string</td><td>状态信息</td></tr><tr><td>data</td><td>[]object</td><td>数据</td></tr><tr><td>data.name</td><td>string</td><td>文件名</td></tr><tr><td>data.nsfw</td><td>float</td><td>nsfw值，precent为false时，越接近1，则越NSFW。precent为true时，越接近100，则越NSFW。</td></tr></tbody></table><h4 id="返回值示例" tabindex="-1"><a class="header-anchor" href="#返回值示例"><span>返回值示例:</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;请求成功！&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;6a63f6246b600c33fa4a27481a4c510fd9f9a17b.jpg&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;nsfw&quot;</span><span class="token operator">:</span><span class="token number">7.69622565712779</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[d];function o(r,l){return n(),a("div",null,p)}const i=t(e,[["render",o],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"index.md"}');export{i as comp,u as data};
