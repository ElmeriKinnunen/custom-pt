import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import AddCustomer from './AddCustomer';
import AddTraining from "./AddTraining";
import DeleteIcon from '@material-ui/icons/Delete';

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [], open: false, message: ' '};
  }

  componentDidMount(){
      this.loadCustomers();
  }

  // fetch all customers
  loadCustomers = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(jsondata => this.setState({customers: jsondata.content}))
      .catch(err => console.error(err));
  };

    // fetch all training
    loadTrainings = () => {
      fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(jsondata => this.setState({trainings: jsondata.content}))
        .catch(err => console.error(err));
    };

  //delete customer
  deleteCustomer = customerDel => {
    if(window.confirm("Are you sure?")){
      fetch(customerDel, {method: "DELETE"})
        .then(res => this.loadCustomers())
        .then(res => this.setState({open: true, message: "customer deleted"}))
        .catch(err => console.error(err));
    }
  };

  //add customer
  addCustomer = newCustomer =>{
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: 'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify(newCustomer)
    })
      .then(res => this.loadCustomers())
      .then(res => this.setState({open: true, message: 'New customer has been succesfully saved.'}))
      .catch(err => console.error(err));
  }

  //add training to customer
  addTraining(training) {
    console.log(training);
    fetch('https://customerrest.herokuapp.com/api/trainings/',
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(training)
    })
    .then(res => this.loadTrainings())
    .then(res => this.setState({open: true, message: 'training added'}))
    .catch(err => console.error(err))
  }

  handleClose = () =>{
      this.setState({open: false});
  }

  render() {
      const columns = [
          {
              Header: "Firstname",
              accessor: "firstname"
          },
          {
              Header: "Lastname",
              accessor: "lastname"
          },
          {
            Header: "Streetaddres",
            accessor: "streetaddress"
          },
          {
            Header: "Postcode",
            accessor: "postcode"
          },
          {
            Header: "City",
            accessor: "city"
          },
          {
            Header: "Email",
            accessor: "email"
          },
          {
            Header: "Phone",
            accessor: "phone"
          },
          {
            Header: "",
            filterable: false,
            sortable: false,
            width: 110,
            accessor: "links[0].href",
            Cell: ({value}) => (
              <AddTraining customer={value} addTraining={this.addTraining} loadTrainings={this.loadTrainings}/>
            )
          },
          {
            Header: "",
            filterable: false,
            sortable: false,
            width: 110,
            accessor: "links[0].href",
            Cell: ({value}) => (
              <Button color="secondary" className="button" size="small" onClick={() => this.deleteCustomer(value)}>
                <DeleteIcon />
              </Button>
            )
          },
          
      ];
    return (
      <div>
          <AddCustomer addCustomer={this.addCustomer} />
          <ReactTable 
          style={{marginLeft: "20px", marginRight: "20px;", }}
          filterable={true}
          data={this.state.customers}
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

export default CustomerList;
