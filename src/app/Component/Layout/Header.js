"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchPopup from '../Widgets/Homepage/SearchPopup';
import { headerLogo, menuTogleList, menuClose } from '../../assets/index';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
            header.classList.add('scrolled');
            } else {
            header.classList.remove('scrolled');
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className='w-full xl:py-7 py-5 fixed left-0 top-0 bg-white z-[999] transition-all duration-300'>
            <div className='container mx-auto'>
            <div className='w-full flex items-center'>
                <Link href='/' className='block xl:w-[235px] w-[180px]'>
                <Image src={headerLogo} alt='Gradient-Tick' priority />
                </Link>
                <nav className={`flex lg:flex-row flex-col lg:items-center ml-auto lg:p-0 p-8 lg:static fixed top-[72px] transition-all lg:border-t-0 border-t border-solid border-[#c8d2d8] bg-white lg:bg-inherit ${menuOpen ? 'left-0' : '-left-full'} lg:w-auto w-full lg:h-auto h-[calc(100vh+84px)] space-y-4 lg:space-y-0`}>
                <ul className='flex lg:flex-row flex-col lg:items-center xl:space-x-12 lg:space-x-7 border-spacing-y-64'>
                    <li>
                    <Link href='/' className='text-xl lg:text-lg block text-primary font-normal no-underline py-2 hover:text-primary'>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link href='/' className='text-xl lg:text-lg block text-black font-normal no-underline py-2 hover:text-primary'>
                        Seniors
                    </Link>
                    </li>
                    <li>
                    <Link href='/personal' className='text-xl lg:text-lg block text-black font-normal no-underline py-2 hover:text-primary'>
                        Member
                    </Link>
                    </li>
                    <li>
                    <Link href='/' className='text-xl lg:text-lg block text-black font-normal no-underline py-2 hover:text-primary'>
                        Dedicated Poll
                    </Link>
                    </li>
                    <li>
                    <Link href='/' className='text-xl lg:text-lg block text-black font-normal no-underline py-2'>
                        Features
                    </Link>
                    </li>
                </ul>
                <Link href='/' className='fill-btn lmd:ml-12 lg:ml-9 w-fit'>
                    Registration
                </Link>
                </nav>
                <div className='lg:ml-3 ml-auto'>
                <SearchPopup />
                </div>
                <button type='button' className='lg:hidden block ml-3' onClick={handleMenuToggle}>
                {menuOpen ? (
                    <Image src={menuClose} alt='menulist' priority />
                ) : (
                    <Image src={menuTogleList} alt='menulist' priority />
                )}
                </button>
            </div>
            </div>
        </header>

        
    );
}
