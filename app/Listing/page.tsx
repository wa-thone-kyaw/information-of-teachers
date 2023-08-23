"use client";
import ClientOnly from "../components/ClientOnly";
import AnimationSpinner from "../components/AnimationSpinner";
import React, { useEffect, useState } from "react";

import Link from "next/link";

const Admin = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);

  //department
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/informations"); // Change the URL to your actual API endpoint for departments
        const jsonData = await response.json();
        setDepartmentOptions(jsonData);
      } catch (error) {
        console.error("Error fetching department options:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    console.log(searchText);
    const filtered = data.filter((item) => {
      const nameMatches = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const departmentMatches =
        selectedDepartment === "" ||
        (item.submit_person_dept &&
          item.submit_person_dept.toLowerCase() ===
            selectedDepartment.toLowerCase());
      return nameMatches && departmentMatches;
    });
    setFilteredData(filtered);
  };

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //filtering
  const [selectedDepartment, setSelectedDepartment] = useState("");

  /* const filterByDepartment = (department) => {
    setSelectedDepartment(department);
    if (department === "") {
      setFilteredData([]); // Clear the filter
    } else {
      const filtered = data.filter(
        (item) =>
          item.submit_person_dept &&
          item.submit_person_dept.toLowerCase() === department.toLowerCase()
      );
      // Apply name filter as well
      const nameFiltered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(nameFiltered);
    }
  }; */
  /* const filterByDepartment = (department) => {
    setSelectedDepartment(department);
    console.log(department);

    // Apply both department and name filters
    const filtered = data.filter((item) => {
      const departmentMatches =
        department === "" ||
        (item.submit_person_dept &&
          item.submit_person_dept.toLowerCase() === department.toLowerCase());

      const nameMatches = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      return departmentMatches && nameMatches;
    });

    setFilteredData(filtered);
  };
 */
  /* const filterByDepartment = (department) => {
    setSelectedDepartment(department);

    // Apply both department and name filters
    const filtered = data.filter((item) => {
      const departmentMatches =
        department === "" ||
        department === "All" || // Added condition
        (item.submit_person_dept &&
          item.submit_person_dept.toLowerCase() === department.toLowerCase());

      const nameMatches = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      return departmentMatches && nameMatches;
    });

    setFilteredData(filtered);
  }; */

  const filterByDepartment = (department) => {
    setSelectedDepartment(department);

    // Apply both department and name filters
    const filtered = data.filter((item) => {
      const departmentMatches =
        department === "" ||
        department === "All" || // Handle "All Departments" case
        (item.submit_person_dept &&
          item.submit_person_dept.toLowerCase() === department.toLowerCase());

      const nameMatches = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      return departmentMatches && nameMatches;
    });

    setFilteredData(filtered);
  };

  //for search

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/informations");
        console.log(response);

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const handleDelete = async (_id: any) => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    try {
      const response = await fetch(
        `http://localhost:8000/api-test/personal-id/search?_id=${_id}`,

        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("success delete");
        window.location.reload();
      } else {
        console.error("Delete request failed.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <ClientOnly>
      <br />
      <div className="flex justify-end mb-4 px-10">
        <div className="flex items-center">
          <input
            type="text"
            value={searchText}
            placeholder="Search by name "
            onChange={(e) => handleSearch(e.target.value)}
            className="border border-gray-300 rounded py-1 px-2 w-120 text-center focus:outline-none focus:border-blue-500"
          />
        </div>
        <br />
        <div className="flex justify-end mb-4 mt-4 px-10">
          {/* <select
            id="department"
            onChange={(e) => filterByDepartment(e.target.value)}
            value={selectedDepartment}
            className="border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">All Departments</option>
            <br />
            <option value="Civil">Civil</option>
            <br />
            <option value="Mech">Mechanical</option>
            <br />
            <option value="EP">EP</option>
            <br />
            <option value="EC">EC</option>
            <br />
            <option value="IT">IT</option>
            <br />
          </select> */}

          <select
            id="department"
            onChange={(e) => filterByDepartment(e.target.value)}
            value={selectedDepartment}
            className="border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Departments</option>
            {departmentOptions.map((option) => (
              <option key={option.id} value={option.submit_person_dept}>
                {option.submit_person_dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {(filteredData.length > 0 ? filteredData : data).map(
              (item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.submit_person_dept}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-8">
                    <Link
                      className="text-white hover:bg-blue-700 hover:text-green-300 mr-2  bg-blue-500 font-bold py-2 px-4 rounded"
                      href={{
                        pathname: "/details",
                        query: {
                          name: item.name,
                          child_name: item.child_name,
                          other_name: item.other_name,
                          age: item.age,
                          birth_date: item.birth_date,
                          birth_location: item.birth_location,
                          religion: item.religion,
                          nation: item.nation,
                          nrc: item.nrc,
                          height: item.height,
                          weight: item.weight,
                          hair_color: item.hair_color,
                          eyes_color: item.eyes_color,
                          prominent_sign: item.prominent_sign,
                          department: item.department,
                          service_age: item.service_age,
                          current_address: item.current_address,
                          permanent_address: item.permanent_address,
                          education: item.education,
                          degree: item.degree,
                          specialization: item.specialization,
                          degree_year_received: item.degree_year_received,
                          grade: item.grade,
                          first_degree: item.first_degree,
                          graduate_degree: item.graduate_degree,
                          school_attended: item.school_attended,
                          from_years: item.from_years,
                          finished_years: item.finished_years,
                          type_of_school: item.type_of_school,
                          school_location: item.school_location,
                          school_level: item.school_level,
                          from_year_abroad: item.from_year_abroad,
                          finished_year_abroad: item.finished_year_abroad,
                          countries_visited: item.countries_visited,
                          matter_of_visiting: item.matter_of_visiting,
                          deposit_exchange: item.deposit_exchange,
                          father_relative_name: item.father_relative_name,
                          father_relativeness: item.father_relativeness,
                          father_relativeness_gender:
                            item.father_relativeness_gender,
                          father_relativeness_citizen:
                            item.father_relativeness_citizen,
                          father_relativeness_job: item.father_relativeness_job,
                          father_relativeness_location:
                            item.father_relativeness_location,
                          father_relativeness_note:
                            item.father_relativeness_note,
                          mother_relative_name: item.mother_relative_name,
                          mother_relativeness: item.mother_relativeness,
                          mother_relativeness_gender:
                            item.mother_relativeness_gender,
                          mother_relativeness_citizen:
                            item.mother_relativeness_citizen,
                          mother_relativeness_job: item.mother_relativeness_job,
                          mother_relativeness_location:
                            item.mother_relativeness_location,
                          mother_relativeness_note:
                            item.mother_relativeness_note,
                          oversea_name: item.oversea_name,
                          oversea_relative_name: item.oversea_relative_name,
                          oversea_relativeness: item.oversea_relativeness,
                          oversea_relativeness_gender:
                            item.oversea_relativeness_gender,
                          oversea_relativeness_citizen:
                            item.oversea_relativeness_citizen,
                          oversea_relativeness_job:
                            item.oversea_relativeness_job,
                          oversea_relativeness_location:
                            item.oversea_relativeness_location,
                          oversea_relativeness_note:
                            item.oversea_relativeness_note,
                          love_name: item.love_name,
                          love_relative_name: item.love_relative_name,
                          love_relativeness: item.love_relativeness,
                          love_relativeness_gender:
                            item.love_relativeness_gender,
                          love_relativeness_citizen:
                            item.love_relativeness_citizen,
                          love_relativeness_job: item.love_relativeness_job,
                          love_relativeness_location:
                            item.love_relativeness_location,
                          love_relativeness_note: item.love_relativeness_note,
                          love_father_name: item.love_father_name,
                          love_father_relative_name:
                            item.love_father_relative_name,
                          love_father_relativeness:
                            item.love_father_relativeness,
                          love_father_relativeness_gender:
                            item.love_father_relativeness_gender,
                          love_father_relativeness_citizen:
                            item.love_father_relativeness_citizen,
                          love_father_relativeness_job:
                            item.love_father_relativeness_job,
                          love_father_relativeness_location:
                            item.love_father_relativeness_location,
                          love_father_relativeness_note:
                            item.love_father_relativeness_note,
                          love_mother_name: item.love_mother_name,
                          love_mother_relative_name:
                            item.love_mother_relative_name,
                          love_mother_relativeness:
                            item.love_mother_relativeness,
                          love_mother_relativeness_gender:
                            item.love_mother_relativeness_gender,
                          love_mother_relativeness_citizen:
                            item.love_mother_relativeness_citizen,
                          love_mother_relativeness_job:
                            item.love_mother_relativeness_job,
                          love_mother_relativeness_location:
                            item.love_mother_relativeness_location,
                          love_mother_relativeness_note:
                            item.love_mother_relativeness_note,
                          child_name_t: item.child_name_t,
                          child_relative_name_n: item.child_relative_name_n,
                          child_relativeness: item.child_relativeness,
                          child_relativeness_gender:
                            item.child_relativeness_gender,
                          child_relativeness_citizen:
                            item.child_relativeness_citizen,
                          child_relativeness_job: item.child_relativeness_job,
                          child_relativeness_location:
                            item.child_relativeness_location,
                          child_relativeness_note: item.child_relativeness_note,
                          oversea_relative_name_n: item.oversea_relative_name_n,
                          oversea_relative_relativeness:
                            item.oversea_relative_relativeness,
                          oversea_relative_nation: item.oversea_relative_nation,
                          oversea_relative_job: item.oversea_relative_job,
                          oversea_relative_current_country:
                            item.oversea_relative_current_country,
                          oversea_relative_matter: item.oversea_relative_matter,
                          oversea_relative_return: item.oversea_relative_return,
                          dept_action_taken: item.dept_action_taken,
                          dept_action_taken_fact: item.dept_action_taken_fact,
                          dept_action_taken: item.dept_action_taken,
                          dept_punishment: item.dept_punishment,
                          dept_action_taken_note: item.dept_action_taken_note,
                          court_time: item.court_time,
                          court_fact: item.court_fact,
                          court_action: item.court_action,
                          court_note: item.court_note,
                          degree_give_year: item.degree_give_year,
                          what_type_degree: item.what_type_degree,
                          degree_give_note: item.degree_give_note,
                          go_abroad: item.go_abroad,
                          reason_go_abroad: item.reason_go_abroad,
                          abroad_country: item.abroad_country,
                          time_abroad: item.time_abroad,
                          arrive_time_abroad: item.arrive_time_abroad,
                          what_gov_abroad: item.what_gov_abroad,
                          dept_when_arr_from_abroad:
                            item.dept_when_arr_from_abroad,
                          need_to_go_abroad: item.need_to_go_abroad,
                          credentials_for_abroad: item.credentials_for_abroad,
                          submit_person_date: item.submit_person_date,
                          submit_person_ticket: item.submit_person_ticket,
                          submit_person_name: item.submit_person_name,
                          submit_person_position: item.submit_person_position,
                          submit_person_dept: item.submit_person_dept,
                          stuff_behavior: item.stuff_behavior,
                          date: item.date,
                          submit_person1_ticket: item.submit_person1_ticket,
                          submit_person1_name: item.submit_person1_name,
                          submit_person1_position: item.submit_person1_position,
                          submit_person1_dept: item.submit_person1_dept,
                          headmaster_ticket: item.headmaster_ticket,
                          headmaster_name: item.headmaster_name,
                          headmaster_position: item.headmaster_position,
                          headmaster_dept: item.headmaster_dept,
                          headmaster_date: item.headmaster_date,
                          school_headmaster_ticket:
                            item.school_headmaster_ticket,
                          school_headmaster_name: item.school_headmaster_name,
                          school_headmaster_position:
                            item.school_headmaster_position,
                          school_headmaster_dept: item.school_headmaster_dept,
                          school_headmaster_dept_date:
                            item.school_headmaster_dept_date,
                        },
                      }}
                    >
                      View
                    </Link>

                    {/*  <button className="text-green-500 hover:text-green-700 mr-2">
                  Edit
                </button> */}
                    <button
                      className="text-white hover:bg-red-700 hover:text-green-300 mr-2  bg-pink-500 font-bold py-2 px-4 rounded "
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <AnimationSpinner />
        </div>
      )}
    </ClientOnly>
  );
};
export default Admin;
