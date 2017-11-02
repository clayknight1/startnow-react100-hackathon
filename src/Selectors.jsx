import React, { Component } from 'react';

class Selectors extends Component {
  constructor(props) {
    super(props);
    this.handleCityEntry = this.handleCityEntry.bind(this);
  }

  handleCityEntry (e) {
    e.preventDefault();
    let citySelection = e.target.value
    this.props.locationParse(citySelection);
  }
    render() {
        return(
          <div className="col-sm-4 bg-primary pt-5 pb-5">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">City</label>
              <select className="form-control form-control-lg" id="exampleFormControlSelect1" onChange={this.handleCityEntry} >
                <option>San Diego</option>
                <option>Vista</option>
                <option>Carlsbad</option>
                <option>Oceanside</option>
                <option>Escondido</option>
                <option>San Marcos</option>
                <option>Poway</option>
                <option>Rancho Bernardo</option>
                <option>Encinitas</option>
                <option>Solana Beach</option>
              </select>
            </div>
            <div className="form-group pt-5">
              <label htmlFor="exampleFormControlSelect1">Breweries</label>
              <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                <option>Example</option>
              </select>
            </div>
          </div>
        )
    }
}
export default Selectors