Federated Learning (FL) is a machine-learning setting that can let different entities cooperate to create a powerful shared model without having to share their private data. Let's look at an example of a federated learning system and why would you build one: Let's say you are a lovely company/bank/hospital, and you got some amount of data but you want your model to see more data and different patterns of data hoping that this can make your model perform better and be less biased.

So you go for another company/bank/hospital and you ask to show their data to your model, promising them that you're not some evil witch, but even though you're a respectful entity, they still can't show their data to your model for so many reasons.

So what to do 🤔 well, some say that in this particular case, FL would be a very good solution. In simple terms this is how federated learning would be done in this case:

### Ingredients:

- Nice server: we can call it a federated server.
- Aggregation algorithm.
- A global model with some random starting weights.

### Steps:

1. Federated server sends a global model to each entity.
2. Each entity trains the global model on its data, extracts the model's new weights and sends those weights to the federated server.
3. The federated server uses the aggregation algorithm to aggregate the weights that it got from each entity — can simply just take their mean — and assign the resulted weight to the global model and send it back to the entities.
4. Repeat 🔁 steps 2 and 3 until you get a nice convergence.

And bam, now you got a powerful model that can benefit your company/bank/hospital and benefit others, that model is less biased, and more powerful than the model that you could build on your limited data.

![Federated Learning diagram](../assets/img/fl1.png)

There are a lot of flavors for federated learning, and the one that we talked about in the example above is called cross-silo horizontal federated learning. The steps and ingredients that we talked about above could be slightly modified to be used in horizontal cross-device settings.

## Federated Learning Systems Can Be Categorized in Many Ways

### 1. Based on Data Partitioning

#### Horizontal Federated Learning

In this FL setting, all the clients have the same feature space (the same column names), but all of them got different samples. An example of that is 2 banks that collect the same kind of features about their clients (account number, time of transactions, merchant name, merchant state, etc.) and each of them got different customers.

Most of the available work in the federated learning literature is done on Horizontal FL.

![Horizontal FL](../assets/img/fl2.png)

#### Vertical Federated Learning

In this FL setting, all the clients have the same samples but different feature spaces (different column names). An example of that can be 2 hospitals, both of those hospitals got data on the same group of patients, but that data differs in its nature — hospital 1 got the results for the x-ray and CT scan.

![Vertical FL](../assets/img/fl4.png)

#### Transfer Federated Learning

A mix of the horizontal settings and the vertical settings. An example where such a setting could be needed is cancer diagnosis system. A group of hospitals wants to build an FLS for cancer diagnosis but each hospital has different patients as well as different kinds of medical examination. In such a case Transfer Federated Learning can be a possible solution.

### 2. Based on the Kind of Machine Learning Models Chosen for the Client

Every client participating in the federated learning system is seeking to apply state-of-the-art models on their local dataset, and based on this model choice, a lot of things in the FLS will be decided — for example choosing the aggregation function.

#### NN Based Models

Neural Network based models are one of the most famous model architectures used in FLS. They achieve very good results in many tasks such as image classification, fraud detection, word prediction, etc. There are a lot of aggregation functions that can deal with this kind of architecture — the most famous one is FedAvg.

#### Tree Based Models

Tree-based models are one of the most famous machine learning models especially when it comes to dealing with tabular datasets. They're computationally power-friendly and easy to interpret compared with NN-based models. Multiple tree-based models have been explored in the FL world including Decision Trees, Random Forests, gradient-boosting decision trees (GBDT), XGBoost, etc.

#### Linear Models

Classic linear models (including linear regression, logistic regression, SVM, etc.) are famous models usually used because they are very easy to understand. Note: Most currently available FL frameworks are built to deal with stochastic gradient descent, a classic optimization algorithm used to train NN-based models, logistic regression, etc.

### 3. Based on Privacy Mechanisms

One of the most important things when building an FLS is ensuring that each client's data is safe and private. You may think that since the clients' data aren't exposed to the server, they are safe. But in reality, the exchanged model parameters between the server and clients can expose sensitive information about the clients' data.

There are two main categories for privacy in FLS: **global privacy** and **local privacy**. In Global Privacy, we assume the existence of a trustworthy server, so the updates from each client are sent to the server without any added privacy, then the server privatizes those updates. In Local Privacy, even the server itself can't see the raw updates.

![Privacy in FL](../assets/img/fl5.png)

Building a privacy guarantee algorithm for FLS faces many challenges as this algorithm needs to be computationally cheap, communication-efficient, tolerant to dropped clients, and should not overly affect the accuracy of the system. Privacy in FLS is a very broad and important topic.

### 4. Based on Client Types

#### Cross-Device

In cross-device settings, FL deals with a huge number of clients (smartphones, IoT devices, etc.), creating a large-scale system with significant complexity. One should be careful with model choice — most clients won't have enough computational power to train heavy models locally. A famous use case: Google's GBoard, trained on users' phones for next-word prediction.

#### Cross-Silo

The main difference from cross-device is that clients have much larger amounts of data and stronger computation power, and the number of clients is usually significantly smaller. Client examples: hospital/bank/company. A famous use case: the utilization of FATE (an open-source FL framework) in Anti Money Laundering across multiple banks.

## Why Is Federated Learning Needed?

#### 1. Better Data Privacy and Security

Even with the risk that exchanged model parameters can expose sensitive information, FL remains far more private than sending clients' data to the server, especially when the client is a smartphone or IoT device.

#### 2. Data Diversity

FL can give you a model that handles a higher range of data, improving accuracy. This is especially important in healthcare AI, where patient populations are large and diverse, yet most traditional AI models are trained on datasets that don't reflect the general patient population.

#### 3. Better Scalability and Cost-Efficiency

In FLS, data is partitioned and trained across multiple devices, enabling parallelism (accelerating training) and reducing the volume of data transmitted to the network.

## Closure

Federated Learning can be the solution for a lot of privacy and security problems. It's still very new but growing steadily, and today there are multiple open-source researches and frameworks that can help people interested in applying it.

## References

1. [A Survey on Federated Learning Systems: Vision, Hype and Reality for Data Privacy and Protection](https://arxiv.org/abs/1907.09693)
2. [Federated Learning: Challenges, Methods, and Future Directions](https://arxiv.org/abs/1908.07873)
3. [A Systematic Literature Review on Federated Machine Learning](https://arxiv.org/abs/2007.11354)
4. [Federated Learning for Mobile Keyboard Prediction](https://research.google/pubs/pub47586/)
5. [Utilization of FATE in Anti Money Laundering](https://www.fedai.org/cases/utilization-of-fate-in-anti-money-laundering-through-multiple-banks/)
6. [Gemmo AI - Federated Learning](https://gemmo.ai/federated-learning)
7. [Federated Learning Types](https://blog.openmined.org/federated-learning-types/)
8. [Benefits of Federated Learning Explained](https://t-dab.ai/benefits-of-federated-learning-explained/)
9. [Federated Learning Can Improve Data Diversity](https://www.statnews.com/2021/04/30/federated-learning-improve-data-diversity/)
