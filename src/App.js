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

        <div className='Main-Banner'>

          <div className='Nav-Link-Bar'>

            <NavLink exact to='/' className='Main-Banner-Link'>Main</NavLink>
            <NavLink to='/politics' className='Main-Banner-Link'>Politics</NavLink>
            <NavLink to='/sport' className='Main-Banner-Link'>Sport</NavLink>
            <NavLink to='/media' className='Main-Banner-Link'>Media</NavLink>
            <NavLink to='/economy' className='Main-Banner-Link'>Economy</NavLink>
          </div>
          <div className='Main-Text'>
            <h1>Feterson</h1>
            <p>The London Ambulance Service (LAS) has said that a computer crash on 8 June forced staff to revert to pen and paper to record calls from the public.
              The problem arose because of technical issues implementing a new emergency computer system.</p>
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/economy' element={<Economy />} />
          <Route path='/politics' element={<Politics />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/media' element={<Media />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
