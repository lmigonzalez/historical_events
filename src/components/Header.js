import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

// No olvides agredar navlink para darle style al link dependiendo de la pagina


const Header = () =>{

	const todaysDate = moment().format("MMM DD")
	const tomorrowDate = moment().add(1, 'd').format("MMM DD")
	const yesterdayDate = moment().subtract(1, 'd').format("MMM DD")



	return(
		<header className="header">
			{/* <h2> {todaysDate} </h2> */}
			
				<ul className="links">
					<li className="link"> <NavLink activeClassName="active-link" to='/yesterday'>Yesterday <br/> <span>--{yesterdayDate}--</span></NavLink></li>
					<li className="link"> <NavLink activeClassName="active-link" to='/today'>Today <br/> <span>--{todaysDate}--</span> </NavLink> </li>
					<li className="link"> <NavLink activeClassName="active-link" to= '/tomorrow'>Tomorrow <br/> <span>--{tomorrowDate}--</span></NavLink> </li>
				</ul>

	
		</header>
	)
}

export default Header;