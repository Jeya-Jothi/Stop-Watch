import "./Heading.css";
function Heading(props) {
  function handleAbout() {
    if (props.aboutText === "About") {
      props.about();
    }
    if (props.aboutText === "Home") {
      props.main();
    }
  }
  function handleContact() {
    if (props.contactText === "Contact") {
      props.contact();
    }
    if (props.contactText === "Home") {
      props.main();
    }
  }
  return (
    <div className="heading">
      <img src="images/timer logo.svg" alt="logo" className="logo-img" />
      <p className="heading-txt">Stopwatch Timer</p>
      <div className="nav-div">
        <span onClick={handleAbout}>{props.aboutText}</span>
        <span onClick={handleContact}>{props.contactText}</span>
      </div>
    </div>
  );
}
export default Heading;
