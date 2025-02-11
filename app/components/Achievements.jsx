import React from 'react'
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const achievementsData = [
    {
        id: 1,
        count: 10,
        prefix: "+",
        title: "Godina iskustva u otkupu vozila – brza isplata i fer cijene"
    },
    {
        id: 2,
        count: 2000,
        prefix: "+",
        title: "Zadovoljnih klijenata – provjeren i siguran otkup vozila"
    },
    {
        id: 3,
        count: 2000,
        prefix: "+",
        title: "Otkupljenih vozila svih marki i godišta – dolazimo na adresu"
    }
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const Achievements = () => {
    return (
        <section className='bg-[url("/assets/achievements-bg.jpg")] bg-cover overflow-hidden bg-center bg-no-repeat py-16 md:py-[100px] px-5 relative'>
            <div className='bg-black/70 absolute inset-0 w-full h-full'></div>
            <div className='max-w-[1220px] mx-auto w-full relative'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl text-center font-bold f-montserrat uppercase mb-16"
                >
                    Naša postignuća u otkupu vozila – iskustvo i povjerenje
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
                >
                    {achievementsData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="flex flex-col items-center text-white"
                        >
                            <h2 className="text-5xl md:text-[60px] font-bold text-[#ffd012] f-montserrat mb-2">
                                <CountUp
                                    start={0}
                                    end={item.count}
                                    duration={2.5}
                                    prefix={item.prefix}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </h2>
                            <p className="text-xl text-[#949494] text-center">{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Achievements