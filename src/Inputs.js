import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Inputs(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>text1</Form.Label>
          <Form.Control type="text" placeholder="text 1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>text2</Form.Label>
          <Form.Control type="text" placeholder="text input 2" />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={props.func}>
        Submit
      </Button>
    </Container>
  );
}
