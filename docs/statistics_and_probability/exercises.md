---
sidebar_position: 2
title: Statistics and Probability Exercises
description: ""
---

# Statistics Exercises

## Mean

### Example (Individual):

Marks: 10, 20, 30, 40, 50

$ \bar{x} = \dfrac{10 + 20 + 30 + 40 + 50}{5} $

= $ 30 $

### Example (Discrete):

| Marks ($x$) | Frequency ($f$) |
| ----------- | --------------- |
| 10          | 2               |
| 20          | 3               |
| 30          | 5               |

$ \bar{x}$

= $\dfrac{(10 \cdot 2 + 20 \cdot 3 + 30 \cdot 5)}{2 + 3 + 5}$

= $\dfrac{10 + 60 + 150}{10}$

= $24 $

## Median

### Example (Individual):

Data: 5, 10, 15, 20, 25

Median = 15 (middle value)

### Example (Discrete):

| Value ($x$) | Frequency ($f$) | Cumulative Frequency |
| ----------- | --------------- | -------------------- |
| 10          | 2               | 2                    |
| 20          | 3               | 5                    |
| 30          | 5               | 10                   |

Total number of values, $n = \sum f = 10$

To find the median:

- Compute $ \dfrac{n}{2} = \dfrac{10}{2} = 5 $

Now, look for the cumulative frequency just greater than or equal to 5.

From the table:

- Cumulative frequency for 10 is 2 (less than 5)

- Cumulative frequency for 20 is 5 (equal to 5)

- Cumulative frequency for 30 is 10 (greater than 5)

So, the median is the value corresponding to the cumulative frequency where $ \text{CF} \geq 5 $, which is **20**.

**Final Answer:** $\boxed{20}$ is the median.

## Mode

### Example (Individual):

Data: 2, 3, 3, 5, 7

Mode = 3 (frequency = 2)

### Example (Discrete):

| Value ($x$) | Frequency ($f$) |
| ----------- | --------------- |
| 10          | 2               |
| 20          | 5               |
| 30          | 3               |

Mode = 20 (highest frequency)

## Quartiles

### Example (Individual):

Data: 5, 10, 15, 20, 25, 30, 35

$n = 7$

$Q_1$ = value at $ \dfrac{1(7+1)}{4} = 2^{nd} $ → 10

$Q_2$ = Median = 20

$Q_3$ = value at $ \dfrac{3(7+1)}{4} = 6^{th} $ → 30

---

# Probability Exercises

## Formula Reminder

$ P(E) = \dfrac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}} $

---

### Example 1: Rolling a Die

**Question:** What is the probability of getting a number greater than 4 when rolling a fair die?

- Sample Space: $ S = \{1, 2, 3, 4, 5, 6\} $
- Favorable outcomes: $ \{5, 6\} $ → 2 outcomes
- Total outcomes: 6

**Solution:**  
$ P(\text{number} > 4) = \dfrac{2}{6} = \dfrac{1}{3} $

---

### Example 2: Drawing a Card

**Question:** What is the probability of drawing a red queen from a standard deck of 52 cards?

- Total red queens: 2 (Queen of Hearts, Queen of Diamonds)
- Total cards: 52

**Solution:**  
$ P(\text{red queen}) = \dfrac{2}{52} = \dfrac{1}{26} $

---

### Example 3: Tossing Two Coins

**Question:** What is the probability of getting exactly one head?

- Sample Space: $ S = \{HH, HT, TH, TT\} $
- Favorable outcomes: $ \{HT, TH\} $ → 2 outcomes
- Total outcomes: 4

**Solution:**  
$ P(\text{exactly one head}) = \dfrac{2}{4} = \dfrac{1}{2} $

---

### Example 4: Spinner Game

**Question:** A spinner is divided into 5 equal sections labeled A, B, C, D, E. What is the probability of landing on A or E?

- Favorable outcomes: $ \{A, E\} $ → 2 outcomes
- Total outcomes: 5

**Solution:**  
$ P(A \text{ or } E) = \dfrac{2}{5} $

---

### Example 5: Real-World – Student Survey

**Question:** In a class of 40 students, 28 like football. What is the probability that a randomly selected student likes football?

- Favorable outcomes: 28
- Total outcomes: 40

**Solution:**  
$ P(\text{likes football}) = \dfrac{28}{40} = 0.7 $

---

### Example 6: Empirical Probability – Dice Roll

**Question:** A die is rolled 60 times. The number 3 appears 12 times. What is the empirical probability of getting a 3?

- Observed frequency: 12
- Total trials: 60

**Solution:**  
$ P(3) = \dfrac{12}{60} = 0.2 $

---

## Exercises

---

**Stats**

---

### Exercise 1

<div className="question">
  <b>Q1.</b>

| $x$ | 10  | 20  | 30  |
| --- | --- | --- | --- |
| $f$ | 2   | 3   | 5   |

<details>

{" "}

<summary>Show solution</summary>

$ \displaystyle \bar{x} = \dfrac{\sum{fx}}{\sum{f}} \quad\text{where }f\text{ is the frequency}$

$= \dfrac{(10 \cdot 2 + 20 \cdot 3 + 30 \cdot 5)}{2 + 3 + 5} $

$= \dfrac{260}{10} = 26 $

</details>
</div>

---

**Probability**

---

### Exercise 1

<div className="question">
  <b>Q1.</b> What is the probability that the coin comes out in a game of die?

i. If 1 brings the coin out

ii. If six brings the coin out

iii. If both 1 and 6 brings the coin out?

<details>

{" "}

<summary>Show solution</summary>
Total possible outcomes = 6 (faces of a fair die).

i. If 1 brings the coin out: favorable case(s) = 1

$P = \dfrac{1}{6}$

ii. If 6 brings the coin out: favorable case(s) = 1

$P = \dfrac{1}{6}$

iii. If both 1 and 6 bring the coin out: favorable = 2

$P = \dfrac{2}{6} = \dfrac{1}{3}$

</details>
</div>

### Exercise 2

<div className="question">
  <b>Q2.</b> What is the probability that the card is Ace (A) if a card is drawn randomly from a deck?

<details>

{" "}

<summary>Show solution</summary>

Total possible outcomes = 52.

i. Favorable cases = 4 (an Ace of each suit)

$P = \dfrac{4}{52}$

Thus, $P = \dfrac{1}{13}$

</details>
</div>

### Exercise 3

<div className="question">
  <b>Q3.</b> What is the probability that the card is face card if a card is drawn randomly from a deck?

<details>

{" "}

<summary>Show solution</summary>

Total possible outcomes = 52.

i. Favorable cases = 3 \* 4 (Jack, Queen and King of each suit)

$P = \dfrac{4 * 3}{52}$

Thus, $P = \dfrac{3}{13}$

</details>
</div>
