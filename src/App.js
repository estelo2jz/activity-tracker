import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ActivitiesList from "./components/activities-list";
import EditActivity from "./components/edit-activity";
import CreateActivities from "./components/create-activities";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ActivitiesList} />
        <Route path="/edit/:id" component={EditActivity} />
        <Route path="/create" component={CreateActivities} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
