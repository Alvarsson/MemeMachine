import React, { useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";

import LabelledSlider from "./LabelledSlider";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/esm/Card";
import {CURRENTUSER,API_BASE_URL} from '../../constants/apiConstants';

function Button() {

  fucntion handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
};

export default Button;


