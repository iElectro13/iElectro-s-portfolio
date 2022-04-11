import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mbjwzdop");
    if (state.succeeded) {
        return <p className="font-bold text-xl text-sky-500 text-center">Thanks for contacting me.<br/>Wait for my answer, i'll reply soon.</p>;
    }

    return (
        <form
            className="w-full flex flex-col justify-center items-center gap-4"
            action=""
            onSubmit={handleSubmit}
        >
            <input
                className="p-2 w-full bg-neutral-700"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
                className="p-2 w-full bg-neutral-700"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                className="p-2 w-full bg-neutral-700"
                name="message"
                id="message"
                placeholder="Your message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button disabled={state.submitting} type="submit" className="btn btn-ghost transition-colors">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
