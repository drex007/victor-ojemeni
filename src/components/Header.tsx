import React from 'react'

import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import fadeIn from '../Variant'
import {Link} from 'react-scroll'


const Header = () => {
    return (
        <header className='py-8  z-50 shadow-lg'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1
                        // variants={fadeIn('right', 0.3)}
                        // initial="hidden"
                        // whileInView={'show'}
                        // viewport={{ once: false, amount: 0.7 }}

                        className='text-black font-bold leading-[2] text-[16px] lg:text-[30px]'>VICTOR <span>OJEMENI</span></h1>
                   <Link smooth={true} spy={true} to="contact" > <button className='btn btn-sm'>Work with me</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header