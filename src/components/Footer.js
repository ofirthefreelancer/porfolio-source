import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import mui from "../ills/stack/mui.svg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
function Footer(props) {
  return (
    <div className="footer" style={{ backgroundColor: props.bgColor }}>
      <div style={{ marginTop: "10px" }}>Built with 🤍 in React -2021-</div>
      <div className="smIconsWrapper">
        <div className="smIcon">
          <Button
            target="_blank"
            style={{ backgroundColor: "transparent" }}
            href="https://www.linkedin.com/in/ofirthedev/"
          >
            <LinkedInIcon />
          </Button>
        </div>
        <div className="smIcon">
          <Button
            target="_blank"
            style={{ backgroundColor: "transparent" }}
            href="https://www.facebook.com/profile.php?id=100004539256630"
          >
            <FacebookIcon />
          </Button>
        </div>

        <div className="smIcon">
          <Button
            style={{ backgroundColor: "transparent" }}
            href="https://www.instagram.com/ofirco14/"
            target="_blank"
          >
            <InstagramIcon />
          </Button>
        </div>
        <div className="smIcon">
          <Button
            style={{ backgroundColor: "transparent" }}
            href="mailto:ofirbux@gmail.com"
            target="_blank"
          >
            <MailOutlineIcon />
          </Button>
        </div>
      </div>
      <div>
        <Button
          target="_blank"
          style={{ backgroundColor: "transparent" }}
          href="https://material-ui.com/"
        >
          <img src={mui} />
        </Button>
      </div>
    </div>
  );
}

export default Footer;
