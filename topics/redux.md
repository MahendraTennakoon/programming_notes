# Redux

## Introduction

* Redux is a **predictable state container** (state container since it holds state. predictable since **same actions in the same order** will always result in the same state) for JavaScript apps.
* It provides a great developer experience.
  * live code editing
  * time travel debugging etc.
    * With Redux it is possible to trace every mutation to the action that caused it.
    * It is also possible to record user sessions and reproduce the result by replaying the actions.
* The whole state of an app that uses redux is stored in an **object tree (a tree structure holding objects at the nodes)** inside a **single store**.
* The only way to change the state tree is to emit an **action (a plain JS object that describes what happened in the app)**.
* **Reducers** are used to describe how the actions modify the state tree.

## Motivation

* JavaScript apps need to manage more state than ever before.
* It has become increasing difficult to trace when state is modified, how it is modified and who modified it.
* When a system is opaque and non-deterministic (can work differently on different runs even for the same inputs), it's hard to maintain and reproduce bugs.
* The modern frontend requirements are becoming increasingly complex
  * optimistic updates (UI behaves as if a change was successfully completed before receiving confirmation from the server)
  * server-side rendering
  * fetching data before route transitions
* This complexity is hard to handle since **mutation** and **asynchronicity** are very difficult concepts to reason about together.
  * React tries to solve this in the view layer by removing asynchrony and direct DOM manipulation.
  * Redux tries to make state changes predictable (same actions in the same order will always result in the same state) by  imposing certian restrictions on state changes. These restrictions are contained in the three principles of redux. 
