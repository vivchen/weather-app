import React, { useState } from "react";
import styles from "./index.module.scss";
import { getHigh, getLow } from "../../util/getExtreme";

export default function DayCard({ data, index }) {
  const day = data[0].day;
  const [activeIndex, setExpandIndex] = useState(false);
  const high = getHigh(data);
  const low = getLow(data);

  const handleChange = (index) => {
    setExpandIndex(activeIndex === index ? null : index);
  };

  return (
    <button
      className={`p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 ${
        styles.daycard
      } ${
        index === activeIndex
          ? styles["daycard--expanded"]
          : styles["daycard--disabled"]
      }`}
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
        {index === activeIndex ? <ExpandedDayCard /> : ""}
      </div>
    </button>
  );
}

function ExpandedDayCard() {
  return <div>insert 3 hour step activity</div>;
}
