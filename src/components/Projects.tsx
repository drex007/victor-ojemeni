import { ayfImage, cowriterImage, decillon, detectAIImage, fairlauncher, trof } from "../assets"
import {motion } from 'framer-motion'
import fadeIn from "../Variant"

const Projects = () => {
    return (
        <div className='mx-auto' id='work'>
            <h1 className='flex justify-center my-10 text-[20px] lg:text-[30px] uppercase tracking-[10px] lg:tracking-[30px] text-white'>Projects</h1>
            <motion.div 
            
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='grid gap-y-2 lg:flex lg:space-x-2 justify-center'>
                <div className="">
                    <p className="italic text-sm">Cowriter</p>
                    <img src={cowriterImage} alt="" className=" lg:max-w-sm max-w-sm rounded-md" />

                </div>
                <div className="">
                <p className="italic text-sm">DetectAI</p>
                    <img src={detectAIImage} alt="" className=" lg:max-w-sm max-w-sm rounded-md" />

                </div>

                <div className="">
                <p className="italic text-sm">Askyourpdf</p>
                    <img src={ayfImage} alt="" className=" lg:max-w-sm max-w-sm rounded-md" />

                </div>

            </motion.div>
            
            <motion.div 
                   variants={fadeIn('up', 0.1)}
                   initial="hidden"
                   whileInView={'show'}
                   viewport={{ once: false, amount: 0.4 }}

            className='grid gap-y-2 lg:flex lg:space-x-2 justify-center my-2'>
                <div className="">
                <p className="italic text-sm">Decillon</p>
                    <img src={decillon} alt="" className=" lg:max-w-sm max-w-sm rounded-md" />

                </div>
                <div className="">
                <p className="italic text-sm">Fairlauncher</p>
                    <img src={fairlauncher} alt="" className=" lg:max-w-sm max-w-sm rounded-md hover:cursor-pointer"  />

                </div>

                <div className="">
                <p className="italic text-sm">Trofira</p>
                    <img src={trof} alt="" className=" lg:max-w-sm max-w-sm rounded-md" />

                </div>

            </motion.div>
        </div>
    )
}

export default Projects