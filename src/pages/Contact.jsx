import React from 'react';

const site = {
  address: "Dhanmondi, Dhaka, Bangladesh",
  phone: "01737103169",
  email: "emonmahmud083@gmail.com"
};

const Contact = () => {
    return (
        <div>
            <h2 className="text-3xl font-extrabold">Contact Us</h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                Get in touch with us for any inquiries or feedback.
            </p>
            <div className="mt-6">
                <h3 className="font-semibold">Address</h3>
                <p>{site.address}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">Phone</h3>
                <p>{site.phone}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">Email</h3>
                <p>{site.email}</p>
            </div>
        </div>
    );
};

export default Contact;