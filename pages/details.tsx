import React from "react";
import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const { name, age, childName, BirthLocation } = router.query;

  return (
    <div>
      <h1>Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Child Name : {childName}</p>
      <p> Birth Location : {BirthLocation}</p>
      {/* Display other details */}
    </div>
  );
}

export default DetailsPage;

// import React from "react";
// import { useRouter } from "next/router";

// function DetailsPage(data: any[]) {
//   const router = useRouter();
//   const { name } = router.query;

//   // Check if id is a valid integer
//   const parsedName = parseInt(name);
//   const selectedItem =
//     parsedName && data.find((item) => item.name === parsedName);

//   if (!selectedItem) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Details</h1>
//       <p>Name: {selectedItem.name}</p>
//       <p>Age: {selectedItem.age}</p>
//       {/* ... display other details ... */}
//     </div>
//   );
// }

// export default DetailsPage;

// export async function getServerSideProps() {
//   try {
//     const response = await fetch("http://localhost:8000/api/informations");
//     const data = await response.json();

//     return {
//       props: { data }, // Make sure data is an array
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { data: [] }, // Handle error by providing empty array
//     };
//   }
// }

// import React from "react";
// import { useRouter } from "next/router";

// function DetailsPage() {
//   const router = useRouter();
//   const { name, age, child_name } = router.query; // Retrieve query parameters

//   return (
//     <div>
//       <h1>Details</h1>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p> ChildName: {child_name}</p>

//       {/* ... display other details ... */}
//     </div>
//   );
// }

// export default DetailsPage;
// import React from "react";
// import { useRouter } from "next/router";

// function DetailsPage({ data }) {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find the selected item by matching the id
//   const selectedItem = data.find((item) => item.id === parseInt(id));

//   if (!selectedItem) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Details</h1>
//       <p>Name: {selectedItem.name}</p>
//       <p>Age: {selectedItem.age}</p>
//       {/* ... display other details ... */}
//     </div>
//   );
// }

// export default DetailsPage;

// export async function getServerSideProps() {
//   try {
//     const response = await fetch("http://localhost:8000/api/informations");
//     const data = await response.json();

//     return {
//       props: { data }, // Make sure data is an array
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { data: [] }, // Handle error by providing empty array
//     };
//   }
// }

// export async function getServerSideProps() {
//   // Fetch data from the API
//   const response = await fetch("http://localhost:8000/api/informations");
//   const data = await response.json();

//   return {
//     props: { data },
//   };
// }
