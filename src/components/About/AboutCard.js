import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rakesh Mamidi </span>
            from <span className="purple">India.</span>
            <br />
            <br />
            I am a <span className="purple">Data Engineer</span> with hands-on experience in building data pipelines and processing large-scale datasets.
            <br />
            <br />
            I have completed my <span className="purple">Master of Computer Applications (MCA)</span>.
            <br />
            <br />
            I specialize in working with
            <span className="purple"> Python, SQL, and Pandas </span>
            to build ETL pipelines, integrate APIs, and transform raw data into structured formats for analysis.
            <br />
            <br />
            I have worked on real-world projects involving
            <span className="purple"> stock market data processing, real-time data ingestion, and database optimization</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Data Pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Analysis & Processing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Advanced Data Engineering Concepts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming raw data into meaningful insights."
          </p>
          <footer className="blockquote-footer">Rakesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;