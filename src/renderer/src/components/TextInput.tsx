interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholderText: string;
}

function Input({ onChange, name, placeholderText }: InputProps): JSX.Element {
  return (
    <input
      type="text"
      className="text-gray-100 placeholder:text-gray-400 placeholder:text-sm placeholder:text- bg-gray-600 border border-gray-200 focus:outline-none focus:border-blue-500  focus:ring-blue-500  focus:ring-2 p-2 rounded-lg w-full"
      onChange={onChange}
      value={name}
      placeholder={placeholderText}
    ></input>
  );
}

export default Input;
