import React from "react";
import { Spinner } from "react-bootstrap";

import Typewriter from "typewriter-effect";

export const Loader = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        display: "block",
      }}
    >
      <Typewriter
        options={{
          strings: [
            `<span style="color: #f29616"><strong>EVEMTZ</strong></span>`,
          ],
          autoStart: true,
          loop: true,
          delay: 2,
          deleteSpeed: 2,
          pauseFor: 100,
        }}
      />
    </div>
  );
  // <Spinner
  //   animation="border"
  //   role="status"
  //   style={{
  //     width: "50px",
  //     height: "50px",
  //     margin: "auto",
  //     display: "block",
  //   }}
  // ></Spinner>
};
