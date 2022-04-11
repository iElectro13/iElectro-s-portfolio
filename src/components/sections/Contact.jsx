import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Contact = () => {
    return (
        <div
            id="contact"
            className="bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center"
        >
            <MainLayout>
            <span className='text-neutral-100 text-4xl font-bold'>CONTACT</span>
            <span className="text-sky-500">Want to contact me?</span>
              <form className="w-full flex flex-col justify-center items-center gap-4" action="">
                <input className="p-2 w-full bg-neutral-700" type="text" name="" id="" placeholder="Name"/>
                <input className="p-2 w-full bg-neutral-700" type="text" name="" id="" placeholder="Email"/>
                <textarea className="p-2 w-full bg-neutral-700" type="text" name="" id="" placeholder="Your message"/>
                <button type="submit" className="btn btn-ghost transition-colors">Submit</button>
              </form>
            </MainLayout>
        </div>
    );
};

export default Contact;
