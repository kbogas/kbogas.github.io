---
layout: page
title: FastRank
description: Estimating tensor rank from spectral energy, without repeatedly computing tensor decompositions.
permalink: /projects/fastrank/
importance: 0
category: Research
status: Published research
img: /assets/img/projects/fastrank-spectral-energy.png
img_alt: Four spectral-energy curves showing true tensor ranks and FastRank estimates.
---

**AISTATS 2026 · Konstantinos Bougiatiotis and Georgios Paliouras**

Choosing a tensor's rank is a practical bottleneck: trying many candidate ranks can mean running many expensive decompositions. FastRank estimates the rank from a matrix derived from the tensor, using its spectral energy.

The paper evaluates the method on synthetic and real data, including noisy tensors and knowledge graph completion. It reports speedups exceeding 1,000× in the evaluated settings; the paper provides the corresponding baselines and accuracy comparisons.

<figure class="project-figure">
  <a href="{{ '/assets/img/projects/fastrank-spectral-energy.png' | relative_url }}"><img src="{{ '/assets/img/projects/fastrank-spectral-energy.png' | relative_url }}" alt="Cumulative spectral energy on Amino, Dorrit, Sugar, and Tongue datasets, comparing true ranks with FastRank estimates." loading="lazy" width="842" height="700"></a>
  <figcaption>Figure 2 from <a href="https://proceedings.mlr.press/v300/bougiatiotis26a.html">Bougiatiotis &amp; Paliouras, FastRank, AISTATS 2026</a>. Cropped from the paper; all four plots are retained. Select the image for a larger view.</figcaption>
</figure>

## From a tensor to a rank estimate

FastRank sum-reduces the tensor along its smallest dimension, then analyses the resulting matrix with singular value decomposition. Its rank estimate comes from the cumulative spectral energy, avoiding repeated tensor decompositions for candidate ranks.

The plots show how the estimates relate to the point where spectral energy levels off on four datasets with known ranks. The implementation includes experiments on synthetic tensors, noisy data, known-rank datasets, and the CoDeX-s knowledge graph.

## Read and reproduce

- [Paper and citation — PMLR](https://proceedings.mlr.press/v300/bougiatiotis26a.html)
- [Code and reproduction instructions — GitHub](https://github.com/kbogas/FastRank)

The proceedings version appears in PMLR volume 300, pages 1873–1881. Start with the repository README for the implementation and experiments.
