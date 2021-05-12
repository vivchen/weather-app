import React from "react";
import styles from "./index.module.scss";

export default function DayCard({ data }) {
  const day = data[0].day;
  return (
    <button
      className={`p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 ${styles.daycard}`}
      onClick={() => {
        console.log("hello");
      }}
    >
      <h3 className="text-2xl font-bold">{day}</h3>
      <p className="mt-3 text-2xl">asdf</p>
      <p className="mt-3 text-2xl">asdf</p>
      <div>{/* <h2>{formattedDate}</h2> */}</div>
    </button>
  );
}
