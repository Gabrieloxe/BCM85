import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
