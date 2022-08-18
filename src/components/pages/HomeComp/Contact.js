import React from "react";

import "./Contact.scss";

import githubIcon from "../../icons/github.png";
import gmailIcon from "../../icons/gmail.png";
import linkedinIcon from "../../icons/linkedin.png";
import phoneIcon from "../../icons/phone.png";

import { ReactComponent as ContactSVG } from "../../svg/contact.svg";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact-main-content">
      <h1 className="Home__MAIN__title">Contact Me...</h1>
      <ContactSVG className="contactSvg" />
      <p>
        <img src={linkedinIcon} alt="linkedinIcon" />{" "}
        <b id="linkedin-title">LinkedIn: </b>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/arnold-truong-501102200"
        >
          https://www.linkedin.com/in/arnold-truong-501102200
        </a>
      </p>
      <p>
        <img src={githubIcon} alt="githubIcon" />{" "}
        <b id="github-title">GitHub: </b>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/vinhhao-truong"
        >
          https://github.com/vinhhao-truong
        </a>
      </p>
      <p>
        <img src={phoneIcon} alt="phoneIcon" />{" "}
        <b id="phone-title">Phone Number: </b>
        <a href="tel:+61434109621">0434109621</a>
      </p>
      <p>
        <img src={gmailIcon} alt="gmailIcon" /> <b id="email-title">Email: </b>
        <a href="mailto:vinhhao.truong.52@gmail.com">
          vinhhao.truong.52@gmail.com
        </a>
      </p>
    </div>
  );
});

export default Contact;
