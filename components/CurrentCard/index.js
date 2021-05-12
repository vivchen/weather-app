import React from 'react'


export default function CurrentCard({...props}) {

    console.log('current card data', props)
	
    const currTemp = props.data[0][0].main.temp
    // const feelsLike = props.data[0].main.feels_like
    // const day = props.data[0].day

	return (
		<div>
  
            <p className="mt-3 text-2xl">
            Right now {Math.round(currTemp)} degrees
            </p>
            <p className="mt-3 text-2xl">
            {/* Feels like {feelsLike} degrees */}
            </p>
            <div>
            
            {/* <h2>{formattedDate}</h2> */}
            {/* <h2>{day}</h2> */}
            
            </div>

			
		</div>
	)
}
