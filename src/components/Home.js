import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import Astronaut from "../ills/astronaut.svg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export class Home extends Component {
  render() {
    const name = "<Ofir/>";
    // Can also be included with a regular script tag
    return (
      <section id="home">
        <Grid
          container
          direction="row"
          alignItems="center"
          className="homeGrid"
        >
          <Grid item xs={12} sm={6} className="homeText">
            <Typography variant="h2">I'm {name}</Typography>
            <Typography variant="h4">
              <Typed
                strings={[
                  "Nice to meet you (:",
                  "I design, develop, and create",
                  "Specializing in React.",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              ></Typed>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="homeIllus">
            <img alt="astronaut" className="astronaut" src={Astronaut} />
          </Grid>
          <Grid item xs={12} className="scrollToSee">
            <Typography>Learn more about what I do</Typography>
            <Button href="#about">
              <ExpandMoreIcon style={{ color: "#00b0ff" }} fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Home;
