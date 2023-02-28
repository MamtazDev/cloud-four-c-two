import './App.css';
import Account from './components/Account/Account';
import Sidebar from './components/Account/Sidebar';
import Login from './components/Register/Login';

function App() {
  return (
  <div>
    {/* <Login/> */}
    <Sidebar />
    <Account />
  </div>
  );
}

export default App;
