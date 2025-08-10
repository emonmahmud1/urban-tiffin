import React from "react";
const site = {
  name: "Urban Tiffin",
  subtitle: "Delicious meals. Fast service.",
  heroImage:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
};
const Home = () => {
  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-6 text-center">
      <h2 className="text-3xl font-extrabold">{`Welcome to ${site.name}`}</h2>
      <p className="mt-2 text-gray-600 max-w-xl mx-auto">{site.subtitle}</p>
      <img
        src={site.heroImage}
        alt="hero"
        className="w-full h-48 sm:h-96 object-cover mt-6 rounded-lg"
      />
    </div>
  );
};

export default Home;
