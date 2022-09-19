import React from 'react';
import  Logo from './logo.png';
import { useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


const Navbar = () => {
  const [nav, setNav, logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

    return (
      <div className='flex w-full justify-between items-center h-30 px-10 absolute z-10 text-white mt-10'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>

        <a href="/" className="flex items-center">
          <img className='h-[50px]' src={Logo} alt='' />
        </a>
        </h1>
      </div>
      <ul className='hidden md:flex'>
        <Nav/>
      </ul>

      <div className='hidden md:flex'>
      <a style={{display: "table-cell"}} href = "https://app.seam.money" target = "_blank" rel = "noopener noreferrer">
        <button className="seam-button m-3 hidden w-full flex flex-col md:block flex md:w-auto">Launch App</button>
        </a>
      </div>

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-white' size={20} /> : <HiOutlineMenuAlt4 size={20} />}

      </div>

      <div onClick={handleNav} className={nav ? 'absolute text-white left-0 top-0 w-full px-4 py-56 flex flex-col bg-gradient-to-r from-[#000000] via-[#0085CC] to-[#005DA2] w-full fixed h-[100vh]' : 'min-h-0 absolute left-[-100%]'}>
        <ul>
            <br />
            <br />
            <br />
          <NavMobile/>
          <br/>
          <div className='flex flex-col items-center'>

            <a style={{display: "table-cell"}} href = "https://app.seam.money" target = "_blank" rel = "noopener noreferrer">
                <button className='seam-button'>Launch App</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
    );
};

export default Navbar;
