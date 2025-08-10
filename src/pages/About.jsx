import React from 'react';

const site = { name: "Urban Tiffin" };

const About = () => {
    return (
        <div>
            <h2 className="text-3xl font-extrabold">{`About ${site.name}`}</h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                Welcome to {site.name}, your go-to destination for delicious and healthy meals delivered right to your doorstep.
            </p>
        </div>
    );
};

export default About;
