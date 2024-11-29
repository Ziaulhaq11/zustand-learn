import CountProvider, { useCountStore } from "./CountProvider";

type AppProps = {
  initialCount?: number;
};

export default function App({ initialCount = 5 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <h1 className="text-2xl font-bold">Hello world</h1>
      <Component />
    </CountProvider>
  );
}

function Component() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.inc);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
