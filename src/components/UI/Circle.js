import ReactTooltip from "react-tooltip";

// import "./Circle.scss";

const Circle = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        data-tip
        data-for={props.tooltipId ? props.tooltipId : ""}
        className={`Circle ${props.className ? props.className : ""}`}
        style={
          props.bgColor
            ? {
                backgroundColor: props.bgColor,
              }
            : {}
        }
      >
        <div className="Circle__content">{props.children}</div>
      </div>
      {props.tooltipContent && (
        <ReactTooltip
          id={props.tooltipId}
          place="bottom"
          effect="solid"
          offset={{bottom: "10rem"}}
          delayShow={100}
          backgroundColor="#adb5bd"
          border
          borderColor="#6c757d"
        >
          {props.tooltipContent}
        </ReactTooltip>
      )}
    </>
  );
};

export default Circle;
