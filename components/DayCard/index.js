import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getHigh, getLow } from "../../util/getExtreme";
import { getTime } from "../../util/getReadableDate";

export default function DayCard({ data, index, setActiveIndex, activeIndex }) {
  // get values from data
  const day = data[0].day;
  const high = getHigh(data);
  const low = getLow(data);

  // handle DayCard state
  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <button
      className={`p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 ${
        styles.daycard
      } ${index === activeIndex ? styles["daycard--expanded"] : ""}`}
      onClick={() => {
        handleChange(index);
      }}
    >
      <div className={styles.daycard__content}>
        <h3 className="text-2xl font-bold">{day}</h3>
        <p className="mt-3 text-2xl">
          High: {Math.round(high.main.temp)}&#8451;
        </p>
        <p className="mt-3 text-2xl">Low: {Math.round(low.main.temp)}&#8451;</p>
        <img
          className="weather-icon --sm"
          src={
            `http://openweathermap.org/img/wn/` +
            high.weather[0].icon +
            `@2x.png`
          }
          alt=""
        />
        {activeIndex === index ? <ExpandedDayCard data={data} /> : ""}
      </div>
    </button>
  );
}

function ExpandedDayCard({ data }) {
  return data.map((chunk, i) => {
    // debugger;

    return (
      <div className={styles.daycard__steps}>
        <dl>
          <div className={styles.daycard__step}>
            <dt className={styles.daycard__key}>{getTime(chunk.dt)}</dt>
            <dd className={styles.daycard__value}>{chunk.main.temp}&#8451;</dd>
          </div>
        </dl>
      </div>
    );
  });
}
