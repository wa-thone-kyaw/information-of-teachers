// import React from "react";

// export default function SearchForm() {
//   return (
//     <div className="text-rose-500 text-4xl flex items-center justify-center h-screen">
//       Search Form will be available soon....
//     </div>
//   );
// }

import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <FormControl
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl
        type="textarea"
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SearchForm;
