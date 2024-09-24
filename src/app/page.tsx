"use client"
import { useCountStore } from "@/store";

export default function Home() {
  const count = useCountStore((state) => state.count);
  const { decrement, increment } = useCountStore((state) => state.actions);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
      <div>{count}</div>
    </div>
  );
}
