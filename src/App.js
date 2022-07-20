
import './App.css';
import  React  from 'react';
import { Route,Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Userlist from './components/Userlist';
import Counter from './components/Counter';
import EmployeesRedux from './components/EmployeesRedux';
import CounterRedux  from './components/CounterRedux'

function App() {
  return (
    <React.Fragment>
       <Navbar/>
       <Routes>
            <Route  path={'/'}  element={<HomePage/>} />    
            <Route  path={'/employees'}  element={<Employees/>} />  
            <Route  path={'/counter'}  element={<Counter/>} />  
            <Route  path={'/users'}  element={<Userlist/>} />  
           

       </Routes>

 
 
      
    </React.Fragment>
  );
}

export default App;
