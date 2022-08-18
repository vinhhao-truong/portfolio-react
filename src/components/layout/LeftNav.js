import { Link } from "react-router-dom";
import {IoChevronBackCircle} from 'react-icons/io5'

import "./LeftNav.scss";

const LeftNav = () => {
  return (
    <div className="LeftNav">
      <div className="LeftNav__content">
        <Link to="/"><IoChevronBackCircle /></Link>
      </div>
    </div>
  );
};

export default LeftNav;
