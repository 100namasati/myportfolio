import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import OurApproach from './Components/Approch/OurApproach';
import ClimateScreen from './Components/ClimateProjects/ClimateScreen';
import About from './Components/About/About';
import Faq from './Components/Faq/Faq';
import Contact from './Components/Contact/Contact';
import Ekopoints from './Components/Resources/Ekopoints';
import Redeme from './Components/Resources/Redeme';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import DashboardHeader from './Components/Dashboard/Dashboardheader/DashboardHeader';
import { withRouter } from './HOC';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const [user,setUser]=useState()
  const location = useLocation();
  useEffect(()=>{
    let user:any=localStorage.getItem("user")
   setUser(user)
  },[])
  return (
    <div className="App">
      {user ? <DashboardHeader/>: location.pathname === "/login" || location.pathname === "/sign-up" ? "":<Header/>}

      <Routes>
        {
          !user?(
            <>
             <Route path='/' element={<Home/>}/>
        <Route path='/our-approach' element={<OurApproach/>}/>
        <Route path='/climate-project' element={<ClimateScreen/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/redeem' element={<Ekopoints/>}/>
        <Route path='/eko-points' element={<Redeme/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up/:accountType' element={<Register/>}/>
     
            </>
          ):""
        }
        </Routes>
      {user ?"":location.pathname === "/login"||location.pathname === "/sign-up"?"" : <Footer />}

    </div>
  );
}

export default withRouter(App);
