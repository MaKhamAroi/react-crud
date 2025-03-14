import logo from './logo.svg';
import './App.css';
import React from 'react';
import Users from './Users';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom"
import UserUpdate from './UserUpdate';
import UserCreate from './UserCreate';
import UserDelete from './UserDelete';

export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/update/:id' element={<UserUpdate />}></Route>
        <Route path='/create' element={<UserCreate />}></Route>
        <Route path='/delete' element={<UserDelete />}></Route>
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
