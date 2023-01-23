import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Politics from './components/Politics/Politics';
import Sport from './components/Sport/Sport';
import Media from './components/Media/Media';
import Economy from './components/Economy/Economy';
import MainPage from './components/MainPage/MainPage';



function App() {


  return (
    <BrowserRouter>
      <div className="App">
      <div>
          <NavLink exact to ='/'>Main</NavLink>
          <NavLink to ='/politics'>Politics</NavLink>
          <NavLink to ='/sport'>Sport</NavLink>
          <NavLink to ='/media'>Media</NavLink>
          <NavLink to ='/economy'>Economy</NavLink>
        </div>
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route path='/economy' element={<Economy/>}/>
          <Route path='/politics' element={<Politics/>}/>
          <Route path='/sport' element={<Sport/>}/>
          <Route path='/media' element={<Media/>}/>
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
