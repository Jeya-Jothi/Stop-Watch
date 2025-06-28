import "./Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <p className="contact-title">Contact</p>

        <div className="reach-me-card">
          <div>
            <a
              href="mailto:jeyajothi108@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/email logo.svg"
                alt="email"
                className="contact-logo"
              />
              jeyajothi108@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jeya-jothi-841277211"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/linkedin logo.svg"
                alt="linkedin"
                className="contact-logo"
              />
              Linkedin
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Jeya-Jothi"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/github logo.svg"
                alt="github"
                className="contact-logo"
              />
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://jothi-portfolio-9utu.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/logo jj.svg"
                alt="portfolio"
                className="contact-logo"
              />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
