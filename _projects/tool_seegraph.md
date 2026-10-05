---
layout: page
title: SeeGraph
description: A small Streamlit tool for exploring selected nodes, relations, and neighbourhoods in a knowledge graph.
permalink: /projects/seegraph/
importance: 1
category: Experiments & tools
status: Work in progress
img: /assets/img/projects/seegraph-interface.png
img_alt: SeeGraph interface with node and relation filters beside a coloured toy knowledge graph.
---

**Graph exploration tool · Python / Streamlit · Work in progress**

A large graph can be difficult to inspect all at once. SeeGraph focuses on a selected part of a local graph, making it easier to explore the relationships around particular nodes.

<figure class="project-figure">
  <a href="{{ '/assets/img/projects/seegraph-interface.png' | relative_url }}"><img src="{{ '/assets/img/projects/seegraph-interface.png' | relative_url }}" alt="SeeGraph showing a toy graph alongside node, relation, directionality, and hop-count controls." loading="lazy" width="1600" height="827"></a>
  <figcaption>Interface screenshot from the <a href="https://github.com/kbogas/seegraph">SeeGraph repository</a>. Select the image for a larger view.</figcaption>
</figure>

## Explore a neighbourhood

The interface provides controls for selecting a dataset, choosing nodes and relation types, considering edge direction, and adjusting the number of hops. The resulting subgraph keeps the selected relationships visible without drawing the entire graph.

## Run locally

Follow the [repository setup instructions](https://github.com/kbogas/seegraph), install its requirements, and launch the app with `streamlit run app_to_show.py`.

This is an experimental utility with limited functionality and possible bugs. The repository is the place to check the current implementation and report issues.
