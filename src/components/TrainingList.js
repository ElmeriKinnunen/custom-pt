import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Snackbar from '@material-ui/core/Snackbar';
import Moment from "moment";


class TrainingList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        trainings: [], open: false, message: ' '
    };
  }

  componentDidMount(){
      this.loadTrainings();
  }

  // fetch all training
  loadTrainings = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then(response => response.json())
      .then(jsondata => this.setState({trainings: jsondata.content}))
      .catch(err => console.error(err));
  };

  handleClose = (event, reason) =>{
      this.setState({open: false});
  }

  render() {

      const columns = [
          {
            id: "date",
            Header: "Date",
            accessor: d => Moment(d.date).add(3, 'hours').locale('fi').format('MMMM Do YYYY, h:mm a'),
              
          },
          {
              Header: "Duration",
              accessor: "duration"
          },
          {
              Header: "Activity",
              accessor: "activity"
          },
      ];

    return (

      <div>
          <ReactTable 
          filterable={true}
          data={this.state.trainings}
          columns={columns}
          defaultPageSize={10} 
          />
          <Snackbar anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          message={this.state.message}
         />
      </div>
    );
  }
}

export default TrainingList;
