import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DailyRoadPlan from './pages/DailyRoadPlan';
import Home from './pages/Home';
import Primeover from './pages/Primeover';
import Trailer from './pages/Trailer';
import TruckAllocation from './pages/TruckAllocation';
import CreateOrders from './pages/CreateOrders';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/primeover' component={Primeover} />
        <Route path='/trailer' component={Trailer} />
        <Route path='/truckallocation' component={TruckAllocation} />
        <Route path='/dailyroadplan' component={DailyRoadPlan} />
        <Route path='/createorder' component={CreateOrders} />
      </Switch>
    </Router>
  );
}

export default App;