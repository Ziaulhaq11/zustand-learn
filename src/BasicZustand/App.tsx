import { useEffect } from "react";
import "../App.css";
import { useCounterStore } from "./store";

const logStore = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const changeCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);
  useEffect(() => {
    logStore();
    changeCount();
  }, []);
  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>IncrementAsync</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
