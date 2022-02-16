import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import {Main, Reguest, Headers, Codes, Auth} from  './components'

import './App.css';

function App() {

  return (
    
    <div className="App">
      <header>
        <nav style={{
          display: 'flex', 
          justifyContent: 'space-around'
        }}>
           <NavLink to={'/'} > HTTP </NavLink>
           <NavLink to={'/reguests'} > Виды запросов </NavLink>
           <NavLink to={'/headers'} > HTTP-заголовк </NavLink>
           <NavLink to={'/response'} > Коды ответа </NavLink>
           <NavLink to={'/auth'} > Авторизация  </NavLink>

        </nav>
      </header>
      <div>API</div>
      <Routes>
        <Route  path="/" element={<Main />}/>
        <Route path='/reguests' element={<Reguest />} />
        <Route path="/headers" element={  <Headers />} />
        <Route path="/response" element={  <Codes />} />
        <Route path="/auth" element={  <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
