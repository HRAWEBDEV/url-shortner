import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';
import Navigation from './Navigation';

const Header = () => {
 return (
  <header className='container-frame'>
   <div className='py-5 flex justify-between gap-4 items-center relative'>
    <div className='flex'>
     <Button asChild variant='link' className='p-0'>
      <Link href={'#'}>
       <Logo />
      </Link>
     </Button>
    </div>
    <Navigation />
   </div>
  </header>
 );
};

export default Header;
