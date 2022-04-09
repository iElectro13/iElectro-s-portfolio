import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-11/12 gap-4 sm:w-10/12 md:w-4/5 lg:w-3/5">
            {children}
        </div>
    );
};

export default MainLayout;
