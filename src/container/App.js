import ShowUsers from './../components/showUsers/showUsers';
import EditAddUser from '../components/edit-addUser/edit_addUser';
import {useSelector} from 'react-redux';

function App() {
  const  {showEdit_AddPage} = useSelector(store=>store);

  return (
    <>
      <ShowUsers/>
      {showEdit_AddPage ? <EditAddUser/> : null }
      
    </>
  );
}

export default App;
