import "./Experiences.scss";
import { TiTickOutline } from "react-icons/ti";
import ReactLoading from 'react-loading';

const Experiences = () => {
  const Circle = ({ content, complete }) => {
    const color = !complete ? "#ffb86c" : "#17c3b2";

    const styled = {
      backgroundColor: color,
    };
    return (
      <div style={styled} className="Circle">
        {complete && <TiTickOutline className="tick" />}
        {!complete && <ReactLoading type="spokes" />}
        <p>{content}</p>
      </div>
    );
  };

  return (
    <div className="experiences-main-content">
      <h1 className="employment-title">Technical Employment</h1>
      <div className="employment-content">
        <Circle complete content="Software Engineering Graduate(2021)" />
        {" -----------> "}
        <Circle content="Looking for technical role..." />
      </div>
      <h1 className="volunteering-title">Volunteering</h1>
      <div className="volunteering-content">
        <Circle complete content="Comms Declare WordPress Website(2022)" />
        {" -----------> "}
        <Circle complete content="New Relic One (JDS) Automatic Email System(2022)" />
      </div>
    </div>
  );
};

export default Experiences;
