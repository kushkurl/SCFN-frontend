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
		<NavLink to='/NavigationComponents/newsblogs' activeStyle>
			News & Blogs
		</NavLink>
		<NavLink to='/NavigationComponents/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/NavigationComponents/corporateresponsibility' activeStyle>
        Corporate Responsibility
		</NavLink>
		<NavLink to='/NavigationComponents/pressroom' activeStyle>
			Pressroom
		</NavLink>
		<NavLink to='/NavigationComponents/feedback' activeStyle>
			Feeedback
		</NavLink>
		<NavLink to='/NavigationComponents/help' activeStyle>
			Help
		</NavLink>
		<NavLink to='/NavigationComponents/help' activeStyle>
			Sevices
		</NavLink>
		<NavLink to='/NavigationComponents/help' activeStyle>
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
