"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Homepage = () => {

  const buttonStyles = "p-4 rounded-lg ring-1 ring-black transform transition duration-300 hover:scale-105"

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-6 sm:px-8 md:px-12 lg:px-20 xl:px-35 gap-y-20 lg:gap-y-0">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold">
            Offering the Least Difficult Answer for Perplexing Issues
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and technology
            collide. With constant honing of designing and coding skills, my
            commitment to excellence is showcased by my portfolio consisting a
            diverse collection of projects.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4 pb-4">
            <Link href="/portfolio">
              <button className={`${buttonStyles} bg-black text-white hover:bg-white hover:text-black`}>
                View My Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className={`${buttonStyles} hover:bg-black hover:text-white`}>
                Contact Me
              </button>
            </Link>
            <a href="/CV_Portfolio.pdf" download>
              <button className={`${buttonStyles} bg-orange-200 text-black hover:bg-orange-700`}>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
