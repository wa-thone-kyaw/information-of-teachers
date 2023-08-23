import React from "react";

const AnimationSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16">
        <div className="relative flex space-x-2 animate-spin">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSpinner;

// {data.map((item, index) =>
// {(filteredData.length > 0 ? filteredData : data).map(
//               (item, index) =>

// {(selectedDepartment !== "" ? filteredData : data).map(
//               (item, index) =>

//  <div className="form-group">
//    <label className="block text-gray-700 text-sm font-bold mb-2">
//      Upload Image:
//    </label>
//    <input
//      type="file"
//      /*  value={setSelectedImage} */
//      id="image"
//      accept="image"
//      onChange={handleFileChange}
//      className="mt-1"
//    />
//  </div>;
