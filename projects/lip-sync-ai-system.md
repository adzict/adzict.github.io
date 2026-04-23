## Overview

An AI system that takes an input image and audio, then generates a video where the image appears to lip-sync with the provided audio. Built using the state-of-the-art Wav2Lip model and deployed on Streamlit.

## The Deployment Challenge

The real challenge wasn't building the system — it was deploying it. Here are the main issues I encountered with Streamlit:

1. **Streamlit can't handle heavy processing**: The video processing button crashed the app because Streamlit doesn't have GPU or high RAM. Solution: created a separate deployment branch without the heavy animation feature.

2. **Large model files**: When I added the model checkpoint to GitHub, Streamlit couldn't pull the repo — even `git lfs` didn't help. Solution: uploaded model checkpoints to Google Drive and used `gdown` to download them at runtime.

3. **Dependency issues**: Multiple compatibility problems that needed careful resolution.

**The ground rule I learned**: the lighter you make your app, the better and faster it is to deploy.

## Technologies

- Python
- Wav2Lip (pre-trained lip-sync model)
- Streamlit (deployment)
- Google Drive + gdown (model hosting)
- Video/audio processing

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
