import "./App.css"
import Profile from "./Profile";
import LinkContainer from "./LinkContainer";
import { useEffect, useState } from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    })

    const [viewMode, setViewMode] = useState("list");

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode])

    return (
        <div className="app">
            <div className="btn-container">
                <button className="theme-btn"
                    onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "☀️ light mode" : "🌙 dark mode"}
                </button>
            </div>
            
            <div className="main">
                <Profile />
                <div className="view-btn">
                    <button className="theme-btn" onClick={() => setViewMode("list")}>List View</button>
                    <button className="theme-btn" onClick={() => setViewMode("grid")}>Grid View</button>
                </div>
                <LinkContainer isDarkMode={isDarkMode} viewMode={viewMode}/>
            </div>
        </div>
        
    );
}

export default App;