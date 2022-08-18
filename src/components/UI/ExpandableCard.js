import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./ExpandableCard.scss";

const ExpandableCard = (props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  const classes = props.className ? props.className : "";

  const handleCheckboxClicked = (e) => {
    e.preventDefault();
    console.log('ok')
    setIsTooltipOpen(true);
    if(props.isChecked) {
      setTooltipContent("Cannot be undone :(")
    } else {
      setTooltipContent("In progress :)")
    }
  }

  return (
    <div
      data-tip
      data-for="tooltip"
      style={{
        "textDecoration": `${props.isChecked ? "line-through" : "none"}`,
        "color": `${props.isChecked ? "gray" : "green"}`
      }}
      className={`ExpandableCard ${classes}`}
    >
      <h2>{props.title}</h2>
      {props.children}
      <input onClick={handleCheckboxClicked} checked={props.isChecked} type="checkbox" name="checkbox" id="checkbox" />
      {
        isTooltipOpen && <ReactTooltip id="tooltip">
          <span>{tooltipContent}</span>
        </ReactTooltip>
      }
    </div>
  );
};

export default ExpandableCard;
