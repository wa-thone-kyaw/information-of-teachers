// pages/api/informations.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      child_name,
      other_name,
      age,
      birth_date,
      birth_location,
      religion,
      nation,
      nrc,
      height,
      weight,
      hair_color,
      eyes_color,
      prominent_sign,
      department,
      service_age,
      current_address,
      permanent_address,
      education,
      degree,
      specialization,
      degree_year_received,
      grade,
      first_degree,
      graduate_degree,
      school_attended,
      from_years,
      finished_years,
      school_location,
      school_level,
      from_year_abroad,
      finished_year_abroad,
      countries_visited,
      matter_of_visiting,
      deposit_exchange,
      father_name,
      father_relative_name,
      father_relativeness,
      father_relativeness_gender,
      father_relativeness_citizen,
      father_relativeness_job,
      father_relativeness_location,
      father_relativeness_note,
    } = req.body; // Assuming your form has a field with "name" attribute

    try {
      // Forward the data to your Node.js backend using Axios or any other HTTP library
      // Replace "http://your-node-js-backend-url:port/api/informations" with your actual backend URL
      await axios.post("http://localhost:8000/api/informations", {
        name,
        child_name,
        other_name,
        age,
        birth_date,
        birth_location,
        religion,
        nation,
        nrc,
        height,
        weight,
        hair_color,
        eyes_color,
        prominent_sign,
        department,
        service_age,
        current_address,
        permanent_address,
        education,
        degree,
        specialization,
        degree_year_received,
        grade,
        first_degree,
        graduate_degree,
        school_attended,
        from_years,
        finished_years,
        school_location,
        school_level,
        from_year_abroad,
        finished_year_abroad,
        countries_visited,
        matter_of_visiting,
        deposit_exchange,
        father_name,
        father_relative_name,
        father_relativeness,
        father_relativeness_gender,
        father_relativeness_citizen,
        father_relativeness_job,
        father_relativeness_location,
        father_relativeness_note,
      });

      res.status(200).json({ message: "Data sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending data!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
