import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const toName = e.target.elements.to_name.value.trim();
    const fromEmail = e.target.elements.from_email.value.trim();
    const toTextarea = e.target.elements.message.value.trim();

    if (!toName || !fromEmail || !toTextarea) {
      swal({
        icon: "error",
        text: "PLease complete all the feilds",
      });
      return;
    }

    emailjs
      .sendForm("service_3k8flvw", "template_4jftufe", form.current, {
        publicKey: "XuwxhX_W0WexMptRB",
      })
      .then(
        () => {
          swal({
            icon: "success",
            text: "Succcessfully send",
          });
          e.target.reset();
        },
        (error) => {
          swal({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };

  const scrollToTop= () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth",

    })
  }

  return (
    <div className="footer-page-back">
      <div className="footer-main">
        <div className="footer-heading">
          <h1 className="heading">
            Contact <span>Me</span>
          </h1>
        </div>

        <div className="contact-details">
          <div className="info-left">
            <h1>
              Phone_ <span>+923119730546</span>
            </h1>
            <h1>
              E mail_ <span>aliyasmuhammad1122@gmail.com</span>
            </h1>
            <h1>
              Location_ <span>Khomer_Yarkot_gilgit</span>
            </h1>
            <h1>
              Country_<span>Pakistan</span>
            </h1>
            <div className="other-plateform">
              <Link
                to="https://www.facebook.com/aliyas.muhammad.370"
                target="_blank"
              >
                <ImFacebook2 className="icons" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/aliyas-muhammad/"
                target="_blank"
              >
                <FaLinkedin className="icons" />
              </Link>
            </div>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputs">
                <FaUser className="user" />
                <input
                  type="text"
                  name="to_name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="inputs">
                <MdEmail className="user" />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your Email"
                />
              </div>
              <textarea
                name="message"
                className="message"
                placeholder="Write your Message Here..."
              />
              <button type="submit" className="submit-message">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <hr />
        <Link onClick={scrollToTop}>
          <MdArrowUpward className="upArrow" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
