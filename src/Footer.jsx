import { TiSocialGithub } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  const today = new Date();
    return (
        <footer className='Footer'>
                <h6>Copyright  &copy;all rights reserved . {today.getFullYear()}
                
                </h6>
                <div className='social'>
                    <a href="https://www.facebook.com/tinsaye tesfaye" target="_blank"><TiSocialFacebook/></a>
                    <a href="https://www.Github.com/tinsutesfu" target="_blank"><TiSocialGithub/></a>
                </div>
        </footer>
    )
}

export default Footer
