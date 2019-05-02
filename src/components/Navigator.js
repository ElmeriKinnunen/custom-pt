import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

class Navigator extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="/calendar">Home <span className="sr-only"></span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="/customers">Customer list <span className="sr-only"></span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="/trainings">Training list <span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
  }
}

export default Navigator;