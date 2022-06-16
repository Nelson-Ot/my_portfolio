import React from 'react';

import {  BsTwitter, BsInstagram } from 'react-icons/bs';

import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://twitter.com/sito_arez" target="_blank" rel="noreferrer">

        <div>
            <BsTwitter />
        </div>
        </a>
        <a href="https://www.instagram.com/sito_arez/" target="_blank" rel="noreferrer">
        <div>
            <BsInstagram />
        </div>
        </a>
        <a href="https://www.facebook.com/nelson.otieno.54/" target="_blank" rel="noreferrer">
        <div>
            <FaFacebookF />
        </div>
        </a>
      

    </div>
  )
}

export default SocialMedia;