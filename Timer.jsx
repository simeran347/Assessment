import React from "react";
  
export default function Timer(props) {
  return (
    <div>
      <span>
        {(Math.floor((props.time / 60) % 60))}:
      </span>
      <span className="digits">
        {(Math.floor((props.time / 1000) % 60))}.
      </span>
      <span>
        {(props.time / 10) % 100}
      </span>
    </div>
  );
}
