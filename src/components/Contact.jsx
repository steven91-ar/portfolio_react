import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Titre */}
      <motion.h1 
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
  className="my-10 text-center text-4xl">Entrez en contact</motion.h1>

      {/* Contenu */}
      <div className="text-center tracking-tight">
        <motion.p 
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.p
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.phone}</motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="underline text-purple-400"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
// Compare this snippet from src/components/Contact.jsx:
// import React from "react";