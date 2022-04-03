import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import TodaysEvents from "./TodaysEvent";








const Today = () =>{


	const todaysDateFetchFormat = {
		monthFormat: moment().format('MM'),
		dayFormat: moment().format('MM')
	}
	
	const [data, setData] = useState([])
	// console.log(todaysDateFetchFormat)
	
	const getTodayEvents = () =>{
		axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${todaysDateFetchFormat.monthFormat}/${todaysDateFetchFormat.dayFormat}`)
		.then(res=>{
			setData(res.data.events)
			// console.log(data)
		})
		.catch(err=>{
			console.log(err)
		})
	}
	
	const getData =()=>{
		getTodayEvents()
	}
	


	return(
		<div>
			<h1>Events Today</h1>
			<button onClick={getData}>Clickkk</button>
			{data.map((events=>{
				return(
					<TodaysEvents events = {events}/>
				)
			}))}
		</div>
	)
}

export default Today;