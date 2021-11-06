import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Inputs from './Inputs'

import Container from "react-bootstrap/Container";

export default function Home(props) {
  const [img_url, setImgURL] = useState("https://i.redd.it/wxe8et613vx71.jpg");


  const call = () => {
    axios
      .get("https://meme-api.herokuapp.com/gimme")
      .then(function (response) {
        // handle success
        setImgURL(response.data.url);
        console.log(img_url);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <Container>
    <Row>
      <Col>
        <img src={img_url}></img>
      </Col>
      <Col>
        <Inputs func={call}/>
        
      </Col>
      </Row>
    </Container>
  );
} //<Button onClick={call}>Click Me</Button>
