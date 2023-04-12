import { useState } from 'react';

interface CreateProps {
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordAgainChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  password?: string;
  passwordAgain?: string;
}

function Create({
  onNameChange,
  onPasswordChange,
  onPasswordAgainChange,
  name,
  password,
  passwordAgain,
}: CreateProps): JSX.Element {
  return (
    <div className="bg-gray-800 w-2/5 p-4">
      <h2>Name:</h2>
      <input type="text" onChange={onNameChange} value={name}></input>
      <h2>Password:</h2>
      <input type="text" onChange={onPasswordChange} value={password}></input>
      <h2>Password Again:</h2>
      <input type="text" onChange={onPasswordAgainChange} value={passwordAgain}></input>
    </div>
  );
}

export default Create;
