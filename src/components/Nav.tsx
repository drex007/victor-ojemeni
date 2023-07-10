import React from 'react'
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto 
        px-5 flex justify-between text-2xl text-white/50 items-center
        '>
          <Link activeClass="active" smooth={true} spy={true} to="home" offset={-200} className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
            <BiHomeAlt />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="about" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
            <BiUser />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="services" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
            <BsClipboardData />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="work" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
            <BsBriefcase/>
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="contact" className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center">
            <BsChatSquareText/>
          </Link>
          {/* <Link>
            <BiHomeAlt />
          </Link> */}
        </div>

      </div>
    </nav>
  )
}

export default Nav