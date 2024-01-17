import { useContext } from 'react';
import UserDetailContext from '../context/UserDetailContext';
import Dashboard from './Dashboard';
import DNSForm from './DNSForm';

function Home() {
  const { isLoggedin, setIsloggedIn, userName, setUserName } =
    useContext(UserDetailContext);
  return (
    <>
      <div className="home">Welcome {userName}</div>
      <Dashboard />
    </>
  );
}

export default Home;
