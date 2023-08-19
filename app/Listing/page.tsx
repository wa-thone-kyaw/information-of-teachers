"use client";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";

import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Link from "next/link";
import { Router } from "react-router-dom";
import router from "next/navigation";
import { useRouter } from "next/router";

const Admin = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
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

  return (
    <ClientOnly>
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>

              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  href={{
                    pathname: "/details",
                    query: {
                      name: item.name,
                      age: item.age,
                      childName: item.child_name,
                      BirthLocation: item.birth_location,
                      // ... other query parameters
                    },
                  }}
                  /*  href={`/details?name=${item.name}`} */
                >
                  View
                </Link>

                <button className="text-green-500 hover:text-green-700 mr-2">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ClientOnly>
  );
};
export default Admin;

// {
//   selectedItem && (
//     <div className="mt-4 p-4 border rounded">
//       <h2 className="text-lg font-semibold">Details</h2>
//       <p>Name: {selectedItem.name}</p>
//       <p>Child Name: {selectedItem.child_name}</p>
//       <p>Age: {selectedItem.age}</p>
//       {/* ... display other details ... */}
//     </div>
//   );
// }

// <Button
//   onClick={() => handleView(item)}
//   className="text-blue-500 hover:text-blue-700 mr-2"
// >
//   View
// </Button>;

//  const handleView = (item: React.SetStateAction<null>) => {
//    /* setSelectedItem(item); */
//    router.push({
//      pathname: "/details",
//      query: {
//        name: item?.name,
//        age: item?.age,
//      },
//    });
//  };
