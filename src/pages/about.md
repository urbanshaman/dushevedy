---
title: About Title # will be overwritten by SEO.title below
date: 2020-08-05
layout: layouts/page.njk
eleventyNavigation:
  key: main
  title: Прочее # as it will appear in the nav
  order: 3 # order to display in the nav
seo:
  title: Прочее # overrides 'title' above on both Page and META
  description:
  image:
---

{% wrap "bg-red-100 mt-4 border border-red-300 rounded-lg underline" %}

Прочее

{% endwrap %}

Тут пока ничего...
