import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MoreEvents from './pages/MoreEvents';
import Blog from './pages/Blog';
import Donation from './pages/Donation';
import VolunteerReg from './pages/VolunteerReg';
import Login from './pages/Login';
import History from './pages/History';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './pages/ErrorPage';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    loggedInUser: false,
    name: '',
    email: ''
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/donation">
              <Donation />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/moreEvents">
              <MoreEvents />
            </Route>
            <PrivateRoute path="/registrationVolunteer/:eventId">
              <VolunteerReg />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/history">
              <History />
            </PrivateRoute>
            <PrivateRoute path="*">
              <ErrorPage />
            </PrivateRoute>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
