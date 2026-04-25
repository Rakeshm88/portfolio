import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "Python & SQL Developer",
          "ETL Pipeline Builder",
          "Data Pipeline Engineer",
          "API Data Integration Specialist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;