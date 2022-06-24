import React from 'react';
import {
	BrowserRouter as Router,
	Route, 
	Switch
  } from "react-router-dom";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBar';

import About from './NavigationComponents/About';
import CorporateResponsibility from './NavigationComponents/CorporateResponsibility';
import Feedback from './NavigationComponents/Feedback';
import Help from './NavigationComponents/Help';
import NewsBlogs from './NavigationComponents/NewsBlogs';
import Pressroom from './NavigationComponents/Pressroom';
import Dashboard from '../Dashboard/Dashboard';
import MarketPlace from '../Marketplace/MarketPlace';



const TopNavigation = () => {
return (
	<Router>
	<Nav style={{height: "50px", justifyContent: 'center', display: 'block'}}>
		<NavMenu>
		<NavLink to='/' activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Home
		</NavLink>
		<NavLink to='../Marketplace/MarketPlace' activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			MarketPlace
		</NavLink>
		<NavLink to='/NavigationComponents/newsblogs' activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			News & Blogs
		</NavLink>

		<NavLink to='/NavigationComponents/about'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			About
		</NavLink>
		<NavLink to='/NavigationComponents/CorporateResponsibility'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
        Corporate Responsibility
		</NavLink>
		<NavLink to='/NavigationComponents/pressroom'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Pressroom
		</NavLink>
		<NavLink to='/NavigationComponents/feedback'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Feeedback
		</NavLink>
		<NavLink to='/NavigationComponents/help'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Help
		</NavLink>
		<NavLink to='/NavigationComponents/Services'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Sevices
		</NavLink>
		<NavLink to='/NavigationComponents/help'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			Track Orders
		</NavLink>
		
		</NavMenu>
		
	</Nav>

  
	<Switch>
          <Route exact path='/'><Dashboard></Dashboard></Route>
		  <Route path='/Marketplace/MarketPlace'><MarketPlace></MarketPlace></Route>
          <Route  path='/NavigationComponents/about' > <About></About> </Route>
          <Route exact path='/NavigationComponents/feedback' ><Feedback></Feedback></Route>
          <Route exact path='/NavigationComponents/newsblogs'><NewsBlogs></NewsBlogs></Route>
          <Route exact path='/NavigationComponents/pressroom' ><Pressroom></Pressroom></Route>
          <Route exact path='/NavigationComponents/CorporateResponsibility' ><CorporateResponsibility></CorporateResponsibility></Route>
          <Route exact path='/NavigationComponents/help'><Help></Help></Route>
      
		  </Switch>
     
	</Router>
	
);
};

export default TopNavigation;
