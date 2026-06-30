import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = ({setSignin}) => {

    const { t } = useTranslation();
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
    const [ password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ fullname, setFullname] = useState("");
    const [ mobileNumber, setMobileNumber] = useState("");
    const [ loading, setLoading ] = useState(false);

    const handleSignIN = async () => {
        // Validate required fields before calling API
        if(!fullname || !mobileNumber || !password || !confirmPassword){
            window.alert(t("fillRequiredFields"));
            return;
        }

        if(password !== confirmPassword){
        window.alert(t("passwordsNotMatching"));
        return;
        }

        setLoading(true);
        const signincreds = {
            fullname,
            mobileNumber,
            password,
            confirmPassword
        }
        console.log(signincreds);
        try{
            const response = await fetch("http://localhost:8080/api/v1/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signincreds)
            }); 

            const data = await response.json();
            if(response.ok){
                window.alert(t("signinSuccess"));
            setFullname("");
            setMobileNumber("");
            setPassword("");
            setConfirmPassword("");
            }
            
        }catch(error){
            window.alert(t("signinError"));
        }finally{
            setLoading(false);
        }
    }
    
    return(
         <div className="bg-white shadow-lg rounded-xl p-7 w-[400px]">
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-5">
                {t("signinForm")}
            </h1>
                 
                 <label className="block text-gray-700 font-medium mb-2 mr-2">{t("mobileNumber")}</label>
                 <input type="text" placeholder={t("enterMobileNumber")} className="w-full border border-gray-300 rounded-lg p-3 mb-4" 
                 value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}></input>
                 
                 <label className="block text-gray-700 font-medium mb-2 mr-2">{t("fullName")}</label>
                 <input type="text" placeholder={t("enterFullName")} className="w-full border border-gray-300 rounded-lg p-3 mb-4" 
                 value={fullname} onChange={(e) => setFullname(e.target.value)}></input>
                 
                 <label className="block text-gray-700 font-medium mb-2 mr-2">{t("password")}</label>
                 <div className="relative mb-4">
                     <input type={showPassword ? "text" : "password"} 
                     placeholder={t("setNewPassword")} className="w-full border border-gray-300 rounded-lg p-3 mb-4" 
                     value={password} onChange={ (e) => setPassword(e.target.value)}/>
                 <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? <FaEyeSlash/> : <FaEye/>}
                 </span>
                 </div>
 
                 <label className="block text-gray-700 font-medium mb-2 mr-2">{t("confirmPassword")}</label>
                 <div className="relative mb-4">
                     <input type={showConfirmPassword ? "text" : "password"} 
                     placeholder={t("enterSamePassword")} className="w-full border border-gray-300 rounded-lg p-3 mb-4" 
                     value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                 <span className="absolute right-3 top-4 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                 </span>                
                 </div>
 
                 { password !== confirmPassword && confirmPassword !== "" && (
                     <div>
                         <h6 className="text-red-500 text-sm mb-3">
                         {t("passwordsNotMatching")}
                         </h6>
                     </div>
                 )}
                 
                 <button disabled={loading} className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900 mt-1 
                 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSignIN}>{loading ? t("signingIn") : t("signin")}</button>

                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900 mt-1"
                 onClick={() => setSignin(false)}>{t("login")}</button>
 
        </div>  
    )}

export default Signin;