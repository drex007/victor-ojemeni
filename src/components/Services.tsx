
import { motion } from 'framer-motion'

import fadeIn from '../Variant'

// interface Service {
//   name: string,
//   description: string
// }
const services = [
  {
    name: "Backend developer",
    description: "Proficient in backend frameworks like django, nodejs, fastapi, solidity, django rest framework and have built projects using these technologies",
  },
  {
    name: "Frontend developer",
    description: "Proficient in javascript and javascript frameworks like reactjs, next js, typsecript and have built projects using these technologies"
  },
  {
    name: "Mobile app developer",
    description: "I have built two projects using flutter/dart for both andrioid device and ios devices",
  },
  {
    name: "Blockchain developer",
    description: "I use solidity for my blockchain development, ethers and web3 js to integrate my backend code to my frontend.Deployed live solidity contracts on the EVM network and won block magic hackathon",
  },
  {
    name: "Technical writer",
    description: "I write technical documents for new technologies and products. I document few of my software development journey through writing.",
  }
]





const Services = () => {
  return (
    <div className='section' id='services'>
      <div className=' container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
          <motion.div

            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}

            className='flex-1 lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
            <h2 className='h2  mb-6 text-white'>What I Do</h2>

            <h3 className='h3 max-w-[455px] mb-8 text-white'>I am a freelancer with over 4 years of working experience</h3>
            <p className='text-white font-semibold text-[15px]'>
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s */}
            </p>
            <button className='btn btn-lg mt-4'>See my work</button>

          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}

          >
            {services.map((e, i) => {
              const { name, description } = e;
              return (
                <div key={i} className='max-w-[475px] border-b border-white/20'>
                  <div>
                    <h4 className='text-[20px] my-2 tracking-wider font-primary font-semibold mb-6 text-white'>{name}</h4>
                  </div>
                  <p className='font-secondary leading-tight text-[15px] pb-4 text-white'>{description}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services