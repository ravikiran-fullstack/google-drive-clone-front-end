import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SignIn from './components/auth/signin/SignIn';
import Home from "./components/home/Home";
import Preferences from "./components/preferences/Preferences";

//hooks
import useToken from './hooks/useToken';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) { 
    return <SignIn setToken={ setToken }/>
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
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default App;
