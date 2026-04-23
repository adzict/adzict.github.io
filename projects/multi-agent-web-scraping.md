## Overview

An AI-powered web scraping system that uses LLMs (Gemma via Google AI API) to automatically generate extraction code from any website's HTML structure, eliminating the need for manual CSS selector identification.

## How It Works

The system uses a **multi-agent orchestrator** that:

1. **Extracts article links** from target websites
2. **Clusters pages by structural similarity**, identifying pages that share the same HTML template
3. **Reuses generated code** across identical templates for efficient batch processing

This means the LLM only needs to generate extraction code once per unique page template, rather than once per page — dramatically reducing API calls and token usage.

## Results

Successfully tested on Arabic news sites:
- **230+ articles** extracted in a single automated run
- Only **2 calls to the LLM** with the least amount of tokens used
- Full **pagination support** and **deduplication** built in

## Technologies

- Python
- Google AI API (Gemma)
- LLM-based code generation
- Web scraping & HTML parsing
- Multi-agent architecture

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
