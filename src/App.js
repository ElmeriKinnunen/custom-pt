import React, { Component } from 'react';
import TrainingList from './components/TrainingList';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import CustomerList from './components/CustomerList';
import Navigator from './components/Navigator';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/calendar" component={Calendar} />
              <Route path="/trainings" component={TrainingList} />
              <Route path="/customers" component={CustomerList} />
              <Route render={() => <h2>Page not found 404</h2>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
