import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBar';

const TopNavigation = () => {
return (
	<div>
	<Nav style={{height: "50px", justifyContent: 'center', display: 'block'}}>
		

		<NavMenu>
		<NavLink to='/NavigationComponents/newsblogs' activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			News & Blogs
		</NavLink>
		<NavLink to='/NavigationComponents/about'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
			About
		</NavLink>
		<NavLink to='/NavigationComponents/corporateresponsibility'  activeStyle={{ fontWeight:'600', background: '#ddd8d8' }}>
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
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
		
	</Nav>
	</div>
);
};

export default TopNavigation;
