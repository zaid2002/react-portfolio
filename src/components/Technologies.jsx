import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { animate, motion } from 'framer-motion'
// import { SiPhp, SiMysql, SiHtml5, SiCss3, } from 'react-icons/si';
// import { FaJava } from "react-icons/fa6";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: { 
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{ duration: 1}}
            className='text-center text-4xl my-20'>Technologies</motion.h2>

            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{ duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-4">

                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="https://img.icons8.com/color/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="https://img.icons8.com/color/html-5--v1.png" alt="html-5--v1" />
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="https://img.icons8.com/color/css3.png" alt="css3" />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-6xl text-cyan-400' />
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="https://img.icons8.com/offices/php-logo.png" alt="php-logo" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="https://img.icons8.com/color/mysql-logo.png" alt="mysql-logo" />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies
