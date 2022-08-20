import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import "./About.scss";

import reactIcon from "../../icons/react.jpg";
import jsIcon from "../../icons/js.jpg";
import htmlIcon from "../../icons/html.png";
import cssIcon from "../../icons/css.png";
import sassIcon from "../../icons/sass.png";
import nodeIcon from "../../icons/node.png";
import expressIcon from "../../icons/express.png";
import mongodbIcon from "../../icons/mongodb.png";
import reduxIcon from "../../icons/redux.png";
import { ReactComponent as AboutSVG } from "../../svg/about.svg";

import Circle from "../../UI/Circle";
import ExpandableCard from "../../UI/ExpandableCard";

const About = React.forwardRef((props, ref) => {
  const [quoteIsLoading, setQuoteIsLoading] = useState(false);
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const fetchRandomQuote = async () => {
    try {
      setQuoteIsLoading(true);
      const res = await axios({
        method: "GET",
        url: "https://api.quotable.io/random?tags=inspirational&maxLength=100",
      });
      const { content, author } = await res.data;
      setQuote({
        content: content,
        author: author,
      });
      setQuoteIsLoading(false);
    } catch (err) {
      console.log(err);
      setQuoteIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const Icon = ({ src, alt }) => (
    <img className="icon" src={src} alt={alt} width="15px" height="15px" />
  );

  return (
    <>
      <div ref={ref} className="about-main-content">
        <h2 className="dr-cmt">//Arnold Truong...</h2>
        <p>
          <span className="dr-pink c">const</span>{" "}
          <span className="dr-purple">passion</span>{" "}
          <span className="dr-pink">=</span>{" "}
          <span className="dr-green">require</span>
          <span className="dr-pink">(</span>
          <span className="dr-yellow">'new-technology'</span>
          <span className="dr-pink">)</span>;
        </p>
        <p>
          <span className="dr-pink">const</span>{" "}
          <span className="dr-purple">intro</span>{" "}
          <span className="dr-pink">=</span>{" "}
          <span className="dr-yellow">
            "I am a tech lover with a desire to learn new things everyday.
            Currently, I mostly focus on Web Development but will try to go
            beyond the boundary to study more other technology. With that in
            mind, I consider myself to be good at critical thinking and problems
            solving."
          </span>
          ;
        </p>
        <p>
          <span className="dr-pink">let</span> knownProgrammingTechs{" "}
          <span className="dr-pink">= [</span>
          <Icon src={htmlIcon} alt="htmlIcon" />
          :HTML, <Icon src={cssIcon} alt="cssIcon" />
          :CSS, <Icon src={sassIcon} alt="sassIcon" />
          :SASS, <Icon src={jsIcon} alt="jsIcon" />
          :JavaScript, <Icon src={reactIcon} alt="reactIcon" />
          :ReactJS, <Icon src={reduxIcon} alt="reduxIcon" />
          :Redux, <Icon src={nodeIcon} alt="nodeIcon" />
          :NodeJS, <Icon src={expressIcon} alt="expressIcon" />
          :ExpressJS, <Icon src={mongodbIcon} alt="mongodbIcon" />
          :MongoDB
          <span className="dr-pink">]</span>;
        </p>
        <p>
          <span className="dr-pink">export default</span> knownProgrammingTechs.
          <span className="dr-green">concat</span>
          <span className="dr-pink">(</span>
          <span className="dr-purple">passion</span>
          <span className="dr-pink">)</span>;
        </p>
      </div>
      <div className="border"></div>
      <div className="about-sub-content">
        <h2 className="dr-cmt">//Today's quote</h2>
        <div className="quote">
          {quoteIsLoading && (
            <ReactLoading className="loading" type="bubbles" />
          )}
          {!quoteIsLoading && quote.content && (
            <>
              <div className="quote__content dr-yellow">"{quote.content}"</div>
              <div className="quote__author dr-green">-{quote.author}-</div>
            </>
          )}
          {!quoteIsLoading && !quote.content && (
            <p className="no-quote dr-cmt">
              No quote today! (̂ ˃̥̥̥ ˑ̫ ˂̥̥̥ )̂ <br />
              Something went wrong!
            </p>
          )}
        </div>
      </div>
      <AboutSVG />
    </>
  );
});

export default About;
