"use client";
import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Input change handle karne ka function
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form Submit function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const response = await fetch("/api/support", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            toast.success("We will reach you soon!", { position: "top-center", autoClose: 3000, transition: Bounce });
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } else {
            toast.error("Error submitting form!", { position: "top-center", autoClose: 3000, transition: Bounce });
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} transition={Bounce} />

            <div className="font-sans p-9 min-h-[82vh] max-w-lg mx-auto">
                <h1 className="text-center text-2xl font-bold text-gray-800">Support Page</h1>
                <p className="text-center text-gray-600 mt-2">Need help? Fill out the form below and our team will get back to you shortly.</p>

                <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                    <label>
                        <span className="block mb-1 font-semibold">Name:</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </label>

                    <label>
                        <span className="block mb-1 font-semibold">Email:</span>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </label>

                    <label>
                        <span className="block mb-1 font-semibold">Message:</span>
                        <textarea name="message" value={formData.message} onChange={handleChange}
                            placeholder="Enter your message" rows="5"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </label>

                    <button onClick={handleSubmit} type="submit" className="rounded-lg font-bold p-3 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-400 text-sm px-5 py-2.5 text-center">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Support;
