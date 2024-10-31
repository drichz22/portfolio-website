"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = "Connect with me"

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      )
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl pr-20">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* Form Container */}
        <form onSubmit={sendEmail} ref={form} className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-lg lg:text-xl flex flex-col gap-4 lg:gap-8 justify-center p-8 lg:p-24">
          <span className="text-base lg:text-lg">Dear, Aldrich Reinhart Wahyudi</span>
          <textarea
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-base lg:text-lg min-h-[4rem] sm:min-h-[6rem] lg:min-h-[10rem]"
            name="user_message"
          ></textarea>
          <span className="text-base lg:text-lg">My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-base lg:text-lg"
            name="user_email"
          />
          <span className="text-base lg:text-lg">Regards</span>
          <button className="bg-orange-200 rounded font-semibold text-black text-base lg:text-lg p-2 lg:p-4 transform transition duration-300 hover:scale-105 hover:bg-black hover:text-white">
            Send
          </button>
          {success && <span className="text-green-600 font-semibold text-sm lg:text-base">Your message has been sent successfully!</span>} 
          {error && <span className="text-red-600 font-semibold text-sm lg:text-base">Something went wrong!</span>} 
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage
