---
layout: post
title: "Bread, Butter, & Python Data Structures"
date: 2019-12-25
categories:
   - Programming
description:
image: ../../../../pictures/posts/python_data/1.jpg
image-sm: ../../../../pictures/posts/python_data/1.jpg
---

When I was Leetcoding a few days earlier, I realized I have spent so much time with Pandas `dataframes` and Numpy `arrays` that I was relatively unfamiliar with Python's built-in data structures. So here's an "everything" article on Python data structures. The hope is that after reading and digesting this article, we can Leetcode faster without searching up `List`'s API every 10 seconds.

This article will not be another documentation of Python Data Structures. I will not talk about every single API of the Data structures. Only the APIs that are important will be mentioned. Examples of using these Data Structures to solve a toy-problem will be given.

For each data structure, I will talk about these 5 categories for the data structure.

- Initializing Data
- Accessing Data
- Manipulating Data
- Converting to other Data Structures

Before we begin, here is a semantic tree of how Data Structures are organized in Python. The semantic tree shows only the Data Structures we care about.



- ## The No-Import Data Structures
   - ### List
   This is what is more commonly known as **Array** in python. It stores a sequence of items that can be accessed through its indices.
   <div>
      <button type="button" class="collapsible">
      Initializing List Data
      </button>
      <div class="collapsible_content">
      <script src="https://gist.github.com/icarusoars/918c67cd755c434ed79452184d83780d.js"></script>
      </div>
   </div>
   <div>
      <button type="button" class="collapsible">
      Accessing List Data
      </button>
      <div class="collapsible_content">
      <script src="https://gist.github.com/icarusoars/894cbb6d3b0ee3deb8492e675efb90c2.js"></script>
      </div>
   </div>
   <div>
      <button type="button" class="collapsible">
      Manipulating List Data
      </button>
      <div class="collapsible_content">
      <script src="https://gist.github.com/icarusoars/cfd6c14d5f4f3228a8daf02ac5bc4a17.js"></script>
      </div>
   </div>
   <div>
      <button type="button" class="collapsible">
      Converting List to other Data Structures
      </button>
      <div class="collapsible_content">
      <script src="https://gist.github.com/icarusoars/cfd6c14d5f4f3228a8daf02ac5bc4a17.js"></script>
      </div>
   </div>
   - ### Tuple
   - ### Dictionary
   - ### Set

