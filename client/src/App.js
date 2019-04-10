import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import SignIn from './Components/signIn/signIn'
import WrongSignIn from './Components/wrongSignIn/WrongSignIn'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SignIn />
      <WrongSignIn />  
      <Footer />
      </div>
    );
  }
}

export default App;
