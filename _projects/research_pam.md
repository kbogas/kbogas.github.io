---
layout: page
title: Prime Adjacency Matrices & Bag of Paths
description: Compact multi-relational graph representations and path features for node, edge, and graph prediction.
permalink: /projects/pam-bop/
importance: 1
category: Research
status: Published research
img: /assets/img/projects/bag-of-paths-overview.png
img_alt: Bag of Paths pipeline from a multi-relational graph through multi-hop matrices to node, edge, and graph features.
---

**Data & Knowledge Engineering, 2026 · Konstantinos Bougiatiotis and Georgios Paliouras**

A multi-relational graph can contain many kinds of edges. Prime Adjacency Matrices (PAMs) encode relation types using prime numbers. Bag of Paths (BoP) turns paths through the graph into features for prediction tasks.

The journal paper introduces a lossless multi-hop computation and evaluates the representation on node classification, relation prediction, and graph regression. This connects an efficient graph representation to models that can be trained and inspected using familiar machine-learning tools.

<figure class="project-figure">
  <a href="{{ '/assets/img/projects/bag-of-paths-overview.png' | relative_url }}"><img src="{{ '/assets/img/projects/bag-of-paths-overview.png' | relative_url }}" alt="An input graph is encoded as multi-hop Prime Adjacency Matrices, then aggregated into Bag of Paths features for nodes, edges, and whole graphs." loading="lazy" width="1438" height="842"></a>
  <figcaption>Figure 4 from <a href="https://arxiv.org/abs/2411.11149">Bougiatiotis &amp; Paliouras, From Primes to Paths (preprint)</a>, CC BY 4.0. Cropped from the paper; the diagram is unchanged. Select the image for a larger view.</figcaption>
</figure>

## One representation, three scales

The same path vocabulary can describe a node through its incoming and outgoing paths, a pair of nodes through connecting paths, or an entire graph through its path distribution. These features retain a connection to the relations in the original graph, which makes it possible to inspect the paths behind a prediction.

## Biomedical application: drug–drug interactions

Our [2026 benchmark in Artificial Intelligence in Medicine](https://doi.org/10.1016/j.artmed.2026.103542) applies Bag of Paths in a comparison of deep-learning and path-analysis approaches to multi-class link prediction on a disease-specific literature knowledge graph.

The study evaluates different drug–drug interaction types against an external DrugBank dataset. Graph embeddings perform best overall in the reported comparison, while path-based analysis supports interpretation through the most important path features. This illustrates how BoP can contribute both predictive features and a way to examine the evidence behind them.

## Read and reproduce

- [Journal paper — Data & Knowledge Engineering](https://doi.org/10.1016/j.datak.2026.102554)
- [Open preprint](https://arxiv.org/abs/2411.11149)
- [Bag of Paths code and experiments](https://github.com/kbogas/PAM_BoP)
- [Original PAM implementation](https://github.com/kbogas/PAM)
- [Installable Python package — prime_adj](https://pypi.org/project/prime-adj/)

The BoP repository contains experiments for three prediction tasks and describes a HetioNet example for exploring similar entity pairs.
