import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;

// import { createStore } from "redux";
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "incrementByFive") {
//     return {
//       counter: state.counter + action.unit,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// const store = createStore(counterReducer);
