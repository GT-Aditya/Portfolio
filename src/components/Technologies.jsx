import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration)=>({
    initial:{y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = ()=>{
    return <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-50}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl text-neutral-400">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <RiReactjsLine className="text-7xl text-cyan-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <SiRedux className="text-7xl text-violet-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <DiJavascript className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <DiJava className="text-7xl text-red-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <SiSpringboot className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4">
                <TbSql className="text-7xl text-indigo-500"/>
            </motion.div>
        </motion.div>
    </div>
}

export default Technologies;