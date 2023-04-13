interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

function Input({ onChange, name }: InputProps): JSX.Element {
  return <input type="text" onChange={onChange} value={name}></input>;
}

export default Input;
