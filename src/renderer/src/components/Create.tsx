import Button from "./Button";
import TextInput from "./TextInput";

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
      <div className="flex flex-col gap-2">
        <h2>Name:</h2>
        <TextInput
          placeholderText="Name"
          onChange={onNameChange}
          name={name}
        ></TextInput>
        <h2>Password:</h2>
        <TextInput
          placeholderText="Password"
          onChange={onPasswordChange}
          name={password}
        ></TextInput>
        <h2>Password Again:</h2>
        <TextInput
          placeholderText="Password Again"
          onChange={onPasswordAgainChange}
          name={passwordAgain}
        ></TextInput>
      </div>
      <div className="flex justify-between">
        <Button text="Save"></Button>
        <Button text="Delete"></Button>
        <Button text="Back"></Button>
      </div>
    </aside>
  );
}

export default Create;
