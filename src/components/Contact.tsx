import React, { useState } from "react";
import { MdCopyright } from "react-icons/md";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  // Email Form State
  const [emailName, setEmailName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // WhatsApp Form State
  const [waName, setWaName] = useState("");
  const [waMessage, setWaMessage] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = "sahilsah76777@gmail.com";
    const body = `Name: ${emailName}\nEmail: ${emailAddress}\n\n${emailMessage}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "917979733277";
    const defaultText = `Hi Sahil, I am ${waName}. ${waMessage ? waMessage : ""}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-header">
        <div className="badge">
          <span>💬 04 // GET IN TOUCH</span>
        </div>
        <h2>Let's <span>Work Together</span></h2>
        <p className="contact-subtitle">
          Have a project in mind or a potential opportunity? Send a direct email or connect instantly via WhatsApp below.
        </p>
      </div>

      <div className="contact-grid">
        {/* Card 1: Email Form */}
        <div className="contact-card card-email">
          <div className="card-header">
            <span className="card-icon icon-email"><FaEnvelope /></span>
            <div className="card-title-group">
              <h3>SEND A MESSAGE</h3>
              <p className="card-subtitle">DIRECT EMAIL DISPATCH</p>
            </div>
          </div>
          <form onSubmit={handleEmailSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={emailName}
                onChange={(e) => setEmailName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              rows={4}
              required
            ></textarea>
            <button type="submit" className="submit-btn email-btn">Send Message</button>
          </form>
        </div>

        {/* Card 2: WhatsApp Form */}
        <div className="contact-card card-whatsapp">
          <div className="card-header">
            <span className="card-icon icon-whatsapp"><FaWhatsapp /></span>
            <div className="card-title-group">
              <h3>DIRECT WHATSAPP</h3>
              <p className="card-subtitle">INSTANT CHAT WIDGET</p>
            </div>
            <span className="online-badge">
              <span className="pulse-dot"></span> ONLINE
            </span>
          </div>
          <p className="whatsapp-info">
            Prefer an immediate chat? Generate a custom WhatsApp message to connect directly with Sahil in real-time.
          </p>
          <form onSubmit={handleWhatsAppSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={waName}
              onChange={(e) => setWaName(e.target.value)}
              required
            />
            <textarea
              placeholder="Custom Message (Optional)"
              value={waMessage}
              onChange={(e) => setWaMessage(e.target.value)}
              rows={4}
            ></textarea>
            <button type="submit" className="submit-btn whatsapp-btn">Connect on WhatsApp</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <h2>Developed & Customized by <span>Sahil Kumar</span></h2>
        <h5>
          <MdCopyright /> 2026
        </h5>
      </div>
    </div>
  );
};

export default Contact;
