import Dashboard from './Components/Dashboard';
import './App.css';
import Login from './Components/Login';
import Sign from './Components/Sign';
import { BrowserRouter, Link, Route, Routes,Outlet } from 'react-router-dom';
import Dash from './Components/Dash';
import Project from './Components/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Dash' element={<Dashboard />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
