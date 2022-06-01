import React, {useState, useEffect} from 'react';

import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';


const abouts = [

    {title: 'Web Development', description: 'I am a web developer', imgUrl: images.about01 },
    {title: 'Frontend Development', description: 'html, css javascript', imgUrl: images.about02 },
    {title: 'UX/UI', description: 'figma, adobe xd', imgUrl: images.about03 },
    {title: 'Backend development', description: 'Javascript, php', imgUrl: images.about04 },
];

const About = () => {
    return (
        <>
        <h2 className="head-text">I know that <span>Good Dev</span> <br /> means <span> Good Business</span> </h2>
        <div className="app__profiles">
            {/* <h2>Test Write</h2> */}
            {abouts.map((about, index) => (
                <motion.div
                whileInView={{opaicty: 1}}
                whileHover={{scale: 1.1}}
                transition={{duration: 1, type: 'tween'}}
                className="app__profile-item"
                key={about.title + index}

                >
                    <img src={about.imgUrl} alt="profile" />
                    <h2 className="bold-text" style={{marginTop: 20}} >{about.title}</h2>
                    <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
                </motion.div>
            ))}
        </div>
        </>
    );
    };

    export default About;