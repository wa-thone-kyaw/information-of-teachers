// pages/api/informations.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      image,
      name,
      child_name,
      other_name,
      age,

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
      type_of_school,
      school_location,
      school_level,
      from_year_abroad,
      finished_year_abroad,
      countries_visited,
      matter_of_visiting,
      deposit_exchange,

      father_relative_name,
      father_relativeness,
      father_relativeness_gender,
      father_relativeness_citizen,
      father_relativeness_job,
      father_relativeness_location,
      father_relativeness_note,
      mother_relative_name,
      mother_relativeness,
      mother_relativeness_gender,
      mother_relativeness_citizen,
      mother_relativeness_job,
      mother_relativeness_location,
      mother_relativeness_note,
      oversea_relative_name,
      oversea_relativeness,
      oversea_relativeness_gender,
      oversea_relativeness_citizen,
      oversea_relativeness_job,
      oversea_relativeness_location,
      oversea_relativeness_note,
      love_relative_name,
      love_relativeness,
      love_relativeness_gender,
      love_relativeness_citizen,
      love_relativeness_job,
      love_relativeness_location,
      love_relativeness_note,
      love_father_relative_name,
      love_father_relativeness,
      love_father_relativeness_gender,
      love_father_relativeness_citizen,
      love_father_relativeness_job,
      love_father_relativeness_location,
      love_father_relativeness_note,
      love_mother_relative_name,
      love_mother_relativeness,
      love_mother_relativeness_gender,
      love_mother_relativeness_citizen,
      love_mother_relativeness_job,
      love_mother_relativeness_location,
      love_mother_relativeness_note,
      child_relative_name_n,
      child_relativeness,
      child_relativeness_gender,
      child_relativeness_citizen,
      child_relativeness_job,
      child_relativeness_location,
      child_relativeness_note,
      oversea_relative_name_n,
      oversea_relative_relativeness,
      oversea_relative_nation,
      oversea_relative_job,
      oversea_relative_current_country,
      oversea_relative_matter,
      oversea_relative_return,
      dept_action_taken,
      dept_action_taken_fact,
      dept_punishment,
      dept_action_taken_note,
      court_time,
      court_fact,
      court_action,
      court_note,
      degree_give_year,
      what_type_degree,
      degree_give_note,
      go_abroad,
      reason_go_abroad,
      abroad_country,
      time_abroad,
      arrive_time_abroad,
      what_gov_abroad,
      dept_when_arr_from_abroad,
      need_to_go_abroad,
      credentials_for_abroad,
      submit_person_date,
      submit_person_ticket,
      submit_person_name,
      submit_person_position,
      submit_person_dept,
    } = req.body; // Assuming your form has a field with "name" attribute

    try {
      // Forward the data to your Node.js backend using Axios or any other HTTP library
      // Replace "http://your-node-js-backend-url:port/api/informations" with your actual backend URL
      await axios.post("http://localhost:8000/api/informations", {
        image,
        name,
        child_name,
        other_name,
        age,

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
        type_of_school,
        school_location,
        school_level,
        from_year_abroad,
        finished_year_abroad,
        countries_visited,
        matter_of_visiting,
        deposit_exchange,

        father_relative_name,
        father_relativeness,
        father_relativeness_gender,
        father_relativeness_citizen,
        father_relativeness_job,
        father_relativeness_location,
        father_relativeness_note,
        mother_relative_name,
        mother_relativeness,
        mother_relativeness_gender,
        mother_relativeness_citizen,
        mother_relativeness_job,
        mother_relativeness_location,
        mother_relativeness_note,
        oversea_relative_name,
        oversea_relativeness,
        oversea_relativeness_gender,
        oversea_relativeness_citizen,
        oversea_relativeness_job,
        oversea_relativeness_location,
        oversea_relativeness_note,
        love_relative_name,
        love_relativeness,
        love_relativeness_gender,
        love_relativeness_citizen,
        love_relativeness_job,
        love_relativeness_location,
        love_relativeness_note,
        love_father_relative_name,
        love_father_relativeness,
        love_father_relativeness_gender,
        love_father_relativeness_citizen,
        love_father_relativeness_job,
        love_father_relativeness_location,
        love_father_relativeness_note,
        love_mother_relative_name,
        love_mother_relativeness,
        love_mother_relativeness_gender,
        love_mother_relativeness_citizen,
        love_mother_relativeness_job,
        love_mother_relativeness_location,
        love_mother_relativeness_note,
        child_relative_name_n,
        child_relativeness,
        child_relativeness_gender,
        child_relativeness_citizen,
        child_relativeness_job,
        child_relativeness_location,
        child_relativeness_note,
        oversea_relative_name_n,
        oversea_relative_relativeness,
        oversea_relative_nation,
        oversea_relative_job,
        oversea_relative_current_country,
        oversea_relative_matter,
        oversea_relative_return,
        dept_action_taken,
        dept_action_taken_fact,
        dept_punishment,
        dept_action_taken_note,
        court_time,
        court_fact,
        court_action,
        court_note,
        degree_give_year,
        what_type_degree,
        degree_give_note,
        go_abroad,
        reason_go_abroad,
        abroad_country,
        time_abroad,
        arrive_time_abroad,
        what_gov_abroad,
        dept_when_arr_from_abroad,
        need_to_go_abroad,
        credentials_for_abroad,
        submit_person_date,
        submit_person_ticket,
        submit_person_name,
        submit_person_position,
        submit_person_dept,
      });

      res.status(200).json({ message: "Data sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending data!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
