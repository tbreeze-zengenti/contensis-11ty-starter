---
eleventyComputed:
  title: '{{ blog.title }}'
layout: main.liquid
pagination:
  data: blogs
  size: 1
  alias: blog
permalink: '/blogs/{{ blog.slug }}'
---

<article class="blog-post">

<img src="{% image blog.image.src %}" alt="{{ blog.image.alt }}" />

# {{ blog.title }}

{{ blog.description }}

</article>

