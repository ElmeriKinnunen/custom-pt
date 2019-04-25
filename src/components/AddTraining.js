import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Moment from 'moment';

class AddTraining extends Component {
    constructor (props) {
        super(props);
        this.state = {open: false, date: Moment().format("YYYY-MM-DDTHH:mm"), duration: '', activity: '', customer: this.props.customer}
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    saveTraining = (event) => {
        event.preventDefault();
        let newTraining = {
                date: Moment(this.state.date).format("YYYY-MM-DDTHH:mm:ss.sss+0300"), 
                duration: this.state.duration, 
                activity: this.state.activity, 
                customer: this.state.customer
            }
        this.props.addTraining(newTraining);
        this.props.loadTrainings();
        this.handleClose();
    }


    render(){
        
        return(
            <div>
                <Button size="small" color="primary" onClick={() => this.setState({open:true})}>add training</Button>

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">new training</DialogTitle>

                <DialogContent>
                 <TextField autoFocus margin="dense" name="date" value={this.state.date} onChange={this.handleChange} label="Date" fullWidth/>
                 <TextField margin="dense" name="duration" value={this.state.duration} onChange={this.handleChange} label="Duration" fullWidth/>
                 <TextField margin="dense" name="activity" value={this.state.activity} onChange={this.handleChange} label="Activity" fullWidth/>
                </DialogContent>

                 <DialogActions>
                    <Button onClick={this.handleClose} color="primary">Cancel</Button>
                    <Button onClick={this.saveTraining} color="primary">Save</Button>
                 </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddTraining;