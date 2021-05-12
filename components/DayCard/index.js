import React from 'react'


export default function DayCard({
	
}) {
	

	return (
		<button
            
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            onClick={()=> {
              console.log('hello')
            }}
          >
            <h3 className="text-2xl font-bold">Wednesday</h3>
            <p className="mt-3 text-2xl">
              asdf
            </p>
            <p className="mt-3 text-2xl">
              asdf
            </p>
            <div>
              {/* <h2>{formattedDate}</h2> */}
              
            </div>
          </button>
	)
}
