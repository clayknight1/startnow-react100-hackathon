import React, { Component } from 'react';


class Selectors extends Component {
  constructor(props) {
    super(props);
    this.handleCityEntry = this.handleCityEntry.bind(this);
    this.handleBrewerySelection = this.handleBrewerySelection.bind(this);
  }

  handleCityEntry(e) {
    e.preventDefault();
    let citySelection = e.target.value
    this.props.locationParse(citySelection);
  }
  handleBrewerySelection(e) {
    e.preventDefault();
    const brewerySelection = e.target.options[e.target.selectedIndex].id;
    this.props.breweryPicker(brewerySelection);

  }

  render() {
    return (
      <div className="col-sm-4 bg-primary pt-5 pb-5">
        <div className="form-group">
          <label >City</label>
          <select className="form-control form-control-lg" onChange={this.handleCityEntry} >
            <option value="0" disabled>Select A Priority</option>
            <option>San Diego</option>
            <option>Vista</option>
            <option>Carlsbad</option>
            <option>Oceanside</option>
            <option>Escondido</option>
            <option>San Marcos</option>
            <option>Poway</option>
            <option>Encinitas</option>
            <option>Solana Beach</option>
          </select>
        </div>
        <div className="form-group pt-5">
          <label >Breweries</label>
          <select className="form-control form-control-lg" onChange={this.handleBrewerySelection} >
            {!!this.props.breweries &&

              this.props.breweries.map((brewery) => {
                return <option key={brewery.id} id={brewery.id}>{brewery.name}</option>
              })
            }
          </select>
        </div>
      </div>
    )
  }
}
export default Selectors