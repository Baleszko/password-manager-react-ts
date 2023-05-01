import { useState } from "react";
import AppList from "./components/AppList";
import Create from "./components/Create";
import AddNewButton from "./components/AddNewButton";

interface ISubmitItem {
  name?: string;
  password?: string;
  passwordAgain?: string;
}

function App(): JSX.Element {
  const [submitItem, setSubmitItem] = useState<ISubmitItem | undefined>();
  const [createMenuIsOpen, setCreateMenuIsOpen] = useState(true);
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSubmitItem({
      ...submitItem,
      name: event.target.value,
    });
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSubmitItem({
      ...submitItem,
      password: event.target.value,
    });
  };

  const handlePasswordAgainChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSubmitItem({
      ...submitItem,
      passwordAgain: event.target.value,
    });
  };

  const handleCopyClick = (): void => {
    console.log("Copied");
  };
  const handleEditClick = (): void => {
    console.log("Edited!");
  };

  const handleCloseClick = (): void => {
    setCreateMenuIsOpen(false);
  };
  const handleOpenClick = (): void => {
    setCreateMenuIsOpen(true);
  };
  return (
    <div className="flex w-full min-h-screen relative">
      <AppList
        onCopyClick={handleCopyClick}
        onEditClick={handleEditClick}
      ></AppList>
      <div className="absolute left-5 bottom-5">
        <AddNewButton onClick={handleOpenClick}></AddNewButton>
      </div>
      {createMenuIsOpen ? (
        <Create
          onCloseClick={handleCloseClick}
          onNameChange={handleNameChange}
          onPasswordChange={handlePasswordChange}
          onPasswordAgainChange={handlePasswordAgainChange}
        ></Create>
      ) : undefined}
    </div>
  );
}

export default App;
