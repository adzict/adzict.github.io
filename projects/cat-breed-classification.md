## Overview

A web application that classifies cat breeds from images. This project was my first experience taking a deep learning model out of a notebook and deploying it as a real web application.

## The Dataset Challenge

The first dataset I tried was extremely dirty — I found bunny pictures in the Havana cat breed folder! No matter what model I used, I never exceeded 45% test accuracy.

So I went back to the dataset step and built my own by combining images from **3 different datasets** along with images from **Google Images**, then manually cleaned the breed class folders. This was my first time using a dataset that isn't ready out of the oven from Kaggle.

**Result**: 66% test accuracy — **21% better performance** — and I didn't even spend half the time on modeling compared to the first attempt. The lesson: data quality matters more than model complexity.

## Technologies

- **Backend**: Flask
- **Frontend**: HTML, CSS, JavaScript
- **Modeling**: PyTorch
- **Data**: Custom dataset from 3 sources + Google Images

## Links

- [GitHub Repository](https://github.com/Aml-Hassan-Abd-El-hamid)
