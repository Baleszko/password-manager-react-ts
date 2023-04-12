interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className="btn-blue">
      {text}
    </button>
  );
}

export default Button;
