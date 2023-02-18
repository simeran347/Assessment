import React from "react";
  
export default function Button(props) {
  const StartButton = (
    <div onClick={props.handleStart}>Start</div>
  );
  const ActiveButtons = (
    <div>
      <div onClick={props.handleReset}>
        Reset
      </div>
      <div onClick={props.handleStop}>
        {props.isStop ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div>
      <div>{props.start ? ActiveButtons : StartButton}</div>
    </div>
  );
}
