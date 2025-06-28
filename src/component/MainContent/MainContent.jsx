import { useState, useRef } from "react";
import "./MainContent.css";
function MainContent() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [millisecond, setMillisecond] = useState(0);
  // Timer Storage
  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [lap, setLap] = useState([]);

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }

  function handleStart() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      timeRef.current += 10;

      const total = timeRef.current;
      const mins = Math.floor(total / 60000);
      const secs = Math.floor((total % 60000) / 1000);
      const ms = Math.floor((total % 1000) / 10);

      setMinute(mins);
      setSecond(secs);
      setMillisecond(ms);
    }, 10);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    timeRef.current = 0;
    setLap((prev) => {
      const stopTime = `${padTime(minute)}:${padTime(second)}:${padTime(
        millisecond
      )}`;
      return [...prev, { time: stopTime }];
    });
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    intervalRef.current = null;
    timeRef.current = 0;
    setMinute(0);
    setSecond(0);
    setMillisecond(0);
  };

  const handleClear = () => {
    setLap([]);
  };

  return (
    <div className="content" id="main">
      <div className="card">
        <div className="stopwatch">
          <span>{padTime(minute)}</span>:<span>{padTime(second)}</span>:
          <span id="milliseconds">{padTime(millisecond)}</span>
        </div>
        <div className="controls">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="laps">
          <p className="laps-title">Lap Timer</p>
          <ul className="lap-list">
            {lap.map((item, index) => {
              return (
                <li key={index}>
                  <span className="sub-lap">Lap {index + 1}:</span> {item.time}
                </li>
              );
            })}
          </ul>
          {lap.length > 0 ? (
            <div className="clear-div">
              <button className="clear-btn" onClick={handleClear}>
                Clear Laps
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default MainContent;
