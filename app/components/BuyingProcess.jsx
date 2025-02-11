import React from "react";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { FaEuroSign } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const achievementsData = [
  {
    id: 1,
    icon: <IoCall />,
    title: "Kontakt",
    disc: "Kontaktirajte nas već danas! Pošaljite nam fotografije i detaljan opis vašeg vozila kako bismo vam ponudili brzu i fer procjenu otkupa vozila.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Dogovor",
    disc: "Dogovorite se s nama o najpovoljnijoj cijeni otkupa. Naš tim stručnjaka osigurava transparentnu procjenu i fer ponudu za vaše vozilo.",
  },
  {
    id: 3,
    icon: <FaRunning />,
    title: "Dolazak",
    disc: "Nakon što postignemo dogovor o otkupu, naša mobilna ekipa odmah dolazi na vašu adresu. Brza intervencija osigurava optimalnu uslugu otkupa.",
  },
  {
    id: 4,
    icon: <FaEuroSign />,
    title: "Kupnja",
    disc: "Nakon detaljnog pregleda vašeg vozila, izvršavamo trenutnu isplatu gotovine. Jamčimo brzu, sigurnu i transparentnu kupnju uz najbolju moguću ponudu.",
  },
];

const BuyingProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 md:py-[120px] px-5 relative">
      <div className="max-w-[1220px] mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-white text-3xl font-bold f-montserrat uppercase">
            BRZ I SIGURAN <span className="text-yellow-500">OTKUP VOZILA</span>{" "}
            – ISPLATA ODMAH
          </h2>
          <div className="flex items-center justify-center flex-col gap-1 mt-4">
            <div className="w-[60px] h-[1px] bg-yellow-500"></div>
            <div className="w-[60px] h-[1px] bg-yellow-500"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-28"
        >
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-6xl mb-4 md:mb-8 block">
                {item.icon}
              </span>
              <p className="text-2xl text-yellow-500 font-semibold f-montserrat mb-1">
                {item.title}
              </p>
              <p className="text-sm text-white/80 text-center">{item.disc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingProcess;
