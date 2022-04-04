import React, {useEffect} from "react";
import Events from "./Event";
import {TailSpin} from 'react-loader-spinner';



const Today = (props) =>{

	const {data, todayData} = props
	const randomKey = () =>{
		let random = Math.random()* 100000
		return random

	}

	useEffect(()=>{
		todayData()
	}, [])

	


	return(
		<div className="event-content">
			
			
			{
				data.length <= 0? <div className="spinner">
				<TailSpin  color="#000" height={80} width={80} />
				</div>:
				data.map((events=>{
					return(
						<Events key = {randomKey()}  events = {events}/>
					)
				}))
			}
			
			
		</div>
	)
}

export default Today;