"use client"

import { motion, useInView, useScroll } from "framer-motion"
import Brain from "../components/brain"
import Image from "next/image"
import { useRef } from "react"

const AboutPage = () => {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div
        className="h-full overflow-scroll lg:flex"
        ref={containerRef}
      >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biograhy Container */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center">
              {/* Biography Image Container */}
              <div className="relative w-full h-60 md:h-80 lg:h-96">
                <Image
                  src="/biography image.jpg" 
                  alt=""
                  className="object-cover w-full h-full rounded-lg" 
                  fill
                />
              </div>
              {/* Biography Title */}
              <h1 className="font-bold text-2xl">Biography</h1>
              {/* Biography Desc */}
              <p className="text-lg">
                Hi! My name is Aldrich Reinhart Wahyudi. I am a software development enthusiast currently majoring in Computer Science 
                at BINUS University. I can classify myself as an able individual both in hard-skill and soft-skill sectors. 
                With my 'constant self-optimizing' mindset and experiences working in tandem with other people, the best possible results can be
                guaranteed. I am familiar with front-end, back-end, and AI languages such as HTML, CSS, JS, MySQL, SQL Server, and Python.
                Moreover, I have experiences working in both front-end and AI sections using frameworks such as Next.js and TensorFlow. As 
                an inquisitive person, I am always eager to learn more! Do contact me for further acquintances!
              </p>
              {/* Biography Quote */}
              <span className="italic">"The Best is Yet to Come"</span>
              {/* Biography Sign */}
              <div className="self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="185"
                  height="77"
                  fill="none"
                  viewBox="0 0 845 650"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M50.079 121.153C34.942 191.79 19.074 257.762 12.044 330.982c-2.407 25.079-33.776 176.659 29.488 118.376 74.69-68.809 155.545-186.186 151.709-293.589-2.629-73.604-104.62-48.76-137.18-14.53-60.551 63.657 38.227 99.424 92.308 88.461 33.324-6.755 61.28-34.315 93.163-40.171 14.909-2.738 16.831 73.885 17.948 80.342 12.15 70.197 40.359 102.867 95.727 42.308 35.314-38.625 17.888 57.344 65.812 32.051 77.009-40.643 120.224-190.069 141.88-266.667 4.13-14.606 12.94-118.209-15.384-56.41-12.067 26.327 3.088 22.032 22.222 17.094 8.951-2.31-15.661 9.865-23.077 15.385-68.493 50.983-122.172 118.021-173.504 185.47-66.136 86.899-140.407 159.6-214.103 239.744-37.521 40.803-72.768 84.15-106.41 128.205-3.484 4.562-43.249 49.316-11.539 39.743 69.457-20.968 138.929-54.609 205.556-82.051 154.872-63.788 310.225-127.922 456.41-210.256 49.056-27.629 91.33-62.683 138.462-92.308 5.041-3.169-5.987 18.81-6.838 20.513"
                  ></path>
                </svg>
              </div>
              {/* Biography Scroll SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skills Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* Skills List */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ASP.NET
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL Server
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* Skill Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* Experience Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* Experience List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    HIMTI Activist - Web Development
                  </div>
                  {/* Job Desc */}
                  <div className="text-small p-3 italic">
                    Tasked to maintain and improve existing HIMTI websites
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-sm text-red-600 font-semibold">
                    2023 - Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS University
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freshmen Leader & Freshmen Partner
                  </div>
                  {/* Job Desc */}
                  <div className="text-small p-3 italic">
                    Tasked to guide B27 freshmen throughout their first year at BINUS University
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-sm text-red-600 font-semibold">
                    2023 - 2024
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    BINUS University
                  </div>
                </div>
              </div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Scholarship Mentor Odd Semester 2023/2024
                  </div>
                  {/* Job Desc */}
                  <div className="text-small p-3 italic">
                    Tasked to mentor 3 selected mentees in various subjects
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-sm text-red-600 font-semibold">
                    2023 - 2024
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    BINUS University
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
