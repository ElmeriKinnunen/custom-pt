import React, { Component } from 'react';
import TrainingList from './components/TrainingList';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomerList from './components/CustomerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h3" color="inherit">
              Custom Pt
            </Typography>
          </Toolbar>
        </AppBar>
          <div className="trainings">
            <h3>Trainings</h3>
            <TrainingList />
          </div>
          <div className="customers">
            <h3>Customers</h3>
            <CustomerList />
          </div>
      </div>
    );
  }
}

export default App;
