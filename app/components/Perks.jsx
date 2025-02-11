import { FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

const Perks = () => {
    const perks = [
        {
            icon: <FaClock />,
            title: "Dostupni 24/7",
            description: "Naša usluga otkupa vozila dostupna je 24 sata dnevno, 7 dana u tjednu – kontaktirajte nas odmah za brzu procjenu i isplatu."
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Brza Isplata",
            description: "Uz naš otkup vozila, isplate se vrše odmah, bez čekanja – osiguravamo najbržu isplatu na licu mjesta uz fer i transparentne ponude."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Dolazak na Adresu",
            description: "Naša stručna ekipa dolazi direktno na vašu adresu – besplatna, profesionalna procjena otkupa vozila, bez obzira gdje se nalazili."
        },
        {
            icon: <FaShieldAlt />,
            title: "Potpuna Sigurnost",
            description: "Naš otkup vozila jamči potpunu sigurnost – pružamo profesionalnu, transparentnu i pouzdanu uslugu s garancijom zaštite vaših podataka i sigurnih transakcija."
        }
    ];
    

    return (
        <section className="py-20 px-5 mb-20">
            <div>
                <h2 className="text-white text-3xl text-center font-bold f-montserrat uppercase">Zašto odabrati nas? <span className='text-yellow-500'>Brza isplata, fer cijene i pouzdana usluga</span></h2>
                <div className='flex items-center justify-center flex-col gap-1 mt-4'>
                    <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                    <div className='w-[60px] h-[1px] bg-yellow-500'></div>
                </div>
            </div>

            <div className="max-w-[1220px] mx-auto w-full mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perks.map((perk, index) => (
                        <div
                            key={index}
                            className="rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center text-5xl mb-5 text-yellow-500">{perk.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 f-montserrat">{perk.title}</h3>
                            <p className="text-gray-400">{perk.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Perks;
