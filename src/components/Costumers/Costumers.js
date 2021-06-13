import React, { Component } from "react";
import alon from "./img/alon.jpg";
import salman from "./img/salman.jpg";
import Costumer from "./Costumer";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@material-ui/core";

export class Costumers extends Component {
  render() {
    const costumersList = [
      {
        costumerImg: alon,
        costumerDesc:
          "“Working with Ofir was a pleasure - his ability to see the small things is defenetely a game changer”",
        costumerName: "Alon Anavi",
        costumerPro: "Web Consultant, Freelance",
      },
      {
        costumerImg: salman,
        costumerDesc:
          "“Ofir’s passion for design and create is amazing. He cares about the final product and will do everything to complete it as soon as possible with a 100% quality”",
        costumerName: "Or Salman",
        costumerPro: "Web Consultant, Freelance",
      },
    ];
    return (
      <section id="costumers">
        <Typography variant="h4" style={{ paddingBottom: "20px" }}>
          Happy costumers
        </Typography>
        <Grid container alignItems="center" className="costumersGrid">
          <Grid item xs={2} sm={2}></Grid>
          <Grid item xs={8} sm={8} className="costumersText">
            <Carousel animation="slide" autoPlay={false} showArrows={false}>
              {costumersList.map((costumer) => {
                return (
                  <Costumer
                    key={costumer.costumerName}
                    costumerImg={costumer.costumerImg}
                    costumerDesc={costumer.costumerDesc}
                    costumerName={costumer.costumerName}
                    costumerPro={costumer.costumerPro}
                  />
                );
              })}
            </Carousel>
          </Grid>
          <Grid item xs={2} sm={2}></Grid>
        </Grid>
      </section>
    );
  }
}

export default Costumers;
