## Overview

A system for conducting asymmetric semantic search between queries and text passages. The project experiments with different embedding models and distance metrics to find the best configuration for search quality.

## Approach

Asymmetric semantic search means the query and the document have different lengths and styles — a short question is matched against longer text passages. This project:

1. **Embeds documents** using sentence transformer models
2. **Encodes queries** separately (asymmetric approach)
3. **Compares** using multiple distance metrics (cosine similarity, dot product, Euclidean)
4. **Benchmarks** different embedding models for retrieval quality

## Technologies

- Python
- SentenceTransformer
- PyTorch
- Multiple distance metrics

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
