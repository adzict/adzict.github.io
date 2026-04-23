## Overview

A Retrieval-Augmented Generation (RAG) system that combines dense vector embeddings with language model generation to answer complex questions about Islamic inheritance law.

## Approach

- **Multi-format data loading**: JSON Q&A pairs and TXT files
- **Experimented with 3 different embedding models** to find the best retrieval quality
- **Integrated Qwen2.5:7B via Ollama** for answer generation
- Achieved a **12.5% improvement in accuracy** over the base generation model

## How It Works

1. Documents are chunked and embedded into a FAISS vector store
2. User queries are embedded and matched against the document store
3. Retrieved context is passed to Qwen2.5:7B for grounded answer generation
4. The system handles Arabic text natively

## Technologies

- Python
- SentenceTransformer
- FAISS
- PyTorch
- Ollama (Qwen2.5:7B)
- RAG architecture

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
