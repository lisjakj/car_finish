"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./Header";

const carouselData = [
    {
      id: 7,
      image: '/assets/bmw.jpg',
      title: 'SVE MARKE I GODIŠTA',
      description:
        'Kupujemo vozila svih marki i godišta. Isplate su dostupne 24 sata, uz profesionalnu procjenu.',
      dodatniOpis: 'Isplata odmah • Dolazak na adresu • Najbolje ponude'
    },
    {
      id: 3,
      image: '/assets/Audir.avif',
      title: 'SPORTSKI AUTOMOBILI',
      description:
        'Otkup sportskih automobila – brzina, stil i napredna tehnologija. Brza isplata i profesionalna usluga.',
      dodatniOpis: 'Brza evaluacija • Isplata u rekordnom roku • Vrhunske ponude'
    },
    
    {
        id: 9,
        image: '/assets/cab2.jpg',
        title: 'KABRIOLETI',
        description:
          'Otkup kabrioleta – vozila koja odišu elegancijom i slobodom, uz fer procjenu i brzu isplatu.',
        dodatniOpis: 'Isplata ekspresno • Profesionalna procjena • Atraktivne ponude'
      },
    {
        id: 8,
        image: '/assets/bik.jpg',
        title: 'MOTOCIKLI I QUADOVI',
        description:
          'Otkup motora i quadova – najbolje cijene i fer procjena, specijalizirani smo za dvoznačna vozila.',
        dodatniOpis: 'Ekspresna evaluacija • Isplata odmah • Najbolje ponude'
      },
    {
      id: 4,
      image: '/assets/jeep.jpg',
      title: 'JEEP & SUV',
      description:
        'Otkup Jeep i SUV vozila – prilagođeni svim terenima, uz atraktivne tržišne ponude.',
      dodatniOpis: 'Fleksibilna isplata • Posjet na adresi • Najatraktivnije ponude'
    },
    {
      id: 5,
      image: '/assets/cargo-van.jpeg',
      title: 'TERETNA VOZILA',
      description:
        'Otkup teretnih vozila – profesionalna procjena i dostava na adresu, osiguravajući optimalnu vrijednost za vaše vozilo.',
      dodatniOpis: 'Isplata brzo • Besplatna evaluacija • Konkurentne cijene'
    },
    {
      id: 6,
      image: '/assets/pvan.avif',
      title: 'PUTNIČKI KOMBIJI',
      description:
        'Otkup putničkih kombija – idealno rješenje za veće grupe, uz transparentnu procjenu i brzu isplatu.',
      dodatniOpis: 'Sigurna isplata • Dostava na adresu • Transparentne ponude'
    },
  ];
  
const Hero = () => {
    return (
        <section className="h-screen relative">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                loop={true}
                className="mySwiper h-full"
            >
                {carouselData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* Text Content */}
                            <div className="w-full h-full flex justify-center items-center relative px-5 lg:px-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col items-center justify-center max-w-[900px] w-full mx-auto text-white text-center"
                                >
                                    <h1 className="f-montserrat uppercase text-5xl lg:text-7xl font-bold mb-8 mt-20">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-3xl mb-24 text-yellow-500">
                                        {slide.description}
                                    </p>
                                    
                                    <a href="tel:+385998284489" className="bg-yellow-400 text-2xl rounded-full text-black py-5 px-8 font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/50 mb-24">
                                        +385 99 828 4489
                                    </a>
                                    <p className="text-lg lg:text-xl text-gray-200">
                                        {slide.dodatniOpis}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="hidden md:flex">
                <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10">
                    <button className="custom-swiper-button-prev w-12 h-12 bg-black/50 text-yellow-400 border border-yellow-500 flex items-center justify-center rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                        <FaArrowLeftLong />
                    </button>
                </div>

                <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10">
                    <button className="custom-swiper-button-next w-12 h-12 bg-black/50 text-yellow-400 border border-yellow-500 flex items-center justify-center rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
