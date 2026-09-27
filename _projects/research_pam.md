---
layout: page
title: Prime Adjacency Matrices & Bag of Paths
description: Compact multi-relational graph representations and path features for node, edge, and graph prediction.
permalink: /projects/pam-bop/
importance: 1
category: Research
---

**Data & Knowledge Engineering, 2026 · Konstantinos Bougiatiotis and Georgios Paliouras**

A multi-relational graph can contain many kinds of edges. Prime Adjacency Matrices (PAMs) encode relation types using prime numbers. Bag of Paths (BoP) turns paths through the graph into features for prediction tasks.

The journal paper introduces a lossless multi-hop computation and evaluates the representation on node classification, relation prediction, and graph regression. This connects an efficient graph representation to models that can be trained and inspected using familiar machine-learning tools.

## Read and reproduce

- [Journal paper — Data & Knowledge Engineering](https://doi.org/10.1016/j.datak.2026.102554)
- [Open preprint](https://arxiv.org/abs/2411.11149)
- [Bag of Paths code and experiments](https://github.com/kbogas/PAM_BoP)
- [Original PAM implementation](https://github.com/kbogas/PAM)
- [Installable Python package — prime_adj](https://pypi.org/project/prime-adj/)

The BoP repository contains experiments for three prediction tasks and describes a HetioNet example for exploring similar entity pairs.
