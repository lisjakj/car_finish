import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='px-4 h-32 md:h-40 w-full z-50 flex items-center'>
            <div className='w-full mx-auto flex md:justify-start justify-center items-center'>
                <Link href="/">
                    <Image src="/assets/logo.svg" alt="logo" width={100} height={100} className='w-fit h-24 md:h-34' />
                </Link>
            </div>
        </header>
    )
}

export default Header