import React from "react";



const TodaysEvents = (props) =>{
	const {events} = props

	console.log(props.events)


	return(
		<div>
			<h3>{events.year}</h3>
			<p>{events.text}</p>
		</div>
	)
}


export default TodaysEvents