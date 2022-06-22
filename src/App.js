import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Help from './components/TopNavigation/NavigationComponents/Help';
import About from './components/TopNavigation/NavigationComponents/About';
import Corporateresponsibility from './components/TopNavigation/NavigationComponents/CorporateResponsibility';
import feedback from './components/TopNavigation/NavigationComponents/Feedback';
import NewsBlogs from './components/TopNavigation/NavigationComponents/NewsBlogs';
import Pressroom from './components/TopNavigation/NavigationComponents/Pressroom';

import Register from './components/Register/Register';

import TopNavigation from './components/TopNavigation/TopNavigation';

import { getToken, removeUserSession, setUserSession } from './Utils/Common';



function App() {

  const [showRegister, setRegister] = useState(false);
  const onClick = () => setRegister(showRegister => !showRegister);

  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    
    //plusSlides(slideIndex);
    //console.log(slideIndex);
  },[]);
  
  //let slideIndex = 1;

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  

  return (
    <div className="App">
      <React.StrictMode>
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
        <Switch>
          <Route exact path='/' Component/>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/feedback' Component={feedback}/>
          <Route exact path='/newsandblogs' Component={NewsBlogs}/>
          <Route exact path='/pressroom' Component={Pressroom}/>
          <Route exact path='/corpresponsility' Component={Corporateresponsibility}/>
          <Route exact path='/help' Component={Help}/>
        </Switch>
    
      </BrowserRouter>
    
        

      {showRegister &&
      <Register></Register>
}</React.StrictMode>

    </div>
  );
}



export default App;