import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Snackbar from '@material-ui/core/Snackbar';

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

  handleClose = (event, reason) =>{
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
      ];
    return (
      <div>
          <ReactTable 
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
