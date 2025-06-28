import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-section hidden" id="about">
        <p className="about-title">About</p>
        <p>
          This is a simple stopwatch application built using React. It allows
          users to start, stop, pause, reset, and record lap times with smooth
          updates and precise timing logic. The timer logic is powered by{" "}
          <code>useRef</code> to manage internal state efficiently without
          unnecessary re-renders, and the UI is updated using{" "}
          <code>useState</code> for accurate and reactive display.
        </p>

        <p className="key-features">Key features</p>
        <div className="key-card">
          <p>Live updating timer in minutes, seconds, and milliseconds</p>
          <p>Start, Stop, Pause, and Reset controls</p>
          <p>Lap time recording with dynamic display</p>
        </div>
      </div>
    </div>
  );
}
export default About;
