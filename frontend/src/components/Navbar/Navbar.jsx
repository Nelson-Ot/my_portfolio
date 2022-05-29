import React, { useState } from 'react'

import './Navbar.scss';

import { HiMenuAlt4, Hix } from 'react-icons/hi';

import { motion } from 'framer-motion';

import { images } from '../../constants';


const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'work', 'skills', 'Contact'].map((item, index) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
              <a href={`#$item`}>{item}</a>
            
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
            <HiMenuAlt4 className="app__navbar-menu-icon" onClick={() => setToggle(true)} />

            {
              toggle && (
                <motion.div
                 whileInView={{ x: [300, 0] }}
                 transition={{ duration: 0.85, ease: "easeOut" }}
                >
                  <HiX onClick={() => setToggle(false)}  />
                  {['Home', 'About', 'work', 'skills', 'Contact'].map((item, index) => (
                  <li key={item}>
                    
                      <a href={`#$item`} onClick={() => setToggle(false)}>{item}</a>
            
          </li>
))}
                </motion.div>
              )
            }
      </div>
    </nav>
  )
}

export default Navbar