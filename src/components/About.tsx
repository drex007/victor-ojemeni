
//countup
import CountUp from 'react-countup'

//Intersection observer

import { useInView } from 'react-intersection-observer'

import { Link } from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          {/* Image */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat mix-blend-lighten bg-top'></div>
          <div className='flex-1'>
            <h2 className='h2 text-white'>About me</h2>
            <h3 className='h3 mb-4 text-white'>I am a freelancer with 4  years of working professional experience</h3>
            <p className='text-white'>
              I have built web2 and web3 solutions. I have worked with like minds to create products with good user experience and factoring in  security as our top most priority.
              With my proficiency in building robust server-side applications and APIs, I seamlessly integrate the front-end and back-end components to create cohesive and scalable solutions.

            </p>
            {/* STats*/}
            <div className='flex gap-x-6 lg:gap-x-10'>
              <div>
                <div className='text-[30px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={3} duration={10} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px] text-white'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[30px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={10} duration={10} /> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-white'>
                  Completed <br /> Live Projects
                </div>
              </div>
              <div>
                <div className='text-[30px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={7} duration={10} /> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-white'>
                  Tech<br />Stack/Frameworks
                </div>
              </div>

            </div>
            <div className='flex gap-x-6 items-center'>
              <Link smooth={true} spy={true} to="contact" > <button className='btn btn-lg my-3'>Contact me</button></Link>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About