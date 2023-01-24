# Facilitators Guide: HTML Lists, Control Flow with JS, and the CSS Box Model

## Overview

### How does this topic fit?

**Where we've been**:

In the previous class students got more exposure to JavaScript, with an introduction to data types, conditionals, and arrays. Students were also introduced to new Git and GitHub concepts with creating a new repository and building their lab assignment using a very basic git workflow.

**What are we focusing on in this class**:

Class 3 is highly conceptual, and usually the first appearance of serious cracks in student knowledge acquired via the prework. In particular, concepts in control flow cause the most trouble because of how the various structures can be applied to similar problems (doing the same task with an ‘if’ or a ‘while’, for instance). Infinite loops are inevitable and always cause a lot of frustration. Also provide an introduction to truthy/falsy conditions (probably best done by listing the falsy cases alone; all else is truthy).

Introduction to the CSS box model also exposes potential weaknesses in knowledge and concepts from the prework; furthermore, the integration with the developer tools in Chrome and also the necessity of understanding pixels as a measurement unit adds a new layer of complexity to what the students have already seen.

**Where we're headed**:

Next class will focus on CSS positioning, functions, and pair programming. A new git/GitHub flow will also be introduced to the students that comes with pair programming involving making a pull request, merging, and pulling changes down to their local machine.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the class reading and be prepared if students have questions.
1. Review the code demos and be sure to understand how to construct them within lecture. Review the respective markdown file for each demo.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

### Review of Arrays or Introduction to them if not covered in previous class

- **Why**
  - If we didn't have arrays, we'd have to store every item in a separate variable. This would be much longer to write out and less efficient.
- **What**
  - Arrays are ways that we can group together data in one location.
  - They are an accumulation of data, similar to a list, that can be used to hold information for later use.
- **How**
  - Instructor may choose to use replit to demo arrays.
  - Show how to create arrays of different types:
    - empty, mixed, nested
  - Target a specific value in array.
  - Use a for loop to traverse through an array.
  - Skip a value in an array.
  - Show how to add to an array:
    - Assign value to array using bracket notation
    - Could introduce push method here as well

### Control Flow

- **Why**
  - Control flow lets us control the flow of the execution of the code in our program.
- **What**
  - Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated.
- **How**
  - Review the following with the students:
    - Comparison Operator
    - Logical Operator
    - Evaluating Comparisons
    - Type coercion, weak typing, truthy/falsy

### JS Control Flow (loops, while, do while)

- **Why**
  - Loops are used in JavaScript to perform repeated tasks based on a condition.
- **What**
  - For loops: repeats until a specified condition evaluates to `false`.
    - **Statement 1** is executed (one time) before the execution of the code block.
    - **Statement 2** defines the condition for executing the code block
    - **Statement 3** is executed (everytime) after the code block has been executed

    ```js
    for(statement 1; statement 2; statement 3) {
      code block to be executed
    }
    ```

  - While loop: executes its statements as long as a specified condition evaluates to `true`.

    ```js
    while(condition) {
      statement to run
    }
    ```

  - do...while: repeats until a specified condition evaluates to `false`.

    ```js
    do {
      statement
    } while (condition)
    ```

- **How**
  - Instructor may choose to use Replit to demo.
  - Break down the syntax for each loop.
  - Demo a few examples of each loop using arrays and evaluating comparisons.
  - To help students understand how loops work, whiteboarding each pass through the loops may be helpful.

### CSS Box Model (code Demo)

- **Why**
  - This is a fundamental concept for the composition of HTML webpages.
- **What**
  - CSS box model is essentially a box that wraps around every HTML element.
  - CSS determines the size, position, and properties of these boxes.
- **How**
  - Demo of creating a basic layout with the box model.
  - Code Pen could be a good tool to use with the students so that it can be uploaded to their class repo after.

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Review Lab 03 instructions in canvas and review lab notes below for anything else that might stick out.

## Lab Notes

This lab provides a great opportunity for the instructional staff to help students work through their debugging process in the Chrome console and using console.log messages. The instructional staff should also make sure to ask students to explain what they are attempting to accomplish so students get used to talking about their code.

Point out that the technical requirements carry over from any prior labs for each module. For example, they are responsible for the tasks of lab 2 in addition to the tasks assigned in lab 3.

## What changed from previous class?

Students will still be using conditional logic, but integrating it deeper with loops. Students are also being introduced to their first major JS data structure: arrays!

## What bugs, issues, or surprises have come up in the past for this class?

Ensuring students have set up their repository properly with file structure and config files provided them with the previous class lab instruction. In particular, make sure the students' linter is working properly and they are utilizing the README template.

## General Comments

The goal for this class is to get the students comfortable working with the entire tool chain.
