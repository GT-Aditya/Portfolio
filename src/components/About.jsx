import aboutMe from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants/index.js'
import { motion } from 'framer-motion'
const About = () => {
    return <div className="border-b border-neutral-800 pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-50}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-neutral-400">About Me</motion.h2>
        <div className="flex flex-wrap mb-2 0">
            <motion.div whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutMe} alt="about Me" className="rounded-full" />
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <span className='mx-2 max-w-xl py-12 text-neutral-400 text-2xl'><b>Crafting Code, Building Dreams.</b></span>
                <div className="flex justify-center lg:justify-start">
                    <p className='mx-2 max-w-xl py-12 text-neutral-400'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>

}
export default About