import React, { useRef, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import emailjs from "@emailjs/browser";
import "./contact.scss";
interface IProps {
  contactRef?: any;
}
const Contact: React.FC<IProps> = ({ contactRef }) => {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [text, setText] = useState<string | null>("");
  const formRef = useRef<any>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const sendMail = () => {
    emailjs
      .send(
        "service_qu7shyl",
        "template_3sb3rck",
        {
          name,
          email,
          notes: text,
        },
        "50dTFBlrQthGuugBL"
      )
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => setError(true));
  };
  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-container">
        <div className="title">Contact</div>
        {success && <div className="contact-response success">Success</div>}
        {error && <div className="contact-response error">Error</div>}
        <div className="contact-layout">
          <div className="contact-nav">
            <div className="contact-nav__item">
              <IonIcon name="mail-unread-outline"></IonIcon>
              <div className="">hnam11102k@gmail.com</div>
            </div>
            <div className="contact-nav__item">
              <IonIcon name="logo-github"></IonIcon>
              <a href="github.com/huynhnhutnam2k">Github</a>
            </div>
            <div className="contact-nav__item">
              <IonIcon name="logo-facebook"></IonIcon>
              <a href="https://www.facebook.com/nhut.nam.1217">Nam Huynh</a>
            </div>
          </div>
          <div className="contact-content" ref={formRef}>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <textarea
              name=""
              id=""
              cols={40}
              rows={20}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setText(e.target.value)
              }
            ></textarea>
            <button type="submit" onClick={sendMail}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
