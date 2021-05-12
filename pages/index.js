import Head from 'next/head'
import moment from 'moment'
import DayCard from '../components/DayCard'
import CurrentCard from '../components/CurrentCard'




export default function Home(data) {
  


  const dateString = data.data.list[0].dt

  
  const result = addDayProp(data.data.list)
  const groupedByDay = groupByDay(result)


  var todayData = groupedByDay.slice(0, 1);
  var forecastData = groupedByDay.slice(1, groupedByDay.length );



  var formattedDate = moment.unix(dateString).format('MMMM Do, YYYY h:mm:ss A')
  var currDay = moment.unix(dateString).format('dddd')
  // var unixFormattedDate = moment.unix(data.data.list[0].dt).format('dddd, MMMM Do, YYYY h:mm:ss A')
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 container">
      <Head>
        <title>Weather Forecast App</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

            <header className='header'>
                <div className='header__content'>
                    <h1 className="text-6xl font-bold">
                      Vancouver Weather
                    </h1>
                   
                </div>
            
            </header>
        <CurrentCard data={todayData}/>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {
            forecastData.map((day) => {return (
              <DayCard data={day}/>
            )})
          }
          
        


        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        {/* <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a> */}
      </footer>
    </div>
  )
}




export async function getServerSideProps() {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=6173331&units=metric&APPID=b2088acfff9d2d0d316f2181fc513984`)
  const data = await res.json()



  return { props: { data } }
}



// This function is responsible for adding the 'day' property to each element in the list of 3 hour steps
// The day property is transformed into a human readable string from the epoch time variable
function addDayProp(data) {

  const dataWithDay = data

  const arrayLength = dataWithDay.length;
  for (var i = 0; i < arrayLength; i++) {
     
      const day = moment.unix(dataWithDay[i].dt).format('dddd')
      dataWithDay[i].day = day
  }
  return dataWithDay

}

function groupByDay(data) {
  
  const groups = {};
  const newGroups = [];

  for (let i = 0; i < data.length; i++) {
    let day = data[i]["day"];
    if (!groups[day]) groups[day] = [];
    groups[day].push(data[i]);
  }
  for (let day in groups) {
    newGroups.push(groups[day]);
  }
  

  return newGroups
}