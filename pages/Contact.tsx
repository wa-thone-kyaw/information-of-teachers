import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  IoMdArrowRoundBack,
  IoMdBackspace,
  IoMdClose,
  IoMdCloseCircle,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import router from "next/router";

const Contact = () => {
  const handleClose = (e: any) => {
    setTimeout(() => {
      router.push("/");
    });
  };
  const form = useRef();

  const sendEmail = (e: { target: any; preventDefault: () => void }) => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setAge("");
    setDept("");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wqvhnr4",
        "template_d18lxlw",

        form.current,
        "n0gHIxLluIpnpOtlu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [dept, setDept] = useState("");
  const [age, setAge] = useState("");

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h3 className="text-3xl text-center font-bold mb-4 text-blue-600">
        Get in touch with Admin
      </h3>
      <button
        onClick={handleClose}
        className="

p1
border-0
hover:opacity-70
transition
absolute
left-9"
      >
        <IoMdCloseCircle size={30} />{" "}
      </button>
      <br />
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-600">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-600">
          BirthDate
        </label>
        <input
          type="date"
          id="age"
          name="age"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dept" className="block text-gray-600">
          Department
        </label>
        <input
          type="text"
          id="dept"
          name="dept"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-green-400 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
