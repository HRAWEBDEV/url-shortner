import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '@/components/ui/button';

const Navigation = () => {
 return (
  <nav className='flex'>
   <Button variant='ghost' size='sm'>
    <AiOutlineMenu fill='currentColor' className='text-3xl' />
   </Button>
   <div className='absolute end-0 start-0 top-full bg-secondary rounded-lg p-4 py-8'>
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
   </div>
  </nav>
 );
};

export default Navigation;
