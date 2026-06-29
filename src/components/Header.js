import react, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import i18n from "../i18n/i18n";

const Header = () => {
    // State variable to control dropdown visibility
    // false -> dropdown hidden
    // true  -> dropdown visible
    const [showDropDown,setShowDropDown ] = useState(false);

    // Function to change application language dynamically
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);

        // Save selected language in browser storage
        localStorage.setItem("language", lang);
    };

    // Function to apply active styling for currently selected language
    const getLanguageClass = (lang) =>
    `block w-full text-left p-2 hover:bg-gray-100 ${
    i18n.language === lang ? "bg-blue-200 text-blue-800 font-bold" : ""
    }`;

    return(
    <div className="bg-indigo-200 p-3 flex space-x-5 justify-between">
        <h1 className="text-2xl font-bold cursor-pointer">
            Milk Mall
        </h1>

        {/* <div className="flex gap-10 font-medium">
            <h1 className="cursor-pointer hover:text-yellow-300">Contact</h1>
            <h1 className="cursor-pointer hover:text-yellow-300">Learn</h1>
        </div> */}

        <div className="relative flex items-center gap-2 cursor-pointer"
        
        // Toggle dropdown visibility on click
        // If false -> becomes true (open)
        // If true  -> becomes false (close) 
        onClick={() => setShowDropDown(!showDropDown)}>
            <FaGlobe className="text-xl" />
            <span>Language</span>

            {/* // Conditional rendering */}
            {/* // Render dropdown only when showDropdown is true similar to if(showDropdown === true){ render dropdown } */}

            {showDropDown && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-2 w-40 z-50">
                <button onClick={() => changeLanguage("en")} className={getLanguageClass("en")}>English</button>
                <button onClick={() => changeLanguage("te")} className={getLanguageClass("te")}>Telugu</button>
                <button onClick={() => changeLanguage("kn")} className={getLanguageClass("kn")}>Kannada</button>
                <button onClick={() => changeLanguage("hi")} className={getLanguageClass("hi")}>Hindi</button>
                <button onClick={() => changeLanguage("ta")} className={getLanguageClass("ta")}>Tamil</button>
                <button onClick={() => changeLanguage("ml")} className={getLanguageClass("ml")}>Malayalam</button>
            </div>
            )}
        </div>     
    </div> 
    )
}
export default Header;