import { useState } from 'react';
import Button from './Button';

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
    <aside className="bg-gray-800 w-2/5 min-w-min p-4 flex flex-col justify-between">
      <div>
        <h2>Name:</h2>
        <input type="text" onChange={onNameChange} value={name}></input>
        <h2>Password:</h2>
        <input type="text" onChange={onPasswordChange} value={password}></input>
        <h2>Password Again:</h2>
        <input type="text" onChange={onPasswordAgainChange} value={passwordAgain}></input>
      </div>
      <div className="flex justify-between">
        <Button text="Save"></Button>
        <Button text="Back"></Button>
      </div>
    </aside>
  );
}

export default Create;
