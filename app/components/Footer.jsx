import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { motion } from 'framer-motion';  // Import Framer Motion

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='px-4 pt-20'>
            <div className='max-w-[1220px] w-full mx-auto'>
                {/* Logo animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Link href="/">
                        <Image src="/assets/logo.svg" alt="logo" width={150} height={150} className='w-fit h-40 mx-auto' />
                    </Link>
                </motion.div>

                <div className='flex flex-col justify-center items-center gap-4 pb-20'>
                    <h2 className='text-white text-center text-2xl font-semibold f-montserrat uppercase mt-10'>
                        Kontaktirajte nas
                    </h2>

                    <p className='text-white text-lg font-medium'>Telefon: +38598200820</p>

                    {/* Buttons animation */}
                    <motion.div
                        className='flex gap-6 mt-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Call Icon */}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="tel:+38598200820" className='w-16 h-16 rounded-full flex justify-center items-center border border-yellow-500 hover:bg-yellow-500 transition-all duration-300'>
                                <IoCall size={30} />
                            </Link>
                        </motion.div>

                        {/* WhatsApp Icon */}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="https://wa.me/+38598200820" target='_blank' className='w-16 h-16 rounded-full flex justify-center items-center border border-yellow-500 hover:bg-yellow-500 transition-all duration-300'>
                                <FaWhatsapp size={30} />
                            </Link>
                        </motion.div>

                        {/* Viber Icon */}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link href="viber://chat?number=%2B38598200820" target='_blank' className='w-16 h-16 rounded-full flex justify-center items-center border border-yellow-500 hover:bg-yellow-500 transition-all duration-300'>
                                <FaViber size={30} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <p className='text-white text-center py-10 text-sm border-t border-white/25 w-full'>© {currentYear} Sva prava pridržana.</p>
            </div>
        </footer>
    );
}

export default Footer;
