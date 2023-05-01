import PlusSvg from "../assets/plus.svg";

interface AddNewButtonProps {
  onClick: () => void;
}

function AddNewButton({ onClick }: AddNewButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className=" w-16 h-16 bg-blue-600 hover:bg-blue-500 rounded-full flex justify-center items-center"
    >
      <img
        className="w-10 h-10"
        src={PlusSvg}
        alt="Plus icon, Adding Button"
      ></img>
    </button>
  );
}

export default AddNewButton;
