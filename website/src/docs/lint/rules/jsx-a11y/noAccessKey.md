---
title: Lint Rule jsx-a11y/noAccessKey
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation: {
	key: lint-rules/jsx-a11y/noAccessKey,
	parent: lint-rules,
	title: jsx-a11y/noAccessKey
}
---

# jsx-a11y/noAccessKey

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS -->


## Examples
### Invalid
<pre class="language-text"><code class="language-text"><<span class="token variable">input</span> <span class="token attr-name">accessKey</span><span class="token operator">=</span><span class="token string">&apos;key /&gt;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:24</span> <strong>parse/js</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Unterminated string constant</span>

    &lt;<span class="token variable">input</span> <span class="token attr-name">accessKey</span><span class="token operator">=</span><span class="token string">&apos;key /&gt;</span>
                            <span style="color: Tomato;"><strong>^</strong></span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><<span class="token variable">input</span> <span class="token attr-name">accessKey</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">key</span><span class="token punctuation">}</span> <span class="token operator">/</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:7</span> <strong>lint/jsx-a11y/noAccessKey</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Avoid the </span><span style="color: Tomato;"><strong>accessKey</strong></span><span style="color: Tomato;"> attribute to reduce inconsistencies between</span>
    <span style="color: Tomato;">keyboard shortcuts and screen reader keyboard comments.</span>

    &lt;<span class="token variable">input</span> <span class="token attr-name">accessKey</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">key</span><span class="token punctuation">}</span> <span class="token operator">/</span>&gt;
           <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Assigning keyboard shortcuts using the accessKey attribute leads to</span>
    <span style="color: DodgerBlue;">inconsistent keyboard actions across applications.</span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Recommended fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;">&lt;input </span><span style="color: Tomato;"><strong>accessKey={key} </strong></span><span style="color: Tomato;">/&gt;</span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;">&lt;input /&gt;</span>

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><<span class="token variable">input</span> <span class="token operator">/</span>></code></pre>
<pre class="language-text"><code class="language-text"><<span class="token variable">input</span> <span class="token attr-name">accessKey</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token variable">undefined</span><span class="token punctuation">}</span> <span class="token operator">/</span>></code></pre>