import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import "./Projects.scss";
import artooIcon from "../../icons/artoo.png";
import portfolioIcon from "../../icons/portfolio.png";
import jdsIcon from "../../icons/jds.png";

const Projects = React.forwardRef((props, ref) => {
  const Card = ({ title, content, detailUrl, url, icon }) => {
    return (
      <div className="Card">
        {url && (
          <a className="title-link" rel="noreferrer" target="_blank" href={url}>
            <h3>{icon && <img className="icon" src={icon} alt={`${title}-icon`} />} {title}</h3>
          </a>
        )}
        {!url && <h3>{title}</h3>}
        <p>{content}</p>
        {detailUrl && (
          <Link target="_blank" to={detailUrl}>
            ...See More
          </Link>
        )}
        {!detailUrl && <p></p>}
      </div>
    );
  };

  const individual = [
    {
      title: "Artoo Blogs",
      content:
        "A blogging social media site where artists can share their artworks to others.",
      // detailUrl: "/project/artoo-blogs",
      url: "https://artoo-blogs.herokuapp.com/",
      icon: artooIcon
    },
    {
      title: "This Portfolio",
      content:
        "A portfolio is inspired by the Dracula Theme on VS Code.",
      url: "https://vinhhao-truong.github.io/portfolio-react/",
      icon: portfolioIcon
    },
  ];

  const team = [
    {
      title: "Comms Declare",
      content:
        "Improve the UI of the website.",
      url: "https://commsdeclare.org/"
    },
    {
      title: "New Relic One SMTP",
      content:
        "The automatic email system (for JDS) that sends emails to its users periodically based on their requests.",
      // detailUrl: "/project/jds-smtp",
      url: "https://github.com/regix0/JDS",
      icon: jdsIcon
    },
  ];

  return (
    <div ref={ref} className="project-main-content">
      <div className="individual">
        <h2>Individual Projects</h2>
        <Row className="row" wrap gutter={[5, 5]}>
          {individual.map((project, idx) => (
            <Col sm={24} md={24} xs={24} lg={12} xl={12} key={idx} span={12}>
              <Card
                title={project.title}
                content={project.content}
                detailUrl={project.detailUrl}
                url={project.url}
                icon={project.icon}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="line"></div>
      <div className="team">
        <h2>Team Projects</h2>
        <Row wrap gutter={[5, 5]}>
          {team.map((project, idx) => (
            <Col sm={24} md={24} xs={24} lg={12} xl={12} key={idx} span={12}>
              <Card
                title={project.title}
                content={project.content}
                detailUrl={project.detailUrl}
                url={project.url}
                icon={project.icon}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
});

export default Projects;
