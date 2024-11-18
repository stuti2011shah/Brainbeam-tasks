import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Warning: Avoid using `eval` in production for security.
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(null);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div style={calculatorStyle}>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={inputStyle}
      />
      {result !== null && <h3 style={resultStyle}>Result: {result}</h3>}
      <div>
        {buttons.map((btn, index) => (
          <Button key={index} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

const calculatorStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const inputStyle = {
  width: '200px',
  textAlign: 'center',
  marginBottom: '10px',
  padding: '5px',
  fontSize: '16px',
};

const resultStyle = {
  color: 'green',
};

export default Calculator;
