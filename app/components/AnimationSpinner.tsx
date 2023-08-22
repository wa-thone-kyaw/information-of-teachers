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
