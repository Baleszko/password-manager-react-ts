import PlusSvg from "../assets/plus.svg";

function AddNewButton(): JSX.Element {
  return (
    <button className=" w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center">
      <img
        className="w-8 h-8 stroke-1 stroke-gray-100 "
        src={PlusSvg}
        alt="Plus icon, Adding Button"
      ></img>
    </button>
  );
}

export default AddNewButton;
