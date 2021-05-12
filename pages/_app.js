import "tailwindcss/tailwind.css";
import styles from "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
