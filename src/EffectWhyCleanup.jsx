import { useEffect, useState } from "react";

function App1() {
  useEffect(() => {
    console.log('connect')

    // return () => console.log('disconnect')

  }, [])
  return (
    <>
      <p>Connect</p>
    </>
  )
}

export default function App() {
  const [a, setA] = useState(true);

  return (
    <>
      <button onClick={() => setA(!a)}>Click</button>
      {a && <App1 />}
    </>
  )
}
