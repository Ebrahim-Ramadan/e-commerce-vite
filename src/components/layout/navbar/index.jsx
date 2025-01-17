import LogoSquare from 'components/logo-square';

import Link from 'next/link';
import { Suspense } from 'react';
import Search, { SearchSkeleton } from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {


  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
      
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
         
        </div>
      </div>
    </nav>
  );
}
