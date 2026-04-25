import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAmazonaws,
  SiMicrosoftazure
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "0.8rem" }}>PySpark</span>
      </Col>

    </Row>
  );
}

export default Toolstack;