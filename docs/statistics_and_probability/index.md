---
sidebar_position: 1
title: Introduction to Statistics and Probability
description: ""
---

# Statistics

## 1. Arithmetic Mean

### Definition:

The arithmetic mean is the average of all values in a dataset. It represents the central value.

### Formulas:

- **Individual Series:** $ \bar{x} = \dfrac{\sum x}{n} $

- **Discrete Series:** $ \bar{x} = \dfrac{\sum fx}{\sum f} $

Where:

- $x$ = value
- $f$ = frequency
- $n$ = total number of values

---

## 2. Median

### Definition:

The median is the middle value when data is arranged in ascending or descending order.

### Formulas:

- **Individual Series:**

  If $n$ is odd: Median = middle value

  If $n$ is even: Median = average of two middle values

- **Discrete Series:**

  Find cumulative frequency (CF), then locate the value where $ \text{CF} \geq \dfrac{n}{2} $

---

## 3. Mode

### Definition:

The mode is the value that appears most frequently in a dataset.

### Method:

- **Individual Series:** Identify the value with highest frequency.

- **Discrete Series:** Value corresponding to highest frequency.

---

## 4. Quartiles

### Definition:

Quartiles divide a dataset into four equal parts.

- $Q_1$ = First Quartile (25% of data below it)

- $Q_2$ = Second Quartile = Median

- $Q_3$ = Third Quartile (75% of data below it)

### Formulas:

- **Individual Series:** $ Q_k = \text{Value at position } \dfrac{k(n+1)}{4} $, where $k = 1, 2, 3$

- **Discrete Series:**  
  Use cumulative frequency to locate:

  - $Q_1$: $ \dfrac{n}{4} $

  - $Q_2$: $ \dfrac{n}{2} $

  - $Q_3$: $ \dfrac{3n}{4} $

---

## Relationships & Differences

| Measure   | Focus          | Sensitive to Outliers | Best Use Case                   |
| --------- | -------------- | --------------------- | ------------------------------- |
| Mean      | Average value  | Yes                   | Balanced data                   |
| Median    | Middle value   | No                    | Skewed data or outliers present |
| Mode      | Most frequent  | No                    | Categorical or repeating data   |
| Quartiles | Spread of data | No                    | Understanding distribution      |

---

## Real-World Examples

- **Mean:** Average marks of students in a class.

- **Median:** Median income in a country to avoid skew from billionaires.

- **Mode:** Most common shoe size sold in a store.

- **Quartiles:** Used in box plots to analyze exam score distribution.

### When to Use Each Measure

- **Mean vs. Median:**  
   Suppose a company has 10 employees earning \$30,000 each and 1 CEO earning \$1,000,000. The mean salary will be much higher than what most employees earn, while the median salary will better represent the typical employee's pay. In this case, **median** is preferred over mean.

- **Mode vs. Mean/Median:**  
   In a survey of favorite ice cream flavors, the most popular flavor (mode) is more meaningful than the mean or median, which may not correspond to any actual flavor. Use **mode** for categorical data.

- **Quartiles vs. Mean:**  
   When analyzing exam scores, quartiles help identify the spread and detect outliers, while the mean only gives the average. **Quartiles** are useful for understanding variability and distribution.

- **Mean:**  
   For consistent, symmetric data without outliers (like heights of adult men in a population), the **mean** is a reliable measure of central tendency.

- **Median:**  
   For house prices in a city (where a few very expensive homes can skew the average), the **median** gives a better sense of a "typical" price.

- **Mode:**  
   In manufacturing, the **mode** can indicate the most common defect type, helping to target quality improvements.

- **Quartiles:**  
   In finance, **quartiles** are used to compare investment returns and assess risk by looking at the spread between the lower and upper quartiles.

---

# Probability

## Definition & Meaning

**Probability** is the measure of the likelihood that a particular event will occur. It ranges from 0 (impossible event) to 1 (certain event).

- If an event is **certain**, its probability is 1.

- If an event is **impossible**, its probability is 0.

- All probabilities lie between 0 and 1.

---

## Key Terms

