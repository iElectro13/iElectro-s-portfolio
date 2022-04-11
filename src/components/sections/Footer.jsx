import React from "react";
import { FaGithubSquare, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import {MdOutlinePictureAsPdf} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-4 bg-neutral-800">
            <div className="flex flex-col justify-center items-center gap-4 responsive-container py-10">
                <div className="flex justify-center items-center gap-4">
                    <FaGithubSquare className="text-neutral-100 text-4xl cursor-pointer" />
                    <FaLinkedin className="text-neutral-100 text-4xl cursor-pointer" />
                    <MdOutlinePictureAsPdf className="text-neutral-100 text-4xl cursor-pointer" />
                </div>
                <span className="text-neutral-100">
                    Enmanuel Pereira (iElectro) <span className="text-pink-700">&copy; 2022</span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
