import React from 'react';
import '../pages/styles.scss';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const AnimatedBackground = () => {
  return (
      <motion.div className="animated-background" initial={{opacity: 0, y: 400}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
        <h1> I am the destroyer of worlds </h1>
      </motion.div>
  )
}

export default AnimatedBackground
