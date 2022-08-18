import { useState, useEffect } from "react";
import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { MdNotStarted } from "react-icons/md";
import "./MainContent.scss";
import LeftNav from "../layout/LeftNav";

const MainContent = () => {
  const [isCovered, setIsCovered] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/main-content") {
      navigate("/main-content/about");
    }
  }, [navigate, location]);

  const currentSection = () => {
    const currentPath = location.pathname;
    const pathname = currentPath.slice(
      currentPath.lastIndexOf("/") + 1,
      currentPath.length
    );

    return pathname[0].toUpperCase() + pathname.slice(1, pathname.length);
  };

  const navLinkActiveStyled = {
    background: "#282a36",
    color: "#50fa7b",
  };

  const uncoverPadContent = (e) => {
    e.preventDefault();
    setIsCovered(false);
    navigate("/main-content/about");
  };

  return (
    <>
      <LeftNav />
      <main className="MainContent">
        <div className="Pad">
          {isCovered ? (
            <div className="Pad__cover">
              <MdNotStarted
                className="start-icon"
                onClick={uncoverPadContent}
              />
              <p>
                <b>Let's go</b>
              </p>
            </div>
          ) : (
            <div className="Pad__content">
              <ul className="pad-nav">
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? navLinkActiveStyled : undefined
                    }
                    to="/main-content/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? navLinkActiveStyled : undefined
                    }
                    to="/main-content/experiences"
                  >
                    Experiences
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? navLinkActiveStyled : undefined
                    }
                    to="/main-content/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? navLinkActiveStyled : undefined
                    }
                    to="/main-content/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className={`pad-main ${currentSection()}`}>
                <Outlet />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default MainContent;
