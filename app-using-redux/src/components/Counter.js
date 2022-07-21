import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const { counter, showCounter } = useSelector((state) => {
    return {
      counter: state.counter.counter,
      showCounter: state.counter.showCounter,
    };
  });

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.showCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const incrementByFiveHandler = () => {
    // dispatch({ type: "incrementByFive", unit: 5 });
    dispatch(counterActions.incrementBy(5)); //{ type: "UNIQUE_IDENTIFIER", payload: 5 }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementByFiveHandler}>increment by 5</button>

      <div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
