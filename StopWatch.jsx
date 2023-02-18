import React, { useState } from "react";
import Timer from "../Timer";
import Button from "../Button";
  
function StopWatch() {
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isStart && !isStop) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStart, isStop]);
  
  const handleStart = () => {
    setIsStart(true);
    setIsStop(false);
  };
  
  const handleStop = () => {
    setIsStop(!isStop);
  };
  
  const handleReset = () => {
    setIsStart(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <Button
        start={isStart}
        isStop={isStop}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;
