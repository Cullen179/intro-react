import React, { useState } from 'react';

function InputDisplay() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your text"
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default InputDisplay;