import "./Landing.scss";

import githubIcon from "../icons/github.png";
import gmailIcon from "../icons/gmail.png";
import linkedinIcon from "../icons/linkedin.png";
import phoneIcon from "../icons/phone.png";

import { ReactComponent as LandingSVG } from "../svg/landing.svg"

import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    e.preventDefault();
    navigate("/main-content")
  }

  return (
    <div className="Home__MAIN Home__landing">
      <div className="Home__landing__contacts">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/vinhhao-truong"
        >
          <img className="icon" src={githubIcon} alt="githubIcon" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/arnold-truong-501102200"
        >
          <img className="icon" src={linkedinIcon} alt="linkedinIcon" />
        </a>
        <a href="mailto:vinhhao.truong.52@gmail.com">
          <img className="icon" src={gmailIcon} alt="gmailIcon" />
        </a>
        <a href="tel:+61434109621">
          <img className="icon" src={phoneIcon} alt="phoneIcon" />
        </a>
      </div>
      <h2>Hello player, this is Arnold.</h2>
      <h1 className="Home__landing__title">
        Welcome to my <span>developer</span> portfolio.
      </h1>
      <Link to="/main-content">
        <Button
          className="Home__landing__btn exploreBtn"
          onClick={handleExploreClick}
        >
          Explore
        </Button>
      </Link>
      <LandingSVG />
    </div>
  )
};

export default Landing;
