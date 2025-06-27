import "./App.css";
import Heading from "./component/Heading/Heading";
import MainContent from "./component/MainContent/MainContent";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { useState } from "react";

function App() {
  const [view, setview] = useState("main");
  const [aboutContent, setAboutContent] = useState("About");
  const [contactContent, setContactContent] = useState("Contact");
  const [animating, setAnimating] = useState(false);

  const switchToAbout = () => {
    setAboutContent("Home");
    setAnimating(true);
    setTimeout(() => {
      setview("about");
      setAnimating(false);
    }, 800);
  };

  const switchToMain = () => {
    setAboutContent("About");
    setContactContent("Contact");
    setAnimating(true);
    setTimeout(() => {
      setview("main");
      setAnimating(false);
    }, 800);
  };

  const switchToContact = () => {
    setContactContent("Home");
    setAnimating(true);
    setTimeout(() => {
      setview("contact");
      setAnimating(false);
    }, 800);
  };
  function check() {
    if (view === "main") {
      return <MainContent />;
    }
    if (view === "about") {
      return <About />;
    }
    if (view === "contact") {
      return <Contact />;
    }
  }
  return (
    <div className="container">
      <Heading
        about={switchToAbout}
        main={switchToMain}
        contact={switchToContact}
        aboutText={aboutContent}
        contactText={contactContent}
      />

      <div
        className={`content-wrapper ${
          animating ? "fade-out-up" : "fade-in-up"
        }`}
      >
        {check()}
      </div>
    </div>
  );
}

export default App;
