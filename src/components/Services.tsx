
import { motion } from 'framer-motion'

import fadeIn from '../Variant'

// interface Service {
//   name: string,
//   description: string
// }
const services = [
  {
    name: "Backend developer",
    description: "Proficient in backend frameworks like django, nodejs and have built projects using this frameworks",
  },
  {
    name: "Frontend developer",
    description: "Proficient in frontend javascript frameworks like reactjs, typsecript and have built projects using this frameworks"
  },
  {
    name: "Mobile app developer",
    description: "I have built live project using flutter app for both andrioid devices and ios devices",
  },
  {
    name: "Blockchain developer",
    description: "I use solidity for my blockchain development, ethers and web3 js to integrate my backend code to my frontend. I have also deployed live solidity contracts on the EVM network.",
  },
  {
    name: "Technical writer",
    description: "I write technical documents for new technologies and products. I also document few of my software development journey through writing.",
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
            <h2 className='h2  mb-6 text-black'>What I Do</h2>

            <h3 className='h3 max-w-[455px] mb-8 text-black'>I am a freelance with over 3 years of working experience</h3>
            <p className='text-black font-semibold text-[15px]'>
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
                    <h4 className='text-[20px] my-2 tracking-wider font-primary font-semibold mb-6 text-black'>{name}</h4>
                  </div>
                  <p className='font-secondary leading-tight text-[15px] pb-4 text-black'>{description}</p>
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