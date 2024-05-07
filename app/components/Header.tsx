import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';
import Navigation from './Navigation';

const Header = () => {
 return (
  <header className='container-frame py-5 flex justify-between gap-4'>
   <div>
    <Button asChild variant='link' className='p-0'>
     <Link href={'#'}>
      <Logo />
     </Link>
    </Button>
   </div>
   {/* <Navigation /> */}
   <div></div>
  </header>
 );
};

export default Header;
