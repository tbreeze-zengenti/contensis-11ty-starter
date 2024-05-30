---
title: Leif
layout: main.liquid
pagination:
  data: blogs
  size: 10
  alias: blogs
---

# {{ title }}

## {{ rootNode.displayName }}

<ul class="blog-list">
{%- for blog in blogs -%}
  <li class="blog-list__item"><a href="/blogs/{{ blog.slug }}">{{ blog.title }}</a></li>
{%- endfor -%}
</ul>

