import React from "react";

import mui from "../ills/stack/mui.svg";
import vscode from "../ills/stack/vscode.svg";

import react from "../ills/stack/react.svg";
import html from "../ills/stack/html.svg";
import redux from "../ills/stack/redux.svg";
import css from "../ills/stack/css.svg";
import firebase from "../ills/stack/firebase.svg";
import git from "../ills/stack/git.svg";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
function Stack(props) {
  return (
    <section id="skills" style={{ backgroundColor: props.bgColor }}>
      <Grid container alignItems="center" className="stackGrid">
        <Grid item xs={12} sm={12} className="stackText">
          <div className="stacks">
            <Grid item xs={12} className="stackRow">
              <Tooltip placement="top" title="HTML">
                <img src={html} alt="html" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="CSS">
                <img src={css} alt="css" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="Redux">
                <img src={redux} alt="redux" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="GitHub">
                <img src={git} alt="git" className="stackIcon" />
              </Tooltip>
            </Grid>

            <Grid item xs={12} className="stackRow">
              <Tooltip placement="top" title="Firebase">
                <img src={firebase} alt="firebase" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="React">
                <img src={react} alt="react" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="VSCode">
                <img src={vscode} alt="VSCode" className="stackIcon" />
              </Tooltip>
              <Tooltip placement="top" title="Material UI">
                <img src={mui} alt="mui" className="stackIcon" />
              </Tooltip>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Stack;
