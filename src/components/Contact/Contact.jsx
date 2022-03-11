import "./Contact.css";
import { contacts } from "../../constants";

const Contact = () => {
  return (
    <div className="app__contact" id="contact">
      <div className="app__contact-title">
        <p className="contact__info">Find me on :</p>
      </div>
      <div className="app__contact-details">
        <a href="mailto:ravishankar270290@gmail.com">
          <img src={contacts.mail} alt="Mail" className="contact__icon" />
        </a>
        <a href="https://github.com/ravishankarr90" target="_blank">
          <img src={contacts.github} alt="GitHub" className="contact__icon" />
        </a>
        <a href="https://www.linkedin.com/in/ravishankarr90/" target="_blank">
          <img
            src={contacts.linkedin}
            alt="LinkedIn"
            className="contact__icon"
          />
        </a>
        <a href="https://www.facebook.com/ravishankar4u4ever" target="_blank">
          <img
            src={contacts.facebook}
            alt="Facebook"
            className="contact__icon"
          />
        </a>
        <a href="https://www.instagram.com/ravishankar4u4ever/" target="_blank">
          <img
            src={contacts.instagram}
            alt="Instagram"
            className="contact__icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
