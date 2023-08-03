import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(3);
  const [input, setInput] = useState('');
  let wordCount = input=='' ? 0 : input.split(' ').length;

  useEffect(() => {
    const id = setInterval(() => {
        setCount(n => {if (n === 1) {clearInterval(id)}; return n - 1});
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">⏰ Timer</h1>
      <textarea
        className="mt-4 p-4 border border-gray-300 rounded resize-none w-80 h-40"
        onChange={(event) => setInput(event.target.value)}
        placeholder="Start typing..."
        disabled={count === 0}
      />
      <p className="mt-2 text-xl font-semibold">{count}</p>
      <p className="mt-2 text-xl font-semibold">You have typed {wordCount} words</p>
    </div>
  );
}
