import { useState } from 'react';
import AppList from './components/AppList';
import Create from './components/Create';

interface ISubmitItem {
  name?: string;
  password?: string;
  passwordAgain?: string;
}

function App(): JSX.Element {
  const [submitItem, setSubmitItem] = useState<ISubmitItem | undefined>();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSubmitItem({
      ...submitItem,
      name: event.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSubmitItem({
      ...submitItem,
      password: event.target.value,
    });
  };

  const handlePasswordAgainChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSubmitItem({
      ...submitItem,
      passwordAgain: event.target.value,
    });
  };

  const handleCopyClick = (): void => {
    console.log('Copied');
  };
  const handleEditClick = (): void => {
    console.log('Edited!');
  };
  return (
    <div className="flex w-full min-h-screen">
      <AppList onCopyClick={handleCopyClick} onEditClick={handleEditClick}></AppList>
      <Create
        onNameChange={handleNameChange}
        onPasswordChange={handlePasswordChange}
        onPasswordAgainChange={handlePasswordAgainChange}
      ></Create>
    </div>
  );
}

export default App;
