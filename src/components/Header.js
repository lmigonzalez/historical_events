import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

// No olvides agredar navlink para darle style al link dependiendo de la pagina


const Header = () =>{

	const todaysDate = moment().format("MMM Do YYYY")
	


	return(
		<header>
			<h2> {todaysDate} </h2>
			<nav>
				<ul>
					<li> <Link to='/yesterday'>Yesterday</Link> </li>
					<li> <Link to='/'>Today</Link> </li>
					<li> <Link to= '/tomorrow'>Tomorrow</Link> </li>
				</ul>

			</nav>
		</header>
	)
}

export default Header;