import React from "react";
import { getHigh, getLow } from "../../util/getExtreme";

export default function CurrentCard({ ...props }) {
  const current = props.data[0][0];

  // current weather values
  const currTemp = current.main.temp;
  const feelsLike = current.main.feels_like;
  const currIcon = current.weather[0].icon;
  const currDesc = current.weather[0].description;

  const high = getHigh(...props.data).main.temp;
  const low = getLow(...props.data).main.temp;
  // debugger;

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
        <p className="capitalize">
          {currDesc}. Feels like {Math.round(feelsLike)}&#8451;.
        </p>

        <dl className="mb-4">
          <div className="">
            <dt className="inline-block">High:&nbsp;</dt>
            <dd className="inline-block">{Math.round(high)}&#8451;</dd>
          </div>
          <div className="">
            <dt className="inline-block">Low:&nbsp;</dt>
            <dd className="inline-block">{Math.round(low)}&#8451;</dd>
          </div>
        </dl>

        <span className="label text-right block text-gray-60">
          Last updated: {props.updatedAt}
        </span>
      </div>
    </div>
  );
}