| Term                   | Meaning                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| **Experiment**         | A process that leads to an outcome (e.g., tossing a coin)         |
| **Trial**              | Each repetition of an experiment                                  |
| **Outcome**            | A possible result of an experiment                                |
| **Sample Space (S)**   | The set of all possible outcomes                                  |
| **Event (E)**          | A subset of the sample space; the outcome(s) we are interested in |
| **Favorable Outcomes** | Outcomes that satisfy the condition of the event                  |

---

## Formula

$ \text{Probability of an event } E = P(E) = \dfrac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}} $

### Examples:

---

#### Experiment: Tossing a coin

Sample Space: $S = \{ Head, Tail \}$

**Event: Getting a Head**

Favorable outcomes = 1

Total outcomes = 2

Probability: $ P(E) = \dfrac{1}{2} $

---

#### Experiment: Rolling a fair die

Sample Space: $S = \{ 1, 2, 3, 4, 5, 6 \}$

**Event: Getting an even number**

Favorable outcomes = {2, 4, 6} → 3 outcomes

Total outcomes = 6

Probability: $ P(E) = \dfrac{3}{6} = \dfrac{1}{2} $

---

#### Experiment: Drawing a card from a deck of 52 cards

**Event: Getting a King**

Favorable outcomes = 4 (one King in each suit)

Total outcomes = 52

Probability: $ P(E) = \dfrac{4}{52} = \dfrac{1}{13} $

---

## Properties of Probability

$0 \leq P(E) \leq 1$

$P(\text{Impossible event}) = 0$

$P(\text{Certain event}) = 1$

$P(E') = 1 - P(E) \quad \text{(Complement of event E)}$

### Real-Life Applications

- Predicting weather (chance of rain)

- Insurance risk assessment

- Quality control in manufacturing

- Games of chance (dice, cards, coins)

- Medical testing (probability of disease presence)

## Probability Scale & Empirical Probability

### Probability Scale

The **probability scale** is a number line from 0 to 1 that shows how likely an event is to occur.

| Probability Value | Description      | Example                                  |
| ----------------- | ---------------- | ---------------------------------------- |
| $0$               | Impossible Event | Getting a 7 on a standard die            |
| $0.5$             | Equally Likely   | Getting Head or Tail in a fair coin toss |
| $1$               | Certain Event    | Getting a number less than 7 on a die    |

---

### Empirical Probability (Experimental Probability)

**Empirical Probability** is the probability based on actual experiments or observations. It is calculated using the ratio of the number of times an event occurs to the total number of trials.

### Formula:

$P(E) = \dfrac{\text{Number of times event E occurs}}{\text{Total number of trials}}$

### Examples:

---

A coin is tossed 100 times. It lands on heads 56 times.  
Find the empirical probability of getting heads.

P(Head) = $\dfrac{56}{100} = 0.56$

---

A die is rolled 60 times. The number 4 appears 9 times.  
Find the empirical probability of getting a 4.

P(4) = $\dfrac{9}{60} = 0.15$

---

In a class of 40 students, 28 like football.  
Find the probability that a randomly selected student likes football.

P(Football) = $\dfrac{28}{40} = 0.7$

---

### Key Differences: Theoretical vs. Empirical Probability

| Aspect               | Theoretical Probability                                             | Empirical Probability                                                  |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Basis**            | Assumes all outcomes are equally likely                             | Based on actual experiments or observations                            |
| **Formula**          | $ P(E) = \dfrac{\text{Favorable outcomes}}{\text{Total outcomes}} $ | $ P(E) = \dfrac{\text{Observed frequency of E}}{\text{Total trials}} $ |
| **Example**          | Probability of rolling a 6 on a fair die = $ \dfrac{1}{6} $         | If 6 appears 8 times in 50 rolls: $ \dfrac{8}{50} = 0.16 $             |
| **Accuracy**         | Idealized, assumes fairness and perfect conditions                  | Reflects real-world variation and randomness                           |
| **Use Case**         | Used in games, theoretical models, and simulations                  | Used in surveys, experiments, and statistical analysis                 |
| **Affected by Bias** | No (assumes fairness)                                               | Yes (depends on sample and conditions)                                 |
