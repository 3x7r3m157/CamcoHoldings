import React from 'react';
import { Link } from 'gatsby';
import Particles from './particles.js'
import '../pages/styles.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="term-privacy">
        <Particles />
        <Link className="nav-item" to="/terms/">Terms</Link>
        <span className="dot">&#183;</span>
        <Link className="nav-item" to="/privacy/">Privacy</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
