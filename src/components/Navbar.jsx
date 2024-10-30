import logo from '../assets/adityaLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = ()=>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-3xl'>
            <a href='https://www.linkedin.com/in/adityasharma-sde' target='_blank'><FaLinkedin className='hover:text-cyan-200'/></a>
            <a href='https://www.github.com/GT-Aditya' target='_blank'><FaGithub className='hover:text-cyan-200'/></a>
            {//<FaSquareXTwitter className='hover:text-cyan-200'/>
            //<FaInstagram className='hover:text-cyan-200'/>
}
        </div>
    </nav>;
}
export default Navbar;