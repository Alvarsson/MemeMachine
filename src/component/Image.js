import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';



 
export default function DashSimple(props) {
  <div>
    <Image src={props.img_url} fluid></Image>
  </div>
);
 
export default MyImage;



//@ts-ignore

import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import DashComponent from "./DashComponent";
import LabelCollection from "./LabelCollection";
import MultiLine from "./MulitLineGraph";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";

import { API_BASE_URL, CURRENTUSER } from "../../constants/apiConstants";
import Card from "react-bootstrap/esm/Card";

export default function Image(props) {

  return (
    <div >
              <img src={props.img_url} fluid>
    </div>
  );
}
