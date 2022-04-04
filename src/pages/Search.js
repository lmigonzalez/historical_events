import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import {TailSpin} from 'react-loader-spinner';

import Events from "./Event";


const Search = (props) =>{
	
	const {data, searchNewDate, newDate} = props

	const randomKey = () =>{
		let random = Math.random()* 100000
		return random

	}

	// useEffect(()=>{
	// 	searchNewDate()
	// }, [newDate])




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


export default Search;