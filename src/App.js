import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route,Routes} from "react-router-dom";
import Home from './component/home/Home';
import About from './component/about/About';
import Service from './component/service/Service';
import Contact from './component/contact/Contact';
import NavBar from './component/navbar/NavBar';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/contact" Component={Contact}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
