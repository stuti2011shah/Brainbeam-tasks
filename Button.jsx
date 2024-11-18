import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)} style={buttonStyle}>
      {label}
    </button>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9',
};

export default Button;
