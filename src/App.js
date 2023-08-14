import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false)

  return (
    <div className="App w-screen min-h-screen bg-[#000814] flex flex-col items-center">
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

    </div>
  );
}

export default App;
