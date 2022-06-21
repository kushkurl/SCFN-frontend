import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './Home';
import Register from './components/Register/Register';
import TopNavigation from './components/TopNavigation/TopNavigation';


import { getToken, removeUserSession, setUserSession } from './Utils/Common';



function App() {

  const [showRegister, setRegister] = useState(false);
  const onClick = () => setRegister(showRegister => !showRegister);

  const [authLoading, setAuthLoading] = useState(true);
  const [slideIndex, setIndex] = useState(1);
  useEffect(() => {
    
    plusSlides(slideIndex);
    console.log(slideIndex);
  },[]);
  
  //let slideIndex = 1;

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  const plusSlides =(n)=> {
    //slideIndex += n
    setIndex(slideIndex + n)
    //let n = 1;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {setIndex(a => 1)}    
    if (slideIndex < 1) { setIndex(a => slides.length) 
      //slideIndex = slides.length
    }
    //console.log(getValue());
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    //for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex-1].style.display = "block";  
    //dots[slideIndex-1].className += " active";
  }

  return (
    <div className="App">
      <div style={{background: '#fff'}}>
        <img src={require('./media/scfn.png')} style={{maxHeight: "110px", marginLeft: '20px'}} alt="loading..." />
      <div style={{float: 'right', display: 'flex', marginTop: '9px'}}>

      <button  className="button-40" role="button">MarketPlace</button>
      <button  className="button-40" role="button">ClubHouse</button>

        <button style={{marginRight: '6px'}} className="button-40" role="button">Sign In</button>
        <div className="v1"></div>
        <button onClick={onClick} className="button-40" role="button">Sign Up</button>
      </div>
      </div>


      <BrowserRouter>   
        <TopNavigation></TopNavigation>
    
      </BrowserRouter>
      <div style={{display: "flex", padding: '25px'}}>
      <div style={{width: "43%", height: "400px"}}>
        <h1 style={{marginBottom: '15px', color: "#2b5ca1e6", fontSize: "60px", paddingLeft: "30px"}}>FUEL YOUR</h1>
        <h1 style={{marginBottom: '15px', marginTop: '1px', color: "#b64f60f5", fontSize: "60px", paddingLeft: "30px"}}>PASSION</h1>
        <div style={{fontWeight: '500', marginLeft: '33px'}}>Stock Car Coins Discount App Is Designed To Save You Money On Your Daily Purchases And Secure Sponsorship For Your Favorite Motorsports Team, Track, Series, Or Charity.</div>
        
        <div style={{ display: 'flex', padding: '22px 0px 0px 26px'}}>
          <div style={{background: '#2b5ca1e6'}} className='button-10' role="button">ClubHouse</div>
          <div style={{background: '#b64f60f5'}} className='button-10' role="button">MarketPlace</div>
        </div>
        </div>

        <div className="slideshow-container">

<div className="mySlides fade">
  
  <img  src={require('./media/Kimi-Riakkonen.jpg')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.8' }} />
  <div className="text">Kimi Riakkonen</div>
</div>

<div className="mySlides fade">
  
  <img  src={require('./media/jeffGordon.png')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.8' }} />
  <div className="text">Jeff Gordon</div>
</div>

<div className="mySlides fade">
  
  <img  src={require('./media/Sebestian.png')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.8' }} />
  <div className="text">Sebestian Vettel</div>
</div>

<div className="mySlides fade">
  
  <img  src={require('./media/lewisHamilton.jpg')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.8' }} />
  <div className="text">Lewis Hamilton</div>
</div>

<div style={{position:'absolute', top: '50%', left: '17%'}}>
<div> <a className="prev" onClick={() => plusSlides(1)}>❮</a></div>
<div style={{marginTop: '40px'}}> <a className="next" onClick={() => plusSlides(-1)}>❯</a></div>
  </div>

</div>




      
      </div>
      {showRegister &&
      <Register></Register>
}

    </div>
  );
}



export default App;