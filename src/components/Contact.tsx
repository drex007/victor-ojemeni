
import { motion } from 'framer-motion'

import fadeIn from '../Variant'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'


const Contact = () => {
 

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_m4c5l5t', 'template_aag5jl5', e.target, 'FBmRP4HWvxyw2ieFu') // email temp id and  pub key
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className='py-16 lg:section mt-4' id='contact'>
      <motion.div

        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}

        className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <div>
              <h4 className='text-2xl uppercase my-2 text-white'>Get in touch</h4>
              <h2 className='text-[35px] lg:text-[40px] leading-none mb-12 text-white'>Let's work together</h2>
              <div className='text-white text-sm'>
                <div className='flex space-x-2 items-center'>
                  <BsTelephoneFill />
                  <p>+2348140118340</p>
                </div>

                <div className='flex space-x-2 items-center my-2 text-sm'>
                  <MdEmail />
                  <p>victorojemeni@gmail.com || vykeoj@gmail.com</p>
                </div>

              </div>
            </div>
          </div>
          <form onSubmit={sendEmail} className='flex-1 border rounded-2xl text-white flex flex-col gap-y-6 p-6 pb-24 border-white'>
            <input type="text" name='subject' className="bg-transparent py-3  border-b w-full outline-none placeholder:text-white focus:border-accent border-white
          transition-all" placeholder='Subject' />

            <input type="text" name='email' className="bg-transparent text-white py-3 border-b w-full outline-none placeholder:text-white focus:border-accent border-white
          transition-all" placeholder='Your email' />

            <textarea name="message" className="bg-transparent py-12 border-b w-full outline-none placeholder:text-white focus:border-accent border-black
          transition-all resize-none mb-12" placeholder='Your message'> </textarea>
            <button type='submit' className='btn btn-lg'>Send a message</button>

          </form>
        </div>

      </motion.div>
    </div>
  )
}

export default Contact