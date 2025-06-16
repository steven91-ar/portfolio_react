import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-20">
      {/* Titre */}
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

      {/* Contenu */}
      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phone}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="underline text-purple-400"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
// Compare this snippet from src/components/Contact.jsx:
// import React from "react";