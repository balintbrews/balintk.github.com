---
layout: page
title: Blog | Bálint Kléri
header: Blog | Bálint Kléri
group: navigation
---

## Posts by date

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


## Posts by tags

{% include JB/setup %}

{% for tag in site.tags %}
  <h3 id="{{ tag[0] }}-ref">{{ tag[0] }}</h3>
  <ul>
    {% assign pages_list = tag[1] %}
    {% include JB/pages_list %}
  </ul>
{% endfor %}
