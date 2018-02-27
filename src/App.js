import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Map from './Map'
import BreweryProfile from './breweryProfile'
import Selectors from './Selectors'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: null,
    }
    this.locationParse = this.locationParse.bind(this);
    this.breweryPicker = this.breweryPicker.bind(this);
  }

  locationParse(citySelection) {
    const cleanCity = citySelection.replace(' ', '+');
    let locationData = 'http://api.brewerydb.com/v2/locations?locality=' + cleanCity + '&region=California&key=23afb47a38a6fa5dc3fe035f54e9ea0a'.replace(" ", "+");

    axios({
      method: "GET",
      url: locationData,
      withCredentials: false,
    }).then((response) => {
      //Only get response.data.data
      let breweriesList = response.data.data;

      //Mold the data
      const formattedData = breweriesList.map((breweryObj) => {
        //create a new object with information I want from the api
        const breweryData = {
          name: breweryObj.brewery.name,
          description: breweryObj.brewery.description,
          images: breweryObj.brewery.images,
          hours: breweryObj.hoursOfOperation,
          phone: breweryObj.phone,
          id: breweryObj.id,
          website: breweryObj.brewery.website,
          address: breweryObj.streetAddress,
          city: breweryObj.locality,
          zipCode: breweryObj.postalCode,
          established: breweryObj.brewery.established,
          latitude: breweryObj.latitude,
          longitude: breweryObj.longitude
        }
        return breweryData;
      });

      this.setState({
        breweries: formattedData
      });
    });
  }

  breweryPicker(brewerySelection) {
    const breweryOptions = this.state.breweries;
    const breweryIndex = breweryOptions.findIndex(brewery => brewery.id === brewerySelection);

    this.setState({
      selectedBrewery: this.state.breweries[breweryIndex]
    })
  }
  render() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid text-center" id="header">
          <div className="container">
            <h1 className="display-3 font-weight-bold align-top">San Diego Brewery List</h1>
            <p className="lead">Find the best breweries in San Diego County</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Selectors
              locationParse={this.locationParse}
              breweries={this.state.breweries}
              breweryPicker={this.breweryPicker}
            />
            <div className="col-sm-8">
              <Map
                latitude={this.state.selectedBrewery && this.state.selectedBrewery.latitude}
                longitude={this.state.selectedBrewery && this.state.selectedBrewery.longitude}/>
            </div>
            {this.state.selectedBrewery && <BreweryProfile selectedBrewery={this.state.selectedBrewery}
            />}
          </div>
        </div>

      </div>
    );
  }
}

export default App;