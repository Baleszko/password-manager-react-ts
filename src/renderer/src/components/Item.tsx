import Button from './Button';

interface ItemProps {
  onCopyClick: () => void;
  onEditClick: () => void;
}

function Item({ onCopyClick, onEditClick }: ItemProps): JSX.Element {
  return (
    <div className="min-w-max w-52 h-32 bg-gray-800 rounded-2xl p-3 grid grid-cols-2 justify-items-center gap-5">
      <h2 className="col-start-1 col-end-3 center">item</h2>
      <div className="self-end ">
        <Button onClick={onCopyClick} text="Copy"></Button>
      </div>
      <div className="self-end ">
        <Button onClick={onEditClick} text="Edit"></Button>
      </div>
    </div>
  );
}

export default Item;
