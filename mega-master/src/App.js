import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Brand from './Components/Brand';
import Content from './Components/Content';
import CallbackForm from './Components/Callback';
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <Content />
      <CallbackForm />
      <Footer />
    </div>
  );
}

export default App;
