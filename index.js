// Define the action types

const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const reset = () => {
  return {
    type: "RESET",
  };
};

const initialState = { count: 0 };

// Reducer Function

function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {});
  let listeners = [];

  // Function to get the current state

  function getState() {
    return state;
  }

  // Function to update state

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  // Function to listen for changes to the state

  function subscribe(listener) {
    listeners.push(listener); // Add listener to the list

    // Remove listener from the list
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(`Updated State:`, store.getState());
});

//  Initial State Verification

console.log(`Initial State:`, store.getState());

// Incrementing the Counter

store.dispatch(increment());
store.dispatch(increment());

// Decrementing the Counter

store.dispatch(decrement());

// Resetting the Counter

store.dispatch(reset());
