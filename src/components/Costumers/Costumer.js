import { Typography } from "@material-ui/core";
import React from "react";

function Costumer(props) {
  return (
    <div>
      <div className="costumerImg">
        <img className="costumerIcon" alt="costumer" src={props.costumerImg} />
      </div>
      <div className="costumerDesc">
        <Typography variant="h5">{props.costumerDesc}</Typography>
      </div>
      <div className="costumerName">
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          {props.costumerName}
        </Typography>
      </div>
      <div className="costumerPro">
        <Typography variant="subtitle1">{props.costumerPro}</Typography>
      </div>
    </div>
  );
}

export default Costumer;
