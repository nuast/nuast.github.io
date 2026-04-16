---
layout: default
title: Home
description: NUAST curriculum resources for Key Stage 3, 4 and 5.
---
<main id="main-content">
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">Nottingham University Academy of Science and Technology</p>
        <h1>Curriculum resources for students, staff and families.</h1>
        <p class="lead">Access NUAST curriculum repositories by Key Stage, with clear routes to classroom content and revision materials.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="{{ '/resources/' | relative_url }}">Browse resources</a>
          <a class="btn btn-ghost" href="https://github.com/nuast" target="_blank" rel="noopener noreferrer">View NUAST GitHub</a>
        </div>
      </div>
      <div class="hero-panel" role="img" aria-label="STEM-themed highlight panel for curriculum navigation">
        <p><strong>Key Stages covered:</strong> KS3, KS4, KS5</p>
        <p><strong>Subjects:</strong> Computing, Computer Science, Creative iMedia, Python, NEA</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Curriculum repositories</h2>
      <p class="section-intro">The six core NUAST curriculum areas are listed below.</p>
      <div class="resource-grid">
        {% for resource in site.data.resources %}
          {% include resource-card.html resource=resource %}
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <h2>Browse by Key Stage</h2>
      <div class="stage-grid">
        <article class="stage-card">
          <h3>KS3</h3>
          <p>Introductory computing and digital confidence.</p>
          <a href="{{ '/resources/#ks3' | relative_url }}">View KS3 resources</a>
        </article>
        <article class="stage-card">
          <h3>KS4</h3>
          <p>GCSE Computer Science and Creative iMedia pathways.</p>
          <a href="{{ '/resources/#ks4' | relative_url }}">View KS4 resources</a>
        </article>
        <article class="stage-card">
          <h3>KS5</h3>
          <p>A-Level Computer Science, Python and NEA support.</p>
          <a href="{{ '/resources/#ks5' | relative_url }}">View KS5 resources</a>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Featured resources</h2>
      <p class="section-intro">Highlighted repositories for quick access.</p>
      <div class="resource-grid">
        {% assign featured = site.data.resources | where: 'featured', true %}
        {% for resource in featured %}
          {% include resource-card.html resource=resource %}
        {% endfor %}
      </div>
    </div>
  </section>
</main>
