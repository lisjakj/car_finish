import React from 'react'
import Marquee from "react-marquee-slider";

const brandsData = [
    {
        id: 1,
        logo: "/assets/bentley-logo.png",
        name: "Bentley"
    },
    {
        id: 2,
        logo: "/assets/bmw-logo.png",
        name: "BMW"
    },
    {
        id: 3,
        logo: "/assets/ford-logo.png",
        name: "Ford"
    },
    {
        id: 4,
        logo: "/assets/honda-logo.png",
        name: "Honda"
    },
    {
        id: 5,
        logo: "/assets/hyundai-logo.png",
        name: "Hyundai"
    },
    {
        id: 6,
        logo: "/assets/jeep-logo.png",
        name: "Jeep"
    },
    {
        id: 7,
        logo: "/assets/kia-logo.png",
        name: "Kia"
    },
    {
        id: 8,
        logo: "/assets/subaru-logo.png",
        name: "Subaru"
    },

    {
        id: 9,
        logo: "/assets/tesla-logo.png",
        name: "Tesla"
    },
    {
        id: 10,
        logo: "/assets/toyota-logo.png",
        name: "Toyota"
    },


];

const Brands = () => {

    return (
        <section className="px-5 py-20">
            <div className="max-w-[1220px] mx-auto overflow-hidden">
                <div>
                    <h2 className="text-white text-3xl text-center font-bold f-montserrat uppercase">Otkup <span className='text-yellow-500'> svih marki vozila</span> – isplata odmah i dolazak na adresu</h2>
                    <div className='flex items-center justify-center flex-col gap-1 mt-4'>
                        <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                        <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                    </div>
                </div>

                <div className="h-[120px] flex-1 flex items-center justify-center mt-12">
                    <div className='w-full'>
                        <ul>
                            <Marquee
                                velocity={25}
                                minScale={0.7}
                                resetAfterTries={200}
                                scatterRandomly={false}
                                direction="rtl"
                                onInit={() => console.log("Marquee initialized")}
                            >
                                {brandsData.map((brand) => (
                                    <li key={brand.id} className='flex items-center'>
                                        <div className='w-[80px] md:w-[98px] mr-16 md:mr-24'>
                                            <img
                                                src={brand.logo}
                                                alt={`${brand.name} Logo`}
                                                className='w-full h-full'
                                            />
                                        </div>
                                    </li>
                                ))}
                            </Marquee>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands 