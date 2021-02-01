import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SignIn from './components/auth/signin/SignIn';
import SignUp from './components/auth/signup/SignUp';

import Home from "./components/home/Home";
import Preferences from "./components/preferences/Preferences";

//hooks
import useToken from './hooks/useToken';

const App = () => {
  const currentUrl = window.location.pathname;
  const { token, setToken } = useToken();

  if (!token && !currentUrl.includes("/signup")) { 
    return <SignIn setToken={ setToken }/>
  }

  if (!token && currentUrl.includes("/signup")) { 
    return <SignUp/>
  }

  return (
    <div className="wrapper">
      <h1> Google Drive Clone</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/preferences">
            <Preferences></Preferences>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default App;
