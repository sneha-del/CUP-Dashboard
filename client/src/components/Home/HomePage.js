import React from "react";
import Particles from "react-particles-js";
import { FcReadingEbook } from "react-icons/fc";
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-text">
          <div className="h1">
            <h1>CUP DASHBOARD</h1>
            <FcReadingEbook size="4em" />
          </div>
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              color: {
                value: ["#f94144", "#ffc300", "#fff"],
              },
              size: {
                value: 8,
              },

              shape: {
                value: ["circle"],
              },
            },

            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          height="80vh"
        />
      </div>
    </>
  );
};

export default HomePage;
