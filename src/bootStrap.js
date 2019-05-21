//This JS file simply bootstraps the app from the root component when the window loads
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppRoot from "./components/AppRoot.jsx";
import authjwt from "client-auth-jwt/src/Auth.js";

import FetchService from "./FetchService.js";

//This function executes immediately
(function() {
  let authService = new authjwt();

  let fetchService = new FetchService();
  fetchService.setAuthService(authService);

  //react-bp gh-pages stub out the fetch service
  fetchService.getJson = (url, contentType, andThen, noAndThen, params) => {
        if (!!fetchService.requestListener[url]) {
            fetchService.requestListener[url](true);
        }
       setTimeout(()=> {
      andThen({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicGVuZGluZ1VzZXJDcmVhdGlvbiI6dHJ1ZX0.BiTZdKh4TtO-s76NE_caKlu4hRwjM6oxHQnzg68wIvs"});
      if (!! fetchService.requestListener[url]) {
            fetchService.requestListener[url](false)
      }}, 5000);
  };
  fetchService.getJsonWithAuth = (url, contentType, andThen, noAndThen, params) => {
        if (!!fetchService.requestListener[url]) {
            fetchService.requestListener[url](true);
        }

      setTimeout(()=> {
      andThen({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.xuEv8qrfXu424LZk8bVgr9MQJUIrp1rHcPyZw_KSsds"});
      if (!! fetchService.requestListener[url]) {
            fetchService.requestListener[url](false)
      }}, 5000);
  };
  // Configure the authService
  authService.ProviderOAuthConfigs.google.clientId =
    "34478033913-h13qnl7mfako0ean3uv6c9s6f8ujafki.apps.googleusercontent.com";
  authService.ProviderOAuthConfigs.google.redirectUri =
    window.location.origin + "/react-bp/googleStaticAuth.html";
  authService.originRmiService = { login: () => true };
  //This function is attached to execute when the window loads
  document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
      <Router basename="/react-bp">
        <Route
          render={routeProps => (
            <AppRoot
              location={routeProps.location}
              fetchService={fetchService}
              authService={authService}
              {...routeProps}
            />
          )}
        />
      </Router>,
      document.getElementById("app")
    );
  });
})();
