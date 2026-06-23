import react from "react";

const Login = () => {
    return (   
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-xl p-10">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-5">
                Login Page
                </h1>
                <label className="block text-gray-700 font-medium mb-2 mr-2">Mobile number</label>
                <input type="number" placeholder="Enter Mobile Number" className="w-full border border-gray-300 rounded-lg p-3 mb-4"></input>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900">Submit</button>
            </div>
        </div>
    );
    
}

export default Login;