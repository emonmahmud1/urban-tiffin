import React from "react";
import MenuItem from "../components/MenuItem";
const menu = [
  {
    id: 1,
    name: "Classic Burger",
    price: "220 BDT",
    desc: "Juicy beef burger with fresh veggies",
  },
  {
    id: 2,
    name: "Paneer Wrap",
    price: "180 BDT",
    desc: "Grilled paneer with spicy sauce",
  },
  // Add more items here
];
const Menu = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
        Our Menu
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Menu;
