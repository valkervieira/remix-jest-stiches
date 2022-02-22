import { useState } from "react";
import { Button } from "~/components/Button";

export default function Index() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <span role="log">{count}</span>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
