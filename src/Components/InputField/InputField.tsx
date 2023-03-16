import React from "react";
import TextInputBox from "../TextInput/TextInput";
import SubmitButton from "../SubmitButton/SubmitButton"

const InputField: React.FC = () => {

  const handleSubmit = (event: React.) => {
    setInput(event.target.value);
  };

  return (
    <div className="input-field">
      <TextInputBox label="name"/>
      <TextInputBox label="age"/>
      <SubmitButton onClick={handleSumbit}
    </div>
  );
};

export default InputField;