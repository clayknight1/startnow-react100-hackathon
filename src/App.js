import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Map from './Map'
import Selectors from './Selectors'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
    this.locationParse = this.locationParse.bind(this);
  }
  componentWillMount() {
    axios({
      method: "GET",
      url: 'http://api.brewerydb.com/v2/locations?locality=san+marcos&region=California&key=23afb47a38a6fa5dc3fe035f54e9ea0a',
      withCredentials: false,
    })
      .then(function (response) {
        this.setState({
          breweries: response.data
        })
      }.bind(this));
  }

  locationParse(citySelection) {
    const cleanCity = citySelection.replace(' ', '+');
    let locationData = 'http://api.brewerydb.com/v2/locations?locality=' + cleanCity + '&region=California&key=23afb47a38a6fa5dc3fe035f54e9ea0a'.replace(" ", "+");
    console.log(locationData)

  }

  render() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">San Diego Breweries</h1>
            <p className="lead">Find the best breweries in San Diego County</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Selectors
              locationParse = {this.locationParse}
            />
            <div className="col-sm-8">
              <Map />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
