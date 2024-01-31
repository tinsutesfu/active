import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";


const Contactus = () => {
  return (
    <main className='About'>
    <h2>contactus</h2>
    <p style={{ marginTop: "1rem" }}>This blog app is a project in the Learn React tutorial series.</p>
    <div className='social'>
      <a href="https://www.facebook.com/tinsaye tesfaye" target="_blank"><TiSocialFacebook/></a>
      <a href="https://www.Github.com/tinsutesfu" target="_blank"><TiSocialGithub/></a>
      </div>
</main>
    
  )
}

export default Contactus
