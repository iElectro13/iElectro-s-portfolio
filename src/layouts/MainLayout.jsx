import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-80 gap-4">
            {children}
        </div>
    );
};

export default MainLayout;
