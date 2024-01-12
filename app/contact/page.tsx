"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import GoUp from "../components/GoUp";

type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zk3pwga",
          "template_b4jtgcg",
          form.current,
          "Hrk3myk-4GMixpPl7"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center sm:text-6xl text-4xl uppercase sm:mt-48 mt-24 sm:mb-14 mb-11 font-semibold">
        <span className="text-indigo-600 sm:text-8xl text-6xl font-bold">
          C
        </span>
        ontact
        <span className="text-indigo-600 sm:text-8xl text-6xl font-bold">
          {" "}
          U
        </span>
        s
      </h1>
      <div className="flex justify-center items-center flex-col sm:mb-32 mb-20 sm:py-8 py-4 sm:px-20 px-8 border-indigo-600 border-2 rounded-2xl shadow-[2px_5px_15px_5px_rgba(0,0,0,1)]">
        <form autoComplete="off" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name:"
            name="user_name"
            className="sm:my-5 my-3 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
            required
            autoComplete="off"
          />
          <br></br>
          <input
            type="text"
            placeholder="Email:"
            name="user_email"
            required
            autoComplete="off"
            className="sm:my-5 my-3 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
          />
          <br></br>
          <input
            type="text"
            placeholder="Subject:"
            name="subject"
            required
            autoComplete="off"
            className="sm:my-5 my-3 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
          />
          <br></br>
          <textarea
            name="message"
            placeholder="Type your Message:"
            required
            autoComplete="off"
            cols={30}
            rows={10}
            className="my-5 border-2 border-black sm:p-3 p-3 rounded placeholder-black"
          ></textarea>
          <br></br>
          <div className="flex justify-center items-center flex-col">
            <button
              type="submit"
              className="text-center p-4 border-indigo-600 border-2 rounded-full bg-black text-white sm:font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="absolute sm:top-[100rem] top-[75rem] right-5 sm:right-8 w-min scroll-smooth">
        <GoUp />
      </div>
    </div>
  );
};

export default Contact;
