import styles from "./index.module.scss";
import { getHigh, getLow } from "../../util/getExtreme";
import { getTime } from "../../util/getReadableDate";

export default function DayCard({ data, index, setActiveIndex, activeIndex }) {
  const day = data[0].day;
  const high = getHigh(data);
  const low = getLow(data);

  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <button
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
        <p className="mt-3 text-2xl">
          High: {Math.round(high.main.temp)}&#8451;
        </p>
        <p className="mt-3 text-2xl">Low: {Math.round(low.main.temp)}&#8451;</p>

        <img
          className="weather-icon --sm sm:m-auto lg:m-0"
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
  return (
    <div className="mt-4">
      <h3 className="heading --h3 mb-2">Forecast</h3>
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
