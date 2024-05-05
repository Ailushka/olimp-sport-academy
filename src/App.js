import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Timetable from "./Components/Timetable/Timetable";
import Price from "./Components/Price";
import Gallery from "./Components/Gallery";
import ContactPage from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Feature />
      <Timetable />
      <Price />
      <Gallery />
      <ContactPage />
    </div>
  );
}

export default App;
