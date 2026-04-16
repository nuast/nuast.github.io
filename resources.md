---
layout: page
title: Resources
lead: Browse all curriculum repositories by Key Stage.
---
<section id="ks3" class="resource-group">
  <h2>Key Stage 3</h2>
  <div class="resource-grid">
    {% assign ks3 = site.data.resources | where: 'stage', 'KS3' %}
    {% for resource in ks3 %}
      {% include resource-card.html resource=resource %}
    {% endfor %}
  </div>
</section>

<section id="ks4" class="resource-group">
  <h2>Key Stage 4</h2>
  <div class="resource-grid">
    {% assign ks4 = site.data.resources | where: 'stage', 'KS4' %}
    {% for resource in ks4 %}
      {% include resource-card.html resource=resource %}
    {% endfor %}
  </div>
</section>

<section id="ks5" class="resource-group">
  <h2>Key Stage 5</h2>
  <div class="resource-grid">
    {% assign ks5 = site.data.resources | where: 'stage', 'KS5' %}
    {% for resource in ks5 %}
      {% include resource-card.html resource=resource %}
    {% endfor %}
  </div>
</section>
