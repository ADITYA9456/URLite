"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("");
                setshorturl("");
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);

                toast.success('Generated successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,  
                });
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">
                    Turn Your Long Links into Short, Smart URLs with <span className="text-fuchsia-500 font-bold">URLite!</span>
                </h1>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Enter your URL"
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        value={url}
                        onChange={e => seturl(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter your preferred short URL text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        value={shorturl}
                        onChange={e => setshorturl(e.target.value)}
                    />
                    <button 
                        onClick={generate}
                        className="w-full rounded-lg font-bold p-3 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-purple-400 text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Generate
                    </button>
                    <div className='flex gap-5 flex-col'>
                        {generated && (
                            <>
                                <span className='font-bold text-lg'>Your Link</span>
                                <code>
                                    <Link target="_blank" href={generated}>{generated}</Link>
                                </code>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shorten;
