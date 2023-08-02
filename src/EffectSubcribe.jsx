import React, { useEffect, useState } from "react";

export default function App() {
  const [a, setA] = useState(true);
  useEffect(() => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => console.log('click'))
    btn.addEventListener('click', () => console.log('click'))
  }, [])

  return (
    <>
      <button onClick={() => setA(!a)}>Click</button>
    </>
  )
}
