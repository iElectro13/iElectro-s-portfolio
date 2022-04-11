import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactForm from "../forms/ContactForm";

const Contact = () => {
    return (
        <div
            id="contact"
            className="bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center"
        >
            <MainLayout>
            <span className='text-neutral-100 text-4xl font-bold'>CONTACT</span>
            <span className="text-sky-500">Want to contact me?</span>
            <ContactForm />
            </MainLayout>
        </div>
    );
};

export default Contact;
