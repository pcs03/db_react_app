import React from 'react'

interface Props {
  name: string
  age: number
};

const User: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="User">
      <h2>Username: {name}</h2>
      <p>User age: {age}</p>
    </div>
  );
};

export default User;
