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
	<>
	<Nav>
		<Bars />

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
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/register'>Register</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default TopNavigation;
