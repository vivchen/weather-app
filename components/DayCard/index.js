import styles from "./index.module.scss";
import { getHigh, getLow } from "../../util/getExtreme";
import { getTime } from "../../util/getReadableDate";
import moment from "moment";

export default function DayCard({ data, index, setActiveIndex, activeIndex }) {
  const day = data[0].day;
  const high = getHigh(data);
  const low = getLow(data);
  const main = data[0].weather[0].main;
  const date = moment(data[0].dt_txt).format("MM/DD");

  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <button
      data-cy="daycard"
      aria-pressed={index === activeIndex}
      aria-expanded={index === activeIndex}
      className={`p-6 mt-6 text-left ${styles.daycard} ${
        index === activeIndex ? styles["daycard--expanded"] : ""
      }`}
      onClick={() => {
        handleChange(index);
      }}
    >
      <div className={styles.daycard__content}>
        <h3 className="text-2xl font-bold">{day}</h3>
        <p className="mb-3 text-gray-60">
          <time className="">{date}</time>
        </p>
        <p>{main}</p>
        <img
          className="weather-icon --sm sm:m-auto lg:m-0"
          src={
            `http://openweathermap.org/img/wn/` +
            high.weather[0].icon +
            `@2x.png`
          }
          alt=""
        />
        <dl>
          <div className="mt-3">
            <dt className="inline-block">High:&nbsp;</dt>
            <dd className="inline-block">
              {Math.round(high.main.temp)}&#8451;
            </dd>
          </div>
          <div className="mt-3">
            <dt className="inline-block">Low:&nbsp;</dt>
            <dd className="inline-block">{Math.round(low.main.temp)}&#8451;</dd>
          </div>
        </dl>

        {activeIndex === index ? <ExpandedDayCard data={data} /> : ""}
      </div>
    </button>
  );
}

function ExpandedDayCard({ data }) {
  return (
    <div className="mt-8">
      <h4 className="heading --h4 mb-2 font-semibold ">Forecast</h4>
      {data.map((chunk, i) => {
        return (
          <div className={styles.daycard__steps} key={i}>
            <dl className="mb-1">
              <div className={styles.daycard__step}>
                <dt className={styles.daycard__key}>{getTime(chunk.dt)}</dt>
                <dd className={styles.daycard__value}>
                  {Math.round(chunk.main.temp)}&#8451;
                </dd>
              </div>
            </dl>
          </div>
        );
      })}
    </div>
  );
}
