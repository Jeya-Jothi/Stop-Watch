import "./MainContent.css";
function MainContent() {
  return (
    <div className="content" id="main">
      <div className="card">
        <div className="stopwatch">
          <span id="minutes">00</span>:<span id="seconds">00</span>:
          <span id="milliseconds">00</span>
        </div>
        <div className="controls">
          <button id="startBtn">Start</button>
          <button id="stoptBtn">Stop</button>
          <button id="pauseBtn">Pause</button>
          <button id="resetBtn">Reset</button>
        </div>
        <div className="laps">
          <p className="laps-title">Lap Timer</p>
          <ul className="lap-list">
            <li>
              <span className="sub-lap">Lap 1:</span> 01:45:20
            </li>
            <li>
              <span className="sub-lap">Lap 2:</span> 01:45:20
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
