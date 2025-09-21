import { useState } from "react";

export function useCounter(initial: number = 0) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount((v) => v + 1);
  const dec = () => setCount((v) => v - 1);
  const reset = () => setCount(initial);

  return { count, inc, dec, reset };
}
