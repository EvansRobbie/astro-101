import { useState } from 'react';
import logo from '../assets/astro.svg';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };
  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <header className='z-10 sticky top-0 bg-white/20 backdrop-blur backdrop-filter h-20 flex items-center'>
      <div className='w-full relative'>
        <nav className='flex items-center justify-between container mx-auto px-4 '>
          <a href='/'>
            <img src={logo.src} alt='Astro logo' />
          </a>
          <ul className=' items-center hidden md:flex gap-4'>
            {!openMobileMenu && (
              <>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about/'>About</a>
                </li>
                <li>
                  <a href='/blog/'>Blog</a>
                </li>
              </>
            )}
          </ul>
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            className='space-y-1 relative z-50 block md:hidden'
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: openMobileMenu ? 45 : 0,
                transformOrigin: 'center',
              }}
              className='w-8 h-0.5 bg-black text-black'
            ></motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: openMobileMenu ? 0 : 1 }}
              className='w-6 h-0.5 bg-black'
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: openMobileMenu ? -45 : 0,
                width: openMobileMenu ? 32 : 16,
                translateY: openMobileMenu ? -12 : 0,
                transformOrigin: 'center',
                // top: openMobileMenu ? '-20' : 0,
              }}
              className='w-4 h-0.5 bg-black'
            ></motion.div>
          </button>
        </nav>
        <AnimatePresence>
          {openMobileMenu && (
            <motion.div
              initial={{ opacity: 0, filter: 'blur(5px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(5px)' }}
              className='fixed top-0 left-0 w-full h-screen border z-20 bg-white flex items-center justify-center'
            >
              <motion.ul
                className='space-y-8'
                variants={variants}
                initial='hidden'
                animate='visible'
              >
                <motion.li variants={itemVariant}>
                  <a href='/'>Home</a>
                </motion.li>
                <motion.li variants={itemVariant}>
                  <a href='/about/'>About</a>
                </motion.li>
                <motion.li variants={itemVariant}>
                  <a href='/blog/'>Blog</a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
