import Head from "next/head";
import moment from "moment";
import DayCard from "../components/DayCard";
import CurrentCard from "../components/CurrentCard";

import { getDay, getDate, getTime, getTimeZone } from "../util/getReadableDate";

import { useState } from "react";

export default function Home(data) {
  const dateString = data.data.list[0].dt;
  const city = data.data.city.name;
  const country = data.data.city.country;
  // const timeZone = getTimeZone(dateString);

  const [activeIndex, setActiveIndex] = useState(null);

  const result = addDayProp(data.data.list);
  const groupedByDay = groupByDay(result);

  let todayData = groupedByDay.slice(0, 1);
  let forecastData = groupedByDay.slice(1, groupedByDay.length);

  let updatedAt = getTime(moment(dateString).subtract({ hours: 3 }));
  let formattedDate = getDate(dateString);
  let currDay = getDay(dateString);

  return (
    <div className="">
      <Head>
        <title>Weather Forecast App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="header__content">
          <a href="/" tabIndex="0">
            <img
              className="logo"
              src="/icons/sun.svg"
              alt="Vancouver Weather Home"
              aria-hidden="true"
            />
            <h1 className="wordmark ml-2">Weather App</h1>
          </a>
        </div>
      </header>

      <main className="lg:px-20">
        <section className="">
          <div className={`mt-14 simpleCard --center --border`}>
            <p>{formattedDate}</p>
            <p>{currDay}</p>
            <CurrentCard data={todayData} city={city} country={country} />
            <p className="label">Last Updated: {updatedAt}</p>
          </div>

          <div className="flex justify-center">
            {/* <h3 className="heading h3">Short term forecast</h3> */}
          </div>
        </section>

        <section className="section">
          <div className="flex flex-wrap flex-col justify-around mt-6 sm:w-full">
            <h2 className="heading --h2">Next 5 Days</h2>
            <div className="flex flex-wrap flex-center justify-around ">
              <ul className="">
                {forecastData.map((day, i) => {
                  return (
                    <li key={i} className="inline-block">
                      <DayCard
                        data={day}
                        index={i}
                        setActiveIndex={setActiveIndex}
                        activeIndex={activeIndex}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-24">
        <span>Copyright 2021 &#9786;</span>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=6173331&units=metric&APPID=` +
      process.env.OPENWEATHERMAP_API_KEY
  );
  const data = await res.json();

  return { props: { data } };
}

// This function is responsible for adding the 'day' property to each element in the list of 3 hour steps
// The day property is transformed into a human readable string from the epoch time variable, dt
function addDayProp(data) {
  const dataWithDay = data;

  const arrayLength = dataWithDay.length;
  for (var i = 0; i < arrayLength; i++) {
    const day = moment.unix(dataWithDay[i].dt).format("dddd");
    dataWithDay[i].day = day;
  }
  return dataWithDay;
}

// Groups the objects with the same 'day' variable into arrays, resulting in an array of arrays
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

  // At this point we may want to consider making sure that the entries are sorted by time as well by any chance the nature of the data response changes

  return newGroups;
}
