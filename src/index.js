import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { IntlProvider, addLocaleData } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";
import translations from "./i18n/locales";

import Root from "./containers/Root";
import configureStore from "./redux/store/configureStore";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const store = configureStore();

addLocaleData(arLocaleData);
addLocaleData(esLocaleData);

const locale = "en";
const messages = translations[locale];

render(
  <IntlProvider locale={locale} key={locale} messages={messages}>
    <Router>
      <Root store={store} />
    </Router>
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
