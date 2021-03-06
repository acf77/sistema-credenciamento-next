import "../styles/globals.css";
import "bootswatch/dist/zephyr/bootstrap.css";
import store from "../redux/store";
import Header from "../components/Header";

import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
