import Item from "./Item";

interface AppListProps {
  onCopyClick: () => void;
  onEditClick: () => void;
}

function AppList({ onCopyClick, onEditClick }: AppListProps): JSX.Element {
  return (
    <div className="w-full min-w-min p-4 flex content-start justify-start flex-wrap gap-4 relative">
      <Item onCopyClick={onCopyClick} onEditClick={onEditClick}></Item>
      <Item onCopyClick={onCopyClick} onEditClick={onEditClick}></Item>
      <Item onCopyClick={onCopyClick} onEditClick={onEditClick}></Item>
      <Item onCopyClick={onCopyClick} onEditClick={onEditClick}></Item>
    </div>
  );
}

export default AppList;
