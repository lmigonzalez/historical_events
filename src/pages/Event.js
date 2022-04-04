import React from "react";



const Events = (props) =>{
	const {events} = props

	// console.log(props.events)


	return(
		<div className="events">
			<h3>{events.year}</h3>
			<p>{events.text}</p>
		</div>
	)
}



export default Events