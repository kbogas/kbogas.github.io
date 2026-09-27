---
layout: page
title: FastRank
description: Estimating tensor rank from spectral energy, without repeatedly computing tensor decompositions.
permalink: /projects/fastrank/
importance: 0
category: Research
---

**AISTATS 2026 · Konstantinos Bougiatiotis and Georgios Paliouras**

Choosing a tensor's rank is a practical bottleneck: trying many candidate ranks can mean running many expensive decompositions. FastRank estimates the rank from a matrix derived from the tensor, using its spectral energy.

The paper evaluates the method on synthetic and real data, including noisy tensors and knowledge graph completion. It reports speedups exceeding 1,000× in the evaluated settings; the paper provides the corresponding baselines and accuracy comparisons.

## Read and reproduce

- [Paper and citation — PMLR](https://proceedings.mlr.press/v300/bougiatiotis26a.html)
- [Code and reproduction instructions — GitHub](https://github.com/kbogas/FastRank)

The proceedings version appears in PMLR volume 300, pages 1873–1881. Start with the repository README for the implementation and experiments.
