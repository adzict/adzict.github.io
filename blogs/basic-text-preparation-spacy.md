## Introduction

Have you ever asked Google to wake you up tomorrow at 7 a.m? Or how old is Madonna? In both cases, you can thank Natural Language Processing for your machine's ability to understand and process words, and sequentially give you an answer. [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing) (NLP) is a subfield of Computer Science and Artificial Intelligence that deals with processing and analyzing large amounts of raw language data. It is easy for us to understand a language — our natural language — however, for a computer this represents an impossible task, unless we "translate" our natural language to the language a computer can understand. NLP uses various techniques to create structure out of language data, and for that we use different toolkits and libraries.

The goal of this post is to guide you through the basic steps of using spaCy and its functionalities with code examples and useful definitions. I recommend having at least basic knowledge of the [Python programming language](https://www.geeksforgeeks.org/libraries-in-python/) before diving into this post, as spaCy is a Python library.

## Common NLP Tasks and Use Cases

The most common general use cases of NLP are:

- Voice recognition
- Translation, autocomplete, and autocorrect
- Analyzing sentiment of customer reviews, classifying e-mails as spam vs. legitimate
- Chatbots
- Automatic text summarization

NLP has also a variety of use cases in healthcare, finance, retail and e-commerce, and cybersecurity.

The most common [NLP tasks](https://en.wikipedia.org/wiki/Natural_language_processing#Common_NLP_tasks) include tokenization, lemmatization, stop words, tagging parts of speech, and word frequency. In this post, I will define and describe these common tasks, as well as provide an example using spaCy.

## What is spaCy?

[spaCy](https://spacy.io/) is an open-source software library for Natural Language Processing, written in Python. It was created back in 2015, and since then it has become widely used for NLP tasks. It is fast and efficient, and it uses the latest state-of-the-art approaches. spaCy helps us process and "understand" large volumes of text. It can be used to build information extraction or natural language understanding systems, or to pre-process text for deep learning.

Installing spaCy is fairly easy, and it depends on which operating system you use. Check out their website for [installation instructions.](https://spacy.io/usage)

## Using spaCy

In order to use spaCy, first we need to import it, and load the language model we want to use as an instance (in this case the language model is English). This instance is commonly named `nlp`:

![Import and load model](img/spacy_blog/1%20-%20spacy_import_loadmodel.png)

`en-core-web-sm` is the English language model. The next step is to create a container for accessing linguistic annotations, called [Doc](https://spacy.io/api/doc). This step converts the given example text to a structure that spaCy can understand:

![Creating doc](img/spacy_blog/2%20-%20creating_doc.png)

And that is it. Now you can use various spaCy functionalities to discover details about this text, and analyze it. Keep in mind you will need to create the Doc container for every text you want to analyze.

## Reading Strings and Sentences

The most basic functionality of spaCy is reading strings and sentences from a selected text. The first example shows how to print a separated list of words and punctuation from an example text. Notice how spaCy separates all the punctuation from words:

![Separating words](img/spacy_blog/3%20-%20separating_words.png)

And what about sentences? spaCy is smart enough to know where a sentence starts and where it ends:

![Print sentence](img/spacy_blog/4%20-%20print_sentence.png)

We can also count how many sentences are there in a given text:

![Counting sentences](img/spacy_blog/5%20-%20counting_sentences.png)

## Tokenization

[Tokenization](https://nlp.stanford.edu/IR-book/html/htmledition/tokenization-1.html) is the process of splitting up a sequence of characters, or a document unit, into pieces called tokens. A token is an instance of a sequence of characters that are part of a greater unit like a text or a document — a basic building block of a Doc object in spaCy.

![Tokenization chart](img/spacy_blog/6%20-%20tokenization_chart.png)

The very first step spaCy takes is to split the original document on whitespace. Then it moves on to separating the prefix characters from the beginning, then exceptions for splitting a string into several tokens (Let's becomes Let — 's), and finally the suffixes which are characters at the end.

![Tokenization split](img/spacy_blog/7%20-%20tokenization_split.png)

The interesting part is seeing how spaCy differentiates between punctuation in a website form, and it categorizes it as a single token, as well as an e-mail form.

Another useful functionality for any analysis might be to count the number of tokens, and if necessary extract a specific token using their index:

![Token length and index](img/spacy_blog/8%20-%20len_index_token.png)

## Part of Speech Tagging (POS)

[Parts of Speech Tagging](https://en.wikipedia.org/wiki/Part-of-speech_tagging) is a process of identifying the role a particular word has in a text, based on its definition, as well as the context. There are 9 parts of speech in the English language: noun, verb, article, adjective, preposition, pronoun, adverb, conjunction, and interjection.

![POS tagging](img/spacy_blog/9%20-%20POS.png)

You can find more information about all parts of speech tags on [spaCy.](https://spacy.io/api/annotation#pos-tagging)

## Lemmatization

[Lemmatization](https://en.wikipedia.org/wiki/Lemmatisation) is a process of identifying a [lemma](https://en.wikipedia.org/wiki/Lemma_(morphology)) of a word by applying morphological analysis, and the context in which the word is. A lemma represents a dictionary form of a word — it is a headword. Break, breaks, broke, broken and breaking are all forms of the word *break* which is their lemma.

![Lemmatization](img/spacy_blog/10%20-%20lemmatization.png)

I used the word *jump* in several forms, twice as a verb (*jumped* and *jumping*), and one time as a noun (*jumper*). spaCy correctly identified their lemmas and POS. In another example, here's how spaCy differentiates between two identical words with different meaning:

![Lemmatization meeting](img/spacy_blog/11%20-%20lemmatization_meeting.png)

The word *meeting* has two meanings in this sentence, and spaCy correctly identified their lemmas based on context.

Lemmatization is an essential process in NLP because it reduces words to their bases, and helps us analyze words as single items.

## Stop Words

[Stop words](https://en.wikipedia.org/wiki/Stop_word) represent words that are highly frequent in a language, and as such are usually removed from text being analyzed. There is no universal rule as to which words are deemed stop words, therefore we are able to add words to the existing list.

![Stop words length](img/spacy_blog/12%20-%20stopwords_length.png)

At this moment there are a total of 326 stop words in the list. Depending on a specific task, we can add or remove stop words from this list.

You can remove stop words from a text using list comprehension:

![Remove stop words](img/spacy_blog/13%20-%20stopwords_remove.png)

## Conclusion

Natural Language Processing is a very large field of Computer Science, and we have only scratched the tiniest surface of it. We learned about basic and common processes in NLP using spaCy. I encourage you to try it yourself, and explore even larger texts and documents using spaCy as an exercise. Examples used in this post do not represent real-world scenarios where documents can be very large, and text preparation slower. Give it a go!
