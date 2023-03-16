import React from "react";
import { useState } from "react";

interface TextInputProps {
  label: string
}

const TextInput: React.FC<TextInputProps> = ({ label }) => {
  const [input, setInput] = useState('');

  const handeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor={label}>{label}</label>
      <input id={label} type="text" value={input} onChange={handeInputChange}></input>
    </div>
  )
}

export default TextInput;
