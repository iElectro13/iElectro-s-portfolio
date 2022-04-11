import React from "react";

const Skill = ({ title, text }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-neutral-700 text-center text-2xl font-bold">
                {title}
            </h3>
            {text === undefined ? (
                <p className="text-neutral-600 text-center">
                    BREAK THE{" "}
                    <span className="text-pink-700 font-bold">!#$!% </span>
                    MONOLITH!
                </p>
            ) : (
                <p className="text-neutral-600 text-center">{text}</p>
            )}
        </div>
    );
};

export default Skill;
