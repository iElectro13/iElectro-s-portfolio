import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";

function App() {
    return (
        <div className="font-raleway">
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    );
}

export default App;
