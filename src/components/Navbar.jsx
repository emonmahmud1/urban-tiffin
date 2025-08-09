import React from 'react';
import { Link } from 'react-router';

const site = {
  name: "Urban Tiffin",
  subtitle: "Delicious meals. Fast service.",
};

const Navbar = () => {
 return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold">{site.name}</h1>
          <p className="text-sm text-slate-500">{site.subtitle}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/menu" className="hover:text-blue-600">Menu</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;