import react from "react";
import { FaGlobe } from "react-icons/fa";

const Header = () => {
    return(
    <div className="bg-indigo-200 p-3 flex space-x-5 justify-between">
        <h1 className="text-2xl font-bold cursor-pointer">
            Milk Mall
        </h1>

        {/* <div className="flex gap-10 font-medium">
            <h1 className="cursor-pointer hover:text-yellow-300">Contact</h1>
            <h1 className="cursor-pointer hover:text-yellow-300">Learn</h1>
        </div> */}

        <div className="flex items-center gap-2 cursor-pointer">
            <FaGlobe className="text-xl" />
            <span>Language</span>
        </div>      
        
    </div> 
    )
}
export default Header;