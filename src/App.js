import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <main className='main'>
        <Navbar/>
        {/* <Profile/> */}
        <Dialogs/>
      </main>
    </div>
  );
}

export default App;
