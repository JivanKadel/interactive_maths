---
sidebar_position: 2
title: Sets Cardinality Examples
description: ""
icon: calculate
---

# Cardinality Examples

### Example 1: Disjoint Sets

Let,  
A = \{1, 2, 3\}  
B = \{4, 5, 6, 7\}

Then:

- n(A) = 3
- n(B) = 4
- A ∩ B = ∅, so n(A ∩ B) = 0
- n(A ∪ B) = n(A) + n(B) = 3 + 4 = 7

<!-- --Figure: Venn diagram showing two non-overlapping circles labeled A and B-- -->

### Example 2: Intersecting Sets

Let  
A = \{1, 2, 3, 4, 5, 6\}  
B = \{4, 5, 6, 7\}

Then:

- A ∩ B = \{4, 5, 6\}, so n(A ∩ B) = 3
- n(A) = 6
- n(B) = 4
- n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 6 + 4 − 3 = 7

<!-- --Figure: Venn diagram with overlapping sets A and B, shared region containing 4, 5, 6-- -->

### Example 3: Real-Life Application

<div className="question">
  <b>Q1.</b> In a village of 500 people:

- 325 drink filtered water
- 230 drink boiled water
- Find how many drink both.

<details>

{" "}

<summary>Show solution</summary>

Let,  
$ n(F) = 325$  
$n(B) = 230$  
$n(F ∪ B) = 500$  
Let, $x = n(F ∩ B)$

Then:  
n(F ∪ B) = n(F) + n(B) - n(F ∩ B)

⇒ 500 = 325 + 230 − x

⇒ x = 55

So, 55 people drink both filtered and boiled water.

</details>
</div>

<!-- --Figure: Venn diagram with sets F and B overlapping, shared region labeled 55-- -->
