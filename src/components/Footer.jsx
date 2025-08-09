import React from "react";

const siteName = "Urban Tiffin";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} {siteName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
