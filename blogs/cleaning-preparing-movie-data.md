Welcome to the **how to** post series. This post will teach you how to identify inadequate data, and prepare it for further analysis using a movie dataset. We will go through the basic steps of data cleaning, which is the first step in [data preprocessing](https://en.wikipedia.org/wiki/Data_pre-processing). Quality of data is very important for the data analysis process, and you can learn more about it by referring to the [GIGO concept](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out).

Please note this is a descriptive post, not a code-along type post. You can find the corresponding code in this [repository](https://github.com/adzict/box_office_determinants).

## The Data Science Process

In short, the Data Science process includes defining a goal (a business question or a research goal), gathering and preprocessing data, [feature engineering](https://en.wikipedia.org/wiki/Feature_engineering), data exploration, modeling, and presenting your findings.

The Data Preprocessing step includes assessing data, cleaning data, data transformation, and data reduction. Assessing and data cleaning focuses on adding, correcting, repairing, or removing data that is irrelevant or incorrect.

When it comes to data cleaning, the following are the most common problems you can encounter: missing values and duplicates, irrelevant data, mismatched or mixed data types, outliers and noisy data, and structural errors. I will go through all of them using a movie dataset.

## Project Goal

The goal for this specific project was to imagine being a Data Scientist for a Top Movie Studio. This Movie Studio had an unfortunate series of Box Office flops, and naturally the producers decided to question their strategy. In their search for answers, they turned to their Data Scientist, where I suggested a new approach: using data to determine what factors go into making a successful film. We had a dataset of over 5000 films to mine for insights.

In this post I will only cover the data cleaning phase, not the entire Data Science process. However, it was important to include the project's goal, as it directs decision-making when preparing data.

## Movie Dataset

The following movie dataset was used as a starting point: [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset). First, let's see what types of data are there, and how many features:

![Basic info](img/box_office_data_cleaning/basic%20info.png)

There are both [quantitative (numerical)](https://stats.oecd.org/glossary/detail.asp?ID=2219) and [qualitative (categorical)](https://stats.oecd.org/glossary/detail.asp?ID=3494) data types in the dataset, expressed as [Python data types](https://docs.python.org/3/library/stdtypes.html): `int64` and `float64` for numerical data, and `object` for categorical data. There are a variety of features available for analysis such as box office information, technical specifications, basic information like language, genre, country of origin, plot keywords, as well as information about the movie's cast and crew, social media popularity, and user and critic reviews. Total of 26 features and 5043 entries!

## Missing Values

Right off the bat I see that there are missing values in almost every variable. I can identify them quickly because I know there are 5043 entries total, and the displayed information shows less in almost every feature.

Missing data can be handled in two ways: [imputation or removal](https://www.mastersindatascience.org/learning/how-to-deal-with-missing-data/) of data. The initial analysis showed there are 2685 missing values total, where the highest percent of missing values are in the target value **gross** with 17.52%, followed by **budget** with 9.75%. Both of these features are tied directly to our project's goal.

By looking at a distribution matrix of these missing values, I can confirm that gross has the highest number of missing values, but I cannot see any obvious pattern:

![Missing values distribution](img/box_office_data_cleaning/missing%20values%20distr.png)

Because the time needed to research and input missing data exceeded the project's time frame, I decided to remove the missing data from the dataset.

## Duplicate Rows

Removing duplicates from a dataset is very important because we want to avoid misleading information and maintain accuracy. By analyzing the dataset, I determined there are 247 duplicate rows, which I then proceeded to remove.

## Outliers

Identifying anomalies can be tricky just by looking at the data, so it's good practice to visualize it. A [pairplot](https://seaborn.pydata.org/generated/seaborn.pairplot.html) does wonders for visualizing pairwise relationships:

![Pairplot](img/box_office_data_cleaning/pairplot%20specific%20variables.png)

I noticed something is not right with the budget values — there's a huge spike that could mean an abnormal value. Plotting budget values using a [displot](https://seaborn.pydata.org/generated/seaborn.displot.html#seaborn.displot):

![Budget outlier](img/box_office_data_cleaning/budget%20outlier.png)

There is something clearly wrong as the $4000 MM value is incredibly large for a movie budget. I found the value to be incorrectly recorded for one particular movie, and I corrected it by finding the correct budget value on the IMDB website.

## Mismatched Data Types

My initial research regarding the incorrect budget entry discovered another problem: mismatched data types. Specific budget values were actually in the currency of the country of origin rather than USD as initially assumed. The highest value is a South Korean movie with a budget of 4000 million Korean wons (KRW).

![Mismatched data - currency](img/box_office_data_cleaning/mismatched%20data-currency.png)

Further research showed that movies originating in English-speaking countries (US, UK, New Zealand, Australia) all have budget values expressed in US dollars. Because of the limited project time frame, I decided to remove all non-English speaking movies from the dataset.

## Structural Errors

Structural errors usually involve typos, inconsistent capitalization, and mislabeled classes. They can be found in categorical features. After checking values in the categorical features, I was not able to find any structural errors.

## Conclusion

The data cleaning phase of a project is just as important as any other, as here we make sure that data is usable, consistent, and transformed to suit the project goals. Missing values, noisy data, duplicates, and structural errors are quite common, and it is very important to make your decisions goal-oriented. A good solution is to create a script and automate the process of data cleaning, as it takes off the workload significantly.
