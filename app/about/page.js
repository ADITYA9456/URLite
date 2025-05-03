"use client"
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="main px-5 sm:px-10 md:px-20 py-20 sm:py-28 md:py-36 flex flex-col md:flex-row gap-10 md:gap-20">
      <div className="bg-pink-100 p-5 sm:p-8 flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 text-center my-5 flex justify-center items-center">
          About Us 
          <Image width={40} height={40} className="ml-2" src="/about2.gif" alt="" />
        </h1>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed mx-2 sm:mx-5 px-5 sm:px-10 text-center">
          <p>
            Welcome to our website! We are dedicated to providing you with the best experience possible.
            Our team works tirelessly to ensure that our services meet your expectations.
          </p>
          <p className="mt-4">
            This website helps you in shortening your URL. It is a simple and easy-to-use tool that allows you to create short links for your long URLs. You can use it to share links on social media, in emails, or anywhere else you need a short link.
          </p>
          <p className="mt-4">Thank you for visiting!</p>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-400 text-center text-white px-5 py-2 rounded-lg text-sm sm:text-base md:text-lg"
            onClick={() => alert('More information coming soon!')}
          >
            Learn More
          </button>
        </div>
      </div>
      <Image width={500} height={500}
        className="mix-blend-darken w-full md:w-auto max-w-xs sm:max-w-md md:max-w-lg mx-auto"
        src="/about.png"
        alt=""
      />
    </div>
  )
}

export default About
