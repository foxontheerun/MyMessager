import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


function App(props) {
  return (<BrowserRouter>
              <div className='app-wrapper'>
                  <Header/>
                  <main className='main'>
                      <Navbar/>
                      <div className='app-wrapper-content'>
                          <Routes>
                              <Route path='/profile' element={<Profile />}/>
                              debugger;
                              <Route path='/messages' element={<DialogsContainer />}/>
                              <Route path='/news' element={<News />}/>
                          </Routes>
                      </div>
                  </main>
              </div>
            </BrowserRouter>);
}

export default App;
