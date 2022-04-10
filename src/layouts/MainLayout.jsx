import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 responsive-container">
            {children}
        </div>
    );
};

export default MainLayout;
