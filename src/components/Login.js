import React from 'react';
import img from '../components/images/food-image.jpg'


function Login() {
    return (<>

        <div className="h-screen flex flex-col items-center justify-center bg-cover bg-c" style={{ backgroundImage: `url(${img})` }}>
            <div className="flex items-center justify-between m-5">
                <a href="#" className="text-sm text-white font-bold mr-5 hover:text-orange-500">Login as</a>
                <button type="submit" className="bg-orange-600 text-white px-4 py-2 mr-5 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-600">Student</button>
                <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">Restraunt Owner</button>
            </div>
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">Login</button>
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-700">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default Login;
