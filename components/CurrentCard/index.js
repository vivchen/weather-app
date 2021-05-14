import React from "react";

export default function CurrentCard({ ...props }) {
  console.log("current card data", props);

  const current = props.data[0][0];

  const currTemp = current.main.temp;
  const feelsLike = current.main.feels_like;
  const currIcon = current.weather[0].icon;
  const currMain = current.weather[0].main;
  const currDesc = current.weather[0].description;

  return (
    <div>
      <p className="mt-3 text-2xl block text-center">
        Right now in{" "}
        <strong>
          {props.city}, {props.country}
        </strong>
      </p>
      <div class="block text-center">
        <img
          className="inline-block weather-icon"
          src={`http://openweathermap.org/img/wn/` + currIcon + `@2x.png`}
          alt=""
        />
        <span className="heading --h2">{Math.round(currTemp)}&#8451;</span>
      </div>
      <div class="">
        <p className="capitalize">{currDesc}</p>

        <p className="mt-3">Feels like {Math.round(feelsLike)}&#8451;</p>
      </div>

      <div>
        {/* <h2>{formattedDate}</h2> */}
        {/* <h2>{day}</h2> */}
      </div>
    </div>
  );
}
