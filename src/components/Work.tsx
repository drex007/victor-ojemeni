import React from 'react'

import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import fadeIn from '../Variant'


import trofira from '../assets/trofira.png'
import flutter from '../assets/flutter.png'
import nodejs from '../assets/node.png'
import swapandpay from '../assets/swapandpay.png'
import django from '../assets/django.png'
import python from '../assets/python.png'
import postgres from '../assets/postgres.png'
import reactlogo from '../assets/react.png'
import aoura from '../assets/aoura.png'
import zuumatek from '../assets/zuumatek.png'
import javascript from '../assets/javascript.png'
import hardhat from '../assets/hardhat.png'
import solidity from '../assets/solidity.png'
import starletter from '../assets/starletter.png'
const Work = () => {
  return (
    <div className='mx-auto' id='work'>
      <h1 className='flex justify-center my-10 text-[20px] lg:text-[30px] uppercase tracking-[10px] lg:tracking-[30px] text-black'>Experience</h1>
      <div

        // Hover zoom in and out className:
        //- parent div takes className of : group
        // children div takes className: group-hover:scale-125 transition-all duration-500
        className=' 
        flex flex-col lg:flex-row mx-auto overflow-auto no-scrollbar py-24'>




        <div className='px-4 flex flex-col gap-y-4 lg:flex-row gap-x-10 mx-auto lg:min-w-[500px]'>
          <div className='rounded-sm shadow-2xl py-16 px-16 flex flex-col justify-center  items-center'>
            <div >
              <img src={swapandpay} alt="" className='h-[100px] w-[100px] rounded-full' />
            </div>
            <div  >
              <h4 className='text-black'>SwapPay</h4>
            </div>
            <div className='text-black font-semibold'>
              Fullstack | Mobile app developer
            </div>
            <div className='flex gap-x-2 my-2'>
              <img src={flutter} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={django} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={reactlogo} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={python} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={postgres} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={javascript} alt="" className='rounded-full w-[30px] h-30px' />
            </div>
            <div className='text-black font-semibold'>
              JAN 2023 - AUGUST 2023
            </div>
            <div className='max-w-[300px] text-[15px] leading-5 mt-2 text-black'>
              <p>I structured the backend/ database model Architecture. I estbalished the project structure for fellow the engineers to follow, ensuring adherence to scalable standards.</p>
              <br />
              <p>I structured the mobile app project architecture using the MVC structure pattern.<br /> </p>
              I organized daily standups for the team.
              <br />
              I wrote the endpoints, built web and mobile app pages and consumed the APIs alongside my teammates.
              <br />
              I integrated third party APIs.
            </div>
          </div>

        </div>
        <div className='px-4 flex flex-col gap-y-4 lg:flex-row gap-x-10 mx-auto lg:min-w-[500px]'>
          <div className='rounded-sm shadow-2xl py-16 px-16 flex flex-col justify-center  items-center'>
            <div >
              <img src={zuumatek} alt="" className='h-[100px] w-[100px] rounded-full' />
            </div>
            <div >
              <h4 className='text-black'>Zuumatek</h4>
            </div>
            <div className='text-black font-semibold'>
              FullStack | Mobile app Developer
            </div>
            <div className='flex gap-x-2 my-2'>

              <img src={flutter} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={nodejs} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={reactlogo} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={python} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={postgres} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={javascript} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={django} alt="" className='rounded-full w-[30px] h-30px' />

            </div>
            <div className='text-black font-semibold my-3'>
              FEB 02 2022 - DEC 23 2022
            </div>
            <div className='max-w-[300px] text-[15px] leading-5 text-black'>
              <p>Built complex mobile and web app projects.</p>
              <p>  I wrote the backend logic with my teammate from start to finish (Worked extensively with celery and redis)</p>
              <p>Integrated third party APIs.</p>
              <p> Built web and mobile app screens for the projects alongside my teammate.</p>
              <p> Integrated the endpoints into the web and mobile app.</p>
              <p>Wrote documentation for the projects built.</p>
              Ensure we held weekly standups with the CTO.


            </div>
          </div>

        </div>
        <div className='px-4 flex flex-col gap-y-4 lg:flex-row gap-x-10 mx-auto lg:min-w-[500px]'>
          <div className='rounded-sm shadow-2xl py-16 px-16 flex flex-col justify-center  items-center'>
            <div >
              <img src={starletter} alt="" className='h-[100px] w-[100px] rounded-full' />
            </div>
            <div >
              <h4 className='text-black'>Starletter</h4>
            </div>
            <div className='text-black font-semibold'>
              Mobile app Developer
            </div>
            <div className='flex gap-x-2 my-2'>

              <img src={flutter} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={python} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={postgres} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={django} alt="" className='rounded-full w-[30px] h-30px' />

            </div>
            <div className='text-black font-semibold my-3'>
              MAR 02 2022 - JULY 15 2022
            </div>
            <div className='max-w-[300px] text-[15px] leading-5 text-black'>
              <p>Built the mobile app pages using flutter alonside my teammate. </p>
              <p>Wrote the backend logic using firebase firestore alongside my teammate.</p>
              <p>Wrote the payment verification endpoints.</p>
              <p> Integrated the endpoints into the mobile app.</p>
              <p>Integrated third party payment API.</p>
              Ensure we held weekly standups with the CTO.


            </div>
          </div>

        </div>

        <div className='px-4 flex flex-col gap-y-4 lg:flex-row gap-x-10 mx-auto lg:min-w-[500px]'>
          <div className='rounded-sm shadow-2xl py-16 px-16 flex flex-col justify-center  items-center'>
            <div >
              <img src={aoura} alt="" className='h-[100px] w-[100px] rounded-full' />
            </div>
            <div >
              <h4 className='text-black'>Auora</h4>
            </div>
            <div className='text-black font-semibold'>
              Smart Contract Engineer Intern
            </div>
            <div className='flex gap-x-2 my-2'>
              <img src={nodejs} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={javascript} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={hardhat} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={solidity} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={reactlogo} alt="" className='rounded-full w-[30px] h-30px' />
            </div>
            <div className='text-black font-semibold ,y-3'>
              JAN 2020 - MAR 19 2021
            </div>
            <div className='max-w-[300px] text-[15px] leading-5 text-black'>
              Worked alongside with the lead developer in building smart contracts backend using solidity.
              <p>Assited the lead developer in writing test for the smart contract.</p>
              <p>Integrated third party APIs on the client side</p>
              <p>Interacted with the smart contract on the client side using ethers js and web js packages</p>
              <p>Held weekly standups with the CTOs</p>

            </div>
          </div>

        </div>
        <div className='px-4 flex flex-col gap-y-4 lg:flex-row gap-x-10 mx-auto lg:min-w-[500px] '>
          <div className='rounded-sm shadow-2xl py-16 px-16 flex flex-col justify-center  items-center'>
            <div >
              <img src={trofira} alt="" className='h-[100px] w-[100px] rounded-full' />
            </div>
            <div >
              <h4 className='text-black'>Trofira</h4>
            </div>
            <div className='text-black font-semibold'>
              Mobile app developer
            </div>
            <div className='flex gap-x-2'>
              <img src={flutter} alt="" className='rounded-full w-[30px] h-30px' />
              <img src={nodejs} alt="" className='rounded-full w-[30px] h-30px' />
            </div>
            <div className='text-black font-semibold'>
              JAN 2019 - MAR 19 2020
            </div>
            <div className='max-w-[300px] text-[15px] leading-5 text-black'>
              <p>Built the screens for the mobile app project</p>
              <p>Integrated the endpoints into the mobile app</p>
              <p>Held weekly standups with the CEO and CTO</p>
              <p></p>
            </div>
          </div>

        </div>







      </div>
    </div>
  )
}

export default Work