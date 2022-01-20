import React from "react"
import { motion } from "framer-motion"
import "./hero.css"
import heroImg from "../../../img/img123.jpg"

export const Hero = () => {
  return (
    <div className="containerHero">
      <motion.img initial={{ scale: 1 }} animate={{ scale: 1.5, x: 300 }} transition={{ delay: 0.8, duration: 80, yoyo: Infinity }} className="hero-img" src={heroImg} />
      <div className="contentWraper">
        <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1, duration: 3 }} className="hero-title">
          WAKIL AGENCY FOR SELLING HOUSES
        </motion.h1>
        <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1.5, duration: 3 }}>
          Lorem ipsum dolor, sit amet consectetur adhhhhhhh blablo. Autem quisquam dolorem iste est doloribus, sint ducimus quia iure excepturi, pariatur et blanditiis in dicta quaerat illo similique eum eveniet mollitia!
        </motion.p>

        <motion.div className="btnContactwrap" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 3, duration: 5, type: "spring", stiffness: 100 }}>
          <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" }} className="btn-contact">
            CONTACT US
          </motion.button>
        </motion.div>
      </div>
      <motion.span animate={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ delay: 3, duration: 3 }} className="arow-wrap">
        <motion.i animate={{ y: 10 }} transition={{ delay: 3, duration: 3, type: "spring", stiffness: 500, yoyo: Infinity }} className="fas arowIcon fa-chevron-down"></motion.i>
      </motion.span>
    </div>
  )
}
