import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState, React } from "react";

const Contact = ({handleToggle})=>{

    return <div className="border-b border-neutral-800 pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-50}}
        transition={{duration:1}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-50}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:50}}
            transition={{duration:1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <button onClick={handleToggle} className="my-4 border-b">{CONTACT.email}</button>
        </div>
    </div>
}
export default Contact;