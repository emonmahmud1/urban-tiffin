import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <h4 className="font-semibold text-lg">{item.name}</h4>
      <p className="text-sm text-gray-500 mt-1 flex-grow">{item.desc}</p>
      <div className="text-lg font-bold mt-2">{item.price}</div>
    </div>
  );
};

export default MenuItem;
