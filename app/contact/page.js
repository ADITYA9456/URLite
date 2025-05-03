"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Thanks for contacting us!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-52 justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
                <div className="text-center mt-12 bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-gray-800 text-3xl flex items-center justify-center gap-4 font-extrabold mb-4">
                        Contact Us <Image width={50} height={50} src="/contact.gif" alt="" />
                    </h1>
                    <p className="text-gray-600 text-base mb-6">
                        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <div className="flex flex-col text-lg gap-5">
                        <input
                            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <textarea
                            className="border-2 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200 resize-none"
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        />
                    </div>
                    <button
                        className="mt-6 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-400 text-center text-white px-5 py-2 rounded-lg text-lg"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
                <Image width={300} height={300} 
                    className="hidden md:block w-64 h-64 lg:w-96 lg:h-96 object-contain"
                    src="/contact.png"
                    alt=""
                />
            </div>
        </>
    );
};

export default Contact;
