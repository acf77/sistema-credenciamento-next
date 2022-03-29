import "../styles/globals.css";
import "bootswatch/dist/zephyr/bootstrap.css";
import { useStore } from "../redux/store";

import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
