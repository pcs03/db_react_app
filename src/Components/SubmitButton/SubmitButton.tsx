import React from "react";

interface SumbitButtonProps {
  onClick: () => void
}

const SubmitButton: React.FC<SumbitButtonProps> = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>Submit</button>
  );
};