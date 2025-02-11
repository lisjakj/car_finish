"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";

// Carousel data
const carouselData = [
    {
        id: 3,
        image: '/assets/avatar-3.png',
        name: "Petar Novak",
        disc: "Preporučujem ovu profesionalnu ekipu za otkup vozila svima! Sve je realizirano prema dogovoru, uz potpunu transparentnost i bez komplikacija, osiguravajući fer ponudu i brzu isplatu."
    },
    {
        id: 1,
        image: '/assets/avatar-1.png',
        name: "Ivan Horvat",
        disc: "Proces otkupa vozila je bio izuzetno brz i efikasan. Cijenim profesionalnost tima koji je osigurao transparentnu procjenu i fer ponudu. Toplo preporučujem ovu uslugu za otkup vozila."
    },
    {
        id: 2,
        image: '/assets/avatar-2.png',
        name: "Marko Perić",
        disc: "Tim je izuzetno ljubazan i temeljit. Jasno su objasnili sve korake procesa otkupa, čime je iskustvo bilo brzo i jednostavno. Preporučujem ovu uslugu za fer i transparentan otkup vozila."
    },
    
    {
        id: 4,
        image: '/assets/avatar-4.png',
        name: "Luka Babić",
        disc: "Tim je vrlo pristupačan i profesionalan, pružajući brzu procjenu i fer otkup vozila. Izuzetno sam zadovoljan uslugom te ih preporučujem svima koji žele prodati svoje vozilo bez stresa."
    },
    {
        id: 5,
        image: '/assets/avatar-5.png',
        name: "Ante Vuković",
        disc: "Proces otkupa je bio nevjerojatno brz i transparentan. Hvala timu na dosljednoj profesionalnosti, jasnoj komunikaciji i fer ponudi – preporučujem ovu uslugu svima koji žele prodati vozilo brzo i sigurno."
    },
];


const Testimonials = () => {
    return (
        <section className="relative bg-[url('/assets/bg-testimonial.jpg')] py-16 md:py-20 bg-cover bg-center bg-no-repeat px-5">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 w-full h-full"></div>

            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center relative mb-10 md:mb-20"
            >
                <h2 className="text-white text-3xl md:text-5xl font-bold f-montserrat uppercase">Što naši zadovoljni kupci kažu o otkupu vozila?</h2>
                <div className='flex items-center justify-center flex-col gap-1 mt-4'>
                    <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                    <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                </div>
            </motion.div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                className="mySwiper relative z-10 max-w-[800px] w-full mx-auto"
            >
                {carouselData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center text-center pb-20"
                        >
                            <BiSolidQuoteAltLeft className="text-yellow-500 text-7xl mb-8" />
                            <p className="text-white text-xl md:text-2xl mb-6 italic max-w-[600px] leading-relaxed">
                                {slide.disc}
                            </p>
                            <div className="w-16 h-[2px] bg-yellow-500 mb-4"></div>
                            <p className="font-bold text-xl text-yellow-500">{slide.name}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
