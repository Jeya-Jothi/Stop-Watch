import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Stopwatch Timer</h1>
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
        <h2 className="laps-title">Lap Timer</h2>
        <ul className="lap-list">lap1: 01:45:20</ul>
      </div>
    </div>
  );
}

export default App;
