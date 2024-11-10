# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. The primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.


## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## How to run your code.

- Ensure that you have node.js installed.
- Open the terminal( In VS Code, you open it with Terminal - New Terminal)
- To run the code: use 'node index.js'

## A brief overview of my approach.

- Created functions that define each action type (increment, decrement, reset).
- Created reducer function to handle each action type and return a new state based on the dispatched action.
- Create a Redux-inspired store that holds the state of the tally counter. The store includes the following functions: 
     - getState which returns the current state.
     - dispatch which takes an action (INCREMENT, DECREMENT, RESET) and updates the state accordingly.
     - subscribe which logs the new state to the console.


## Challenges you faced and how you overcame them.
Developing a Redux-inspired store from scratch was a new experience. It required understanding the core functionalities of Redux, such as action dispatching, state management, and the subscription mechanism.

## Solution**: 
- I did A LOT of research to ensure that I understood what was required of me and what I had to do. I then broke down the problem into smaller components. 
- Building the `dispatch`, `getState`, and `subscribe` methods step-by-step helped me understand how they work together to manage and observe state changes effectively.



