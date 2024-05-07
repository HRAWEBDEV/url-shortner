'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
 const [show, setShow] = useState(false);
 return (
  <nav className='flex'>
   <Button variant='ghost' size='sm' onClick={() => setShow((pre) => !pre)}>
    <AiOutlineMenu fill='currentColor' className='text-3xl' />
   </Button>
   <AnimatePresence mode='wait'>
    {show && (
     <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className='absolute end-0 start-0 top-full bg-secondary rounded-lg p-4 py-8'
     >
      <ul className='border-b border-custom-ctGray/20 mb-3 pb-3'>
       <li className='text-center'>
        <Button asChild variant='link' className='text-white' size='lg'>
         <Link href='#'>Features</Link>
        </Button>
       </li>
       <li className='text-center'>
        <Button asChild variant='link' className='text-white' size='lg'>
         <Link href='#'>Pricing</Link>
        </Button>
       </li>
       <li className='text-center'>
        <Button asChild variant='link' className='text-white' size='lg'>
         <Link href='#'>Resources</Link>
        </Button>
       </li>
      </ul>
      <div className='grid gap-2'>
       <Button variant='link' className='text-white' size='lg'>
        Login
       </Button>
       <Button className='rounded-full' size='lg'>
        Sign Up
       </Button>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </nav>
 );
};

export default Navigation;
