---
title: Lint Rule js/noUnusedTemplateLiteral
layout: layouts/rule.liquid
description: MISSING DOCUMENTATION
eslint-rule: https://eslint.org/docs/rules/quotes#allowtemplateliterals
eleventyNavigation:
	key: lint-rules/js/noUnusedTemplateLiteral
	parent: lint-rules
	title: js/noUnusedTemplateLiteral
---

# js/noUnusedTemplateLiteral

<!-- GENERATED:START(hash:5031917f7648d3f1d2259d4a9db8a830b8c0f9b5,id:description) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules` to update. -->
MISSING DOCUMENTATION

**ESLint Equivalent:** [quotes#allowtemplateliterals](https://eslint.org/docs/rules/quotes#allowtemplateliterals)
<!-- GENERATED:END(id:description) -->

<!-- GENERATED:START(hash:9cd334dee9a8d2842dc011fd83eab0261090724a,id:examples) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules-docs` to update. -->
## Examples

### Invalid

{% raw %}<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">bar</span><span class="token string">`</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.ts:1:12</span> <strong>lint/js/noUnusedTemplateLiteral</strong> <span style="color: #000; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use template literals if interpolation and special-character</span>
    <span style="color: Tomato;">handling are not needed.</span>

    <span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">bar</span><span class="token string">`</span>
                <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: rgb(38, 148, 255);">ℹ </span></strong><span style="color: rgb(38, 148, 255);">Safe fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;"><strong>`</strong></span><span style="color: Tomato;">bar</span><span style="color: Tomato;"><strong>`</strong></span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>&quot;</strong></span><span style="color: MediumSeaGreen;">bar</span><span style="color: MediumSeaGreen;"><strong>&quot;</strong></span>

</code></pre>{% endraw %}

---

{% raw %}<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">bar </span><span class="token string">`</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.ts:1:12</span> <strong>lint/js/noUnusedTemplateLiteral</strong> <span style="color: #000; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use template literals if interpolation and special-character</span>
    <span style="color: Tomato;">handling are not needed.</span>

    <span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">bar </span><span class="token string">`</span>
                <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: rgb(38, 148, 255);">ℹ </span></strong><span style="color: rgb(38, 148, 255);">Safe fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;"><strong>`</strong></span><span style="color: Tomato;">bar</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span></span><span style="color: Tomato;"><strong>`</strong></span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>&quot;</strong></span><span style="color: MediumSeaGreen;">bar</span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span></span><span style="color: MediumSeaGreen;"><strong>&quot;</strong></span>

</code></pre>{% endraw %}

### Valid

{% raw %}<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">bar</span>
<span class="token string">`</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">&quot;bar&quot;</span><span class="token string">`</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token string">`</span><span class="token string">&apos;bar&apos;</span><span class="token string">`</span></code></pre>{% endraw %}
<!-- GENERATED:END(id:examples) -->
