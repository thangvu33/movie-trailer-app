import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {motion ,  AnimatePresence} from 'framer-motion'

function Header() {
  const [isShowHeader, setIsShowHeader] = useState(false)
  const [menu, setMenu] = useState(false)
  const [isSelected,setIsSelected] = useState(0)
  const menuRef = useRef();

  const transitionHeader = () => {
    if (window.scrollY > 50 ) {
      setIsShowHeader(true)
    } else {
      setIsShowHeader(false)
    }
  }

    // useEffect(() => {
    //   const handleOutsideClick = (event) => {
    //     if (!menuRef.current.contains(event.target)) {
    //       setMenu(false);
    //       console.log(menuRef.current)
    //     }
    //   };
    //   document.addEventListener('mousedown',handleOutsideClick)
    //   return () => {
    //     document.removeEventListener('mousedown',handleOutsideClick)
    //   }
    // })


  useEffect(() => {
    window.addEventListener('scroll', transitionHeader);
    return () => window.removeEventListener('scroll', transitionHeader)
  }, [])
  
  return (
    <>
     <header>
        <div className={`fixed z-20 top-0 px-4 h-16 w-full flex flex-row justify-between items-center ${isShowHeader ? 'bg-neutral-900' : 'bg-transparent'}`}>
          <div className='flex flex-row items-center'>
            <div className='h-[32px] w-[32px] rounded-full flex justify-center items-center hover:bg-slate-500 lg:hidden'>
              {menu ? <AiOutlineClose size={26} style={{color: 'white'}} className='cursor-pointer z-10' onClick={() => setMenu(false)}/>  : 
              <AiOutlineMenu size={26} style={{color: 'white'}} className='cursor-pointer z-10' onClick={() => setMenu(true)}/>}
            </div>
            <div className=' text-2xl font-bold px-4' onClick={() => setIsSelected(0)}>
                <Link to={`/`}><span className='text-white'>Movie</span><span className='text-red-700'>Lia</span></Link>
            </div>
            <div>
              <ul className=' flex-row justify-center items-center gap-4 text-white hidden lg:flex '>
              <Link to={`/`}><li className={`h-8 w-16 ${isSelected === 0 ? 'bg-red-600' : ''}  leading-8 text-center rounded-md cursor-pointer`} onClick={() => setIsSelected(0)}>Home</li></Link>
              <Link to={`tv`}><li className={`h-8 w-16 ${isSelected === 1 ? 'bg-red-600' : ''}  leading-8 text-center rounded-md cursor-pointer`} onClick={() => setIsSelected(1)}>Tv</li></Link>
              <Link to={`movie`}><li className={`h-8 w-16 ${isSelected === 2 ? 'bg-red-600' : ''}  leading-8 text-center rounded-md cursor-pointer`} onClick={() => setIsSelected(2)}>Movie</li></Link>
              <Link to={`search`}><li className={`h-8 w-16 ${isSelected === 3 ? 'bg-red-600' : ''}  leading-8 text-center rounded-md cursor-pointer`} onClick={() => setIsSelected(3)}>Search</li></Link>
              </ul>
            </div>
            <AnimatePresence>
              {menu && (
                  <motion.div className='w-[240px] fixed top-0 left-0 bottom-0 bg-neutral-900 lg:hidden '
                    initial={{  x : '-100%' }}
                    animate={{ x : 0 }}
                    exit={{ x : '-100%'}}
                    transition={{ ease: 'easeOut' , duration: 0.2}}
                    ref={menuRef}
                  >
                  <div className='flex flex-col items-center h-1/2 w-full px-8'>
                    <p className='text-3xl text-white font-bold mt-20'>Movie<span className='text-red-700'>Lia</span></p>
                    <div className='w-full mt-8'>
                    <p className='text-xl font-bold'>MENU</p> 
                      <ul className='mt-4 flex flex-col gap-2'>
                      <Link to={`/`}><li className={`w-full p-2 ${isSelected === 0 ? 'bg-red-600' : ''} hover:bg-neutral-600 text-center rounded-md`} onClick={() => {setIsSelected(0);setMenu(false)}}>Home</li></Link>
                      <Link to={`tv`}><li className={`w-full p-2 ${isSelected === 1 ? 'bg-red-600' : ''} hover:bg-neutral-600 text-center rounded-md`} onClick={() => {setIsSelected(1);setMenu(false)}}>Tv</li></Link>
                      <Link to={`movie`}><li className={`w-full p-2 ${isSelected === 2 ? 'bg-red-600' : ''} hover:bg-neutral-600 text-center rounded-md`} onClick={() => {setIsSelected(2);setMenu(false)}}>Movie</li></Link>
                      <Link to='search'><li className={`w-full p-2 ${isSelected === 3 ? 'bg-red-600' : ''} hover:bg-neutral-600 text-center rounded-md`} onClick={() => {setIsSelected(3);setMenu(false)}}>Search</li></Link>
                      </ul>
                    </div>
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>    
        </div>
      </header>
    </>
  )
}

export default Header
