import React from "react";

export default function CurrentCard({ ...props }) {
  const current = props.data[0][0];

  // current weather values
  const currTemp = current.main.temp;
  const feelsLike = current.main.feels_like;
  const currIcon = current.weather[0].icon;
  const currDesc = current.weather[0].description;

  return (
    <div>
      <p className="mt-3 text-2xl block text-center">
        Right now in{" "}
        <strong>
          {props.city}, {props.country}
        </strong>
      </p>
      <div className="block text-center">
        <img
          className="inline-block weather-icon"
          src={`http://openweathermap.org/img/wn/` + currIcon + `@2x.png`}
          alt=""
        />
        <span className="heading --h2">{Math.round(currTemp)}&#8451;</span>
      </div>
      <div className=" block text-center">
        <p className="capitalize mb-5">
          {currDesc}. Feels like {Math.round(feelsLike)}&#8451;
        </p>

        <span className="label text-right block text-gray-60">
          Last updated: {props.updatedAt}
        </span>
      </div>
    </div>
  );
}
