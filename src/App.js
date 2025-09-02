import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Title from './Components/Title/Title';

import HelloWorld from './Components/HelloWorld/HelloWorld';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <div>
    {/* <Login/> */}
    {/* <Dashboard/> */}
    {/* <Register/> */}
    {/* <Title/>   */}
   
    {/* <HelloWorld/> */}
    <Router>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/helloworld' element={<HelloWorld/>}/>
      <Route path='/title' element={<Title/>}/>
    </Routes>
    </Router>
   </div>
  );
}

export default App;
