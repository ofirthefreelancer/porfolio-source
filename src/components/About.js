import { Typography } from "@material-ui/core";
import React from "react";
import Resume from "../Resume.pdf";
import monster from "../ills/monster.svg";

import Grid from "@material-ui/core/Grid";
function About(props) {
  return (
    <section id="about" style={{ backgroundColor: props.bgColor }}>
      <Grid container alignItems="center" className="aboutGrid">
        <Grid item xs={12} sm={12} className="aboutText">
          <div className="monsterBg">
            <img src={monster} alt="monster" className="monsterProfile" />
          </div>

          <Typography variant="h5" style={{ paddingTop: "20px" }}>
            Hello!
            <br /> I'm a web developer from Haifa, Israel.
            <br /> I have a passion for web development and love
            <br /> to help people to reach their goals.
            <br /> I work 100% remotely and when i'm not coding you can find me
            <br /> surfing around the world and exploring nature.
            <br /> Let's make crazy ideas into reality.
            <br />
            <a
              style={{ textDecoration: "underLine", color: "grey" }}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
