## Overview

A fast bilingual text clustering system that groups Arabic and English texts by semantic similarity using Louvain community detection. The project benchmarks multiple embedding models to optimise for both speed and accuracy.

## Approach

1. **Embed texts** using multilingual sentence transformers
2. **Build a similarity graph** based on cosine similarity between embeddings
3. **Apply Louvain community detection** to identify natural clusters
4. **Benchmark** different embedding models for speed vs. accuracy tradeoffs

## Technologies

- Python
- SentenceTransformer
- PyTorch
- Louvain community detection
- Multilingual embeddings

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
- [Medium Article](https://medium.com/@amlhassanabdelhamid)
