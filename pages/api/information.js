// pages/api/informations.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, child_name, other_name, age, birth_date } = req.body; // Assuming your form has a field with "name" attribute

    try {
      // Forward the data to your Node.js backend using Axios or any other HTTP library
      // Replace "http://your-node-js-backend-url:port/api/informations" with your actual backend URL
      await axios.post("http://localhost:8000/api/informations", {
        name,
        child_name,
        other_name,
        age,
        birth_date,
      });

      res.status(200).json({ message: "Data sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending data!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
