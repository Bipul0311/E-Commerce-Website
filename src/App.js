import React from 'react';
import './App.scss';
import  Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";





const App = () => {
  return (
    <div className="container">
      
       <Header/>
       <Footer/>
       <MainContent/>
      
       
    </div>
   
  );
}

export default App;
