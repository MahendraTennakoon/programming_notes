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

## Core Concepts

* The entire state of an app is a plain JavaScript object.
* This object is similar to a model except there are no setters (this is so that different parts of the code can't change the state randomly).
* To change something in the state, an **action** has to be dispatched (an action is a plain JavaScript object that describes what happened).
* Enforcing that every state change has to be an action, makes it easier understand what is going on in the app. If state changes, we can always trace which actions caused the change.
* To connect the state and the actions, **reducers** are used.
* A reducer is simply a function that takes in an action and state as parameters and returns the next state of the app.

## Three Principles of Redux

* Single source of truth
  * The state of the entire app is stored in an object tree within a single store (an object that holds the application state). 
  * The state from the server can be serialized and hydrated (populated) into the client with minimum effort.
  * Makes it easier to debug or inspect an application.
  * It is trivial to implement things like undo/redo state which have traditionally been difficult to implement.
* State is read-only
  * The only way to change state is to emit an action.
  * This ensures that views or network callbacks will never directly modify the state.
  * Instead, they express an intent to modify the state.
  * All changes are centralized and happen one by one in a strict order
    * therefore, there are no suble race conditions to watch out for
  * since actions are plain JavaScript objects, they can be:
    * logged
    * serialized
    * replayed later for debugging
* Changes are made with pure functions
  * Pure reducers are written to specify how the state tree is modified.
  * Reducers are just pure functions that take in the previous state and an action and returns the new state.
    * A pure function is a function that returns the same value for the same inputs.
    * They should also be free of side effects (no mutations of local static variables or non local variables).
    * This is what enables features like hot reloading and time travel debugging.
  * Reducers **should always return new state objects instead of mutating the previous state**.
  * Since reducers are just pure functions it is possible to:
    * Control the order in which they are called.
    * Pass additional data.
    * Make reusable reducers for common tasks such as pagination.
