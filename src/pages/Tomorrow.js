import React, {useEffect} from "react";

import {TailSpin} from 'react-loader-spinner';


import Events from "./Event";

const Tomorrow = (props)=>{
 
	const randomKey = () =>{
		let random = Math.random()* 100000
		return random

	}



	useEffect(()=>{
		props.tomorrowData()
	}, [])



	return(
		<div className="event-content">

			{
				props.data.length <= 0? <div className="spinner">
				<TailSpin  color="#000" height={80} width={80} />
				</div>:
				props.data.map((events=>{
					return(
						<Events key = {randomKey()}  events = {events}/>
					)
				}))
			}

		</div>
	)
}

export default Tomorrow;