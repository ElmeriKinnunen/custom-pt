import React, { Component } from 'react';
import TrainingList from './components/TrainingList';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import CustomerList from './components/CustomerList';
import Navigator from './components/Navigator';
import Calendar from './components/Calendar';
import banner from './bannerPT.jpg';
import LazyHero from 'react-lazy-hero';

class App extends Component {
  render() {
    return (
      <React.Fragment class="App">
        <React.Fragment class="banner">
          <LazyHero imageSrc={banner} alt="banner" class="portrait" style={{}} ></LazyHero>
        </React.Fragment>

        <BrowserRouter>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Calendar}/>
              <Route path="/trainings" component={TrainingList} />
              <Route path="/customers" component={CustomerList} />
              <Route render={() => <h2>Page not found 404</h2>} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
