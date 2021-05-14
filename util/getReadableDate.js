import moment from "moment";

export function getTime(string) {
  let time = moment.unix(string).format("h A");

  return time;
}

export function getDate(string) {
  let date = moment.unix(string).format("MMMM Do, YYYY");

  return date;
}

export function getFullDate(string) {
  let date = moment.unix(string).format("MMMM Do, YYYY h:mm:ss A");

  return date;
}

export function getDay(string) {
  let day = moment.unix(string).format("dddd");

  return day;
}

export function getTimeZone(string) {
  let tz = moment.unix(string).format("z");
  return tz;
}
