"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const PortfolioPage = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "JeTFlix Website",
      desc: "A movie recommendation website made as a Human & Computer Interaction Lab final project using HTML, CSS, and JS. Utilizes Swiper JS functionality.",
      img: "/JeTFlix Img 1.png",
      link: "https://jetflix-website.vercel.app/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Portfolio Website",
      desc: "Made as a BNCC Front-End Course final project using HTML, CSS, JS, and simple Firebase implementation for the form section.",
      img: "/BNCC Project Img 1.png",
      link: "https://final-project-bncc.vercel.app/",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Food Sharing App",
      desc: "A full-stack food sharing mock-up website made as a Pattern Software Design final project using ASP.NET with cookie implementation",
      img: "/Food Sharing App img 1.png",
      link: "https://youtu.be/ZotxyXkn78Q",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Smoking & Vaping Detector",
      desc: "A mobile app using AI and IoT to detect smokers & vapers in certain areas made as the Samsung Innovation Campus Batch 5 final project. As a part of group 31, I managed to reach the semifinal of the university section.",
      img: "/SIC Img 1.png",
      link: "https://drive.google.com/file/d/1uHAAeB1FG6jj0PlXMo-vM4fuyqlI8YoJ/view",
    },
    {
      id: 5,
      color: "from-red-300 to-orange-300",
      title: "MakeMeUpzz",
      desc: "Collaborative full-stack makeup management website using ASP.NET with Cookie and Crystal Report implementation",
      img: "/MakeMeUpzz img 1.png",
      link: "https://github.com/drichz22/MakeMeUpzz",
    },
    {
      id: 6,
      color: "from-orange-300 to-yellow-300",
      title: "HealthyHabits",
      desc: "UI/UX of a health & well-being mobile app for GEMASTIK 2023 Software Development submission.",
      img: "/Healthy Habits img 1.png",
      link: "https://drive.google.com/file/d/10nMDscdsvIRrjhH-ov3jPc50Cza1oXu2/view?usp=sharing",
    },
  ]

  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-14 items-center justify-center text-8xl text-center font-semibold">
          My Projects
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
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-black">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-40 md:w-96 md:h-48 lg:w-[400px] lg:h-[200px] xl:w-[500px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[400px] lg:text-lg xl:w-[500px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-4 lg:text-lg bg-black text-white font-semibold m-4 rounded">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl pt-20 font-semibold">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:h-28 md:w-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
