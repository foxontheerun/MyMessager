import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App(props) {
    debugger;
  return (<BrowserRouter>
              <div className='app-wrapper'>
                  <Header/>
                  <main className='main'>
                      <Navbar/>
                      <div className='app-wrapper-content'>
                          <Routes>
                              <Route path='/profile' element={<Profile store={props.store}/>}/>
                              <Route path='/messages' element={<Dialogs store={props.store}/>}/>
                              <Route path='/news' element={<News />}/>
                          </Routes>
                      </div>
                  </main>
              </div>
            </BrowserRouter>);
}

export default App;
