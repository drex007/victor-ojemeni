import { ayfImage, cowriterImage, decillon, detectAIImage, fairlauncher, trof } from "../assets"
import {motion } from 'framer-motion'
import fadeIn from "../Variant"

const Projects = () => {
    return (
        <div className='mx-auto px-8 lg:px-0' id='work'>
            <h1 className='flex justify-center my-10 text-[20px] lg:text-[30px] uppercase tracking-[10px] lg:tracking-[30px] text-white'>Projects</h1>
            <motion.div 
            
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='grid gap-y-2 lg:flex lg:space-x-2 justify-center'>
                <div className="">
                    <p className="italic text-sm">Cowriter</p>
                    <img src={cowriterImage} alt="" className=" lg:max-w-sm max-w-[300px] rounded-md  hover:cursor-pointer" 
                    onClick={()=> {
                        window.open("https://cowriter.ai")
                    }}
                    />

                </div>
                <div className="">
                <p className="italic text-sm">DetectAI</p>
                    <img src={detectAIImage} alt="" className=" lg:max-w-sm max-w-[300px] rounded-md  hover:cursor-pointer" onClick={()=> {
                        window.open("https://detect.ai")
                    }}/>

                </div>

                <div className="">
                <p className="italic text-sm">Askyourpdf</p>
                    <img src={ayfImage} alt="" className=" lg:max-w-sm max-w-[300px] rounded-md  hover:cursor-pointer" onClick={()=> {
                        window.open("https://askyourpdf.com")
                    }} />

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
                    <img src={decillon} alt="" className=" lg:max-w-sm max-w-[300px] rounded-md  hover:cursor-pointer"  onClick={()=> {
                        window.open("https://decillon.xyz")
                    }}/>

                </div>
                <div className="">
                <p className="italic text-sm">Fairlauncher</p>
                    <img src={fairlauncher} alt="" className=" lg:max-w-sm max-w-[300px] rounded-md hover:cursor-pointer" 
                    onClick={()=> {
                        window.open("https://fairlauncher-ui.vercel.app")
                    }}
                    />

                </div>

                <div className="">
                <p className="italic text-sm">Trofira</p>
                    <img src={trof} alt="" className=" lg:max-w-sm max-w-[200px] rounded-md  hover:cursor-pointer" onClick={()=> {
                        window.open("https://trofira.africa")
                    }} />

                </div>

            </motion.div>

            <h1 className='lg:flex justify-center my-10 text-[20px] lg:text-[30px] uppercase tracking-[10px] lg:tracking-[30px] text-white px-2 lg:px-0'> Technologies </h1>
            <div className="lg:flex lg:justify-center px-2 lg:px-0">
                <p className="lg:ml-2 text-sm my-1">💥Python</p>
                <p className="lg:ml-2 text-sm my-1">💥Javascript</p>
                <p className="lg:ml-2 text-sm my-1">💥Solidity</p>
                <p className="lg:ml-2 text-sm my-1">💥FastAPI</p>
                <p className="lg:ml-2 text-sm my-1">💥Django/Django RestFramework</p>
                <p className="lg:ml-2 text-sm my-1">💥SQL</p>
                <p className="lg:ml-2 text-sm my-1">💥Node Js</p>
                <p className="lg:ml-2 text-sm my-1">💥React Js</p>
                <p className="lg:ml-2 text-sm my-1">💥Nest Js</p>
                <p className="lg:ml-2 text-sm my-1">💥Web3/Ether Js</p>
            </div>
            <div className="lg:flex lg:justify-center px-2 lg:px-0">
   
                <p className="lg:ml-2 text-sm my-1">💥Typescript</p>
                <p className="lg:ml-2 text-sm my-1">💥MongoDB</p>
                <p className="lg:ml-2 text-sm my-1">💥Postgres</p>
                <p className="lg:ml-2 text-sm my-1">💥Flutter</p>
                <p className="lg:ml-2 text-sm my-1">💥Redis</p>
                <p className="lg:ml-2 text-sm my-1">💥Socket io</p>
                <p className="lg:ml-2 text-sm my-1">💥Celery</p>
                <p className="lg:ml-2 text-sm my-1">💥Docker/Docker Compose</p>
            </div>
        </div>
    )
}

export default Projects