import React from "react";
import '../pages/styles.scss';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
      <div className="navbar">
          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}>
            <motion.div>
              <Link className="hamburger" to="/mobile/"><motion.h1 className="cclogo-mobile" initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2.5}}>CamCo</motion.h1></Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/about/">ABOUT</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 2}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/companies/">COMPANIES</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/philanthropy/">PHILANTHROPY</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 4}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/riseabove/">RISE ABOVE</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 5}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/team/">OUR TEAM</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 5}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/press/">PRESS</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 6}}>
            <motion.div whileHover={{ scale: 1.2}} whileTap={{ scale: 0.9 }}>
              <Link className="nav-item" to="/contact/">CONTACT</Link>
            </motion.div>
          </motion.div>

        </div>
  )
}

export default Navbar
