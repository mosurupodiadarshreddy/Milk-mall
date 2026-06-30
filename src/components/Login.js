import react from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Signin from "./Signin";

const Login = () => {

    // Hook for multi-language translations
    const { t } = useTranslation();

    const [ signin, setSignin ] = useState(false);
    const [ mobileNumber, setMobileNumber ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);
    const [ loading, setLoading ] = useState(false);
 
    const handleLoginIn = async () => {

        // Validate required fields before calling API
        if(!mobileNumber || !password){
            window.alert(t("enterBothFields"));
            return;
        }

        setLoading(true);

        const logincreds = {
            mobileNumber,
            password
        }
        console.log(logincreds);
        try{
            const response = await fetch("http://localhost:8080/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(logincreds)
        })

        const data = await response.json();
        console.log(data);
            if(response.ok){
                window.alert(t("loginSuccess"));
            }
            else{
                window.alert(t("loginError"));
            }
        }
        catch(error){
            window.alert(t("loginError"));
        }
        finally{
            setLoading(false);
        }
    }

    return (   
        <div className="h-screen bg-gray-100 flex justify-center items-center" 
         style={{
            backgroundImage:
            "url('https://images5.alphacoders.com/355/355233.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

            {/* Conditional rendering:
                If signin = true -> render Signin component
                Else -> render Login form */}
            {signin ? <Signin setSignin={setSignin}/> : (
            <div className="bg-white shadow-lg rounded-xl p-10 w-[400px]">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-5">
                    {t("loginPage")} 
                </h1>
                
                <label className="block text-gray-700 font-medium mb-2 mr-2">{t("mobileNumber")}</label>
                <input type="text" placeholder={t("enterMobileNumber")} 
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                    onChange={(e) => setMobileNumber(e.target.value)}>
                </input>

                <label className="block text-gray-700 font-medium mb-2 mr-2">{t("password")}</label>
                <div className="relative mb-4">
                    <input type={showPassword ? "text" : "password"} placeholder={t("enterPassword")} 
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4"                           
                    onChange={(e) => setPassword(e.target.value)}/>
                    <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>
                
                <button disabled={loading} className={`w-full text-white py-3 rounded-lg ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-900" }`}
                    onClick={handleLoginIn}>{loading ? t("loading") : t("login")}
                </button>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900 mt-1"
                onClick={() => setSignin(!signin)}>{t("signin")}</button>

            </div>
            )}
           
        </div>
    );
    
}

export default Login;