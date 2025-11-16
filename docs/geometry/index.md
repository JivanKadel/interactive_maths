---
sidebar_position: 1
title: Introduction to Geometry
description: ""
---

# Introduction to Geometry

---

# Triangle

---

## Definition

A **triangle** is a closed figure formed by three line segments. It has:

- 3 sides

- 3 angles

- 3 vertices

---

## Properties of a Triangle

1.  **Angle Sum Property**:

    The sum of interior angles of any triangle is always:  
     $ \angle A + \angle B + \angle C = 180^\circ $

       <figure>
      <img
        src="/img/geometry/triangle_with_sides.png"
        alt="Triangle with sides(a, b, c) and angles(A, B, C)"
      />
      <figcaption>
        <b>Figure 1:</b> Triangle with sides and angles.
      </figcaption>
    </figure>

2.  **Exterior Angle Property**:

    An exterior angle is equal to the sum of the two opposite interior angles:  
    $ \angle D = \angle A + \angle B $

     <figure>
      <img
        src="/img/geometry/triangle_with_exterior_angle.png"
        alt="Triangle with angles A, B, C and exterior angle D"
      />
      <figcaption>
        <b>Figure 2:</b> Triangle with angles (A, B, C) and exterior angle D.
      </figcaption>
    </figure>

3.  **Triangle Inequality Theorem**:

    The sum of any two sides is greater than the third side:  
    $ a + b > c $,

    $ b + c > a $,

    $ c + a > b $

4.  **Area of Triangle** (basic):

    $ \text{Area} = \dfrac{1}{2} \cdot \text{base} \cdot \text{height} $

    In Figure(2), base = AC, and height = BD

        <figure>
         <img
           src="/img/geometry/triangle_with_base_height.png"
           alt="Triangle with Base and Height specified"
         />
         <figcaption>
           <b>Figure 3:</b> Triangle with Base (AC), and height (BD).
         </figcaption>

       </figure>

    :::info Base and Height
    **Base $\perp $ Height:**
    Any side can be taken as base, but the Height is perpendicular to the base and touches the opposite vertex.

    :::

---

## Types of Triangles

### By Sides:

- **Scalene Triangle**: All three sides and all three angles are different.

  - Sides: a, b, c (all distinct)

  - Perimeter: $P = a + b + c$

  - Area (Heron’s formula): let $s = \dfrac{a+b+c}{2}$, then $ \text{Area} = \sqrt{s(s-a)(s-b)(s-c)} $

- **Isosceles Triangle**: Two sides equal and the base angles equal.

  - Sides: equal sides $a, a$ and base $b$

  - Base angles are equal; vertex angle is opposite the base.

  - Perimeter: $P = 2a + b$

  - Height from the apex to base: $h = \sqrt{a^2 - \dfrac{b^2}{4}}$

  - Area: $ \text{Area} = \dfrac{1}{2} \, b \, h = \dfrac{b}{4}\sqrt{4a^2 - b^2} $

- **Equilateral Triangle**: All sides equal and all interior angles are $60^\circ$.

  - Side: $a$ (all three sides equal)

  - Angles: each $60^\circ$

  - Perimeter: $P = 3a$

  - Height: $h = \dfrac{\sqrt{3}}{2}\,a$

  - Area: $ \text{Area} = \dfrac{\sqrt{3}}{4}\,a^2 $

### By Angles:

- **Acute Triangle**: All angles < $90^\circ$

- **Right Triangle**: One angle = $90^\circ$

- **Obtuse Triangle**: One angle > $90^\circ$

---

## Relationship Among Sides and Angles

    <figure>
         <img
           src="/img/geometry/triangle_longest_shortest.png"
           alt="Triangle with variable length of sides"
         />
         <figcaption>
           <b>Figure 4:</b> Triangle with variable length of sides.
         </figcaption>

       </figure>

- **Longest side is opposite the largest angle**

- **Shortest side is opposite the smallest angle**

### Pythagoras Theorem (Right Triangle):

$ P^2 + B^2 = H^2 $

Where, $H$ is the hypotenuse,

$P$ is the Perpendicular ( Opposite ), and

$B$ is the Base ( Adjacent )

<figure>
    <img
        src="/img/geometry/triangle_right_angled.png"
        alt="Right angled triangle with base, hypotenuse and perpendicular"
    />
    <figcaption>
        <b>Figure 5:</b> Right Angled Triangle.
    </figcaption>

</figure>

---

## Similar Triangles

### Definition:

Two triangles are **similar** if:

- Their corresponding angles are equal

- Their corresponding sides are in the same ratio

<figure>
    <img
        src="/img/geometry/triangles_similar.png"
        alt="Two similar triangles (ABC) and (DEF)"
    />
    <figcaption>
        <b>Figure 6:</b> Two similar triangles.
    </figcaption>

</figure>

### Symbol:

$ \triangle ABC \sim \triangle DEF $

### Conditions for Similarity:

1. **AA (Angle-Angle)**: Two pairs of equal angles

2. **SSS (Side-Side-Side)**: All sides in same ratio

3. **SAS (Side-Angle-Side)**: Two sides in same ratio and included angle equal

### Properties:

- Ratio of corresponding sides:

  $ \dfrac{AB}{DE} = \dfrac{BC}{EF} = \dfrac{AC}{DF} $

- Ratio of areas:

  $ \dfrac{\text{Area of } \triangle ABC}{\text{Area of } \triangle DEF} = \left( \dfrac{\text{side of } \triangle ABC}{\text{corresponding side of } \triangle DEF} \right)^2 $

---

## Real-World Applications

- Map scaling and model design

- Shadow length problems

- Architecture and trigonometry
