import React from "react";
import NavigationMenu from "./NavigationMenu";

import "./contactus.css";
function Contactus() {
  return (
    <div>
      <NavigationMenu />
      <div className="container relative mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
        <div className="contact-box md:rounded-2xl">
          <div className="left md:rounded-tl-2xl md:rounded-bl-2xl"></div>
          <div className="right">
            <h2 className="relative mb-[10px] text-[20px]">Contact Us</h2>

            <input
              id="name"
              name="name"
              type="text"
              className="field"
              placeholder="Username"
              required
            />

            <input
              id="email"
              name="email"
              type="email"
              className="field"
              placeholder="Your Email"
              required
            />

            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Message"
              className="field resize-none"
              required
            ></textarea>
            <button className="btn bg-blue-500 hover:bg-cyan-500">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
