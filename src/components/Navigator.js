import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigator extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
        <a class="navbar-brand" href="/">Personaltrainer App</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
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
