import React, { Component } from 'react';

class BreweryProfile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="jumbotron bg-info">
                        <h1 className="display-3 text-center font-weight-bold">{this.props.selectedBrewery.name}</h1>
                        {/* <img src={this.props.selectedBrewery.images.large} /> */}
                        <p className="lead mt-5 mb-5">{this.props.selectedBrewery.description}</p>
                        <hr className="my-4 mb-5" />
                        <div className="row mt-5">
                            <div className="col-sm-6" >
                                <h5 className="text-center" >Established</h5>
                                <p className="text-center" >
                                    {this.props.selectedBrewery.established}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="text-center">Phone</h5>
                                <p className="text-center">
                                    {this.props.selectedBrewery.phone}
                                </p>
                            </div>
                            <div className="col-sm-6" >
                                <h5 className="text-center" >Address</h5>
                                <p className="text-center">
                                    {this.props.selectedBrewery.address + ", " + this.props.selectedBrewery.city}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <a href={this.props.selectedBrewery.website}><h5 className="text-center">Website</h5></a>
                                <p className="text-center">
                                    {this.props.selectedBrewery.website}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreweryProfile;



