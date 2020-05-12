import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//ROUTING
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

//Component
import Header from './Components/Header';
import Brand from './Components/Brand';
import {CallbackForm} from './Components/Callback';
import Footer from "./Components/Footer";
import Content from './Components/Content';

//Page
import Samsung from "./Pages/Samsung";
import Sony from './Pages/Sony';
import GooglePixel from './Pages/GooglePixel';
import OnePlus from './Pages/OnePlus';
import Honor from './Pages/Honor';
import Motorola from './Pages/Motorola';
import Nokia from './Pages/Nokia';
import Lg from './Pages/Lg';
import Htc from './Pages/Htc';
import Apple from './Pages/Apple';
import Xiaomi from './Pages/Xiaomi';
import Meizu from './Pages/Meizu';

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <Router>
        <Route exact path="/" component={Content} />
        <Route path="/samsung" component={Samsung} />
        <Route path="/sony" component={Sony} />
        <Route path="/google-pixel" component={GooglePixel} />
        <Route path="/one-plus" component={OnePlus} />
        <Route path="/honor" component={Honor} />
        <Route path="/motorola" component={Motorola} />
        <Route path="/nokia" component={Nokia} />
        <Route path="/lg" component={Lg} />
        <Route path="/htc" component={Htc} />
        <Route path="/apple" component={Apple} />
        <Route path="/xiaomi" component={Xiaomi} />
        <Route path="/meizu" component={Meizu} />
      </Router>
      <CallbackForm />
      <Footer />
    </div>
  );
}

export default App;
