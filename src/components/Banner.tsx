import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
// Type animation
import { TypeAnimation } from 'react-type-animation'

//motion

import { motion } from 'framer-motion'

import fadeIn from '../Variant'
import image from '../assets/myimage.png'

const Banner = () => {
    return (
        <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 text-center lg:text-left justify-start'>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}

                            className='mb-6 text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='mr-4 text-black'>I am a</span>
                            < TypeAnimation sequence={['Fullstack Developer', 2000, 'Blockchain Engineer', 2000]} speed={50}
                                className='text-black' wrapper='span' repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p

                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-black'
                        >
                            As a highly experienced full-stack developer with over three years of expertise, I bring a comprehensive skill set that spans both front-end and back-end development.
                            I specialize in crafting dynamic and engaging user interfaces using cutting-edge frameworks and technologies, ensuring an exceptional user experience.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}

                            className='my-2 space-x-4'>
                            <a href="https://drive.google.com/file/d/1MUGdv1j-XbVIuW7QQ7gnh7gXrDR7LVcd/view?usp=drivesdk"><button className='btn btn-lg'>Link to resume </button></a>
                            <a href="" className='text-gradient btn-link'>My Portfolio</a>
                        </motion.div>
                        {/* socials */}
                        <div className='flex justify-start lg:mr-[500px]'>
                            <motion.div
                                variants={fadeIn('up', 0.8)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-w-[450px] mt-4 bg-black w-[200px] rounded-md justify-center py-4 px-4'>
                                <a href="https://github.com/drex007"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/victor-ojemeni-911bb61b4"><FaLinkedinIn /></a>
                                <a href="https://twitter.com/viktor_0x"><FaTwitter /></a>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                        <img src={image} alt="" className='w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] rounded-full ' />
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Banner