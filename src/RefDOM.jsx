import {useRef} from 'react';

function RefForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <h1>useRef form</h1>
      <input className='border border-black' ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

function Form() {
  function handleClick() {
    const inputElement = document.querySelector('input');
    if (inputElement) {
      inputElement.focus();
    }
  }

  return (
    <>
      <h1>QuerySelector form</h1>
      <input className='border border-black' />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

export default function app() {
  return (
    <div>
      <Form/>
      <Form/>
      <RefForm/>
      <RefForm/>
    </div>
  )
}
