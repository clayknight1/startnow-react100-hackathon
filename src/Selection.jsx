import React, { Component } from 'react';
import Selectors from './Selectors'

const Selection = function (props) {

    return (
        <option>{this.props.brewery.name}</option>
    )
}


export default Selection  