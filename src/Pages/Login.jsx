import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function Login() {
    const { register, handleSubmit } = useForm();
    const navbar = useNavigate();
    function createAccount(data) {
        axios.post("http://localhost:9090/manager/login", data).then((response) => {
            toast.success(response.data.message)
            if (response.data.user) {
                navbar("/dashboard");
            }
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createAccount)} className='text-center bg-blue-100 mt-50 ml-100 p-5 w-160 border border-green-500 rounded-xl' action="">
                <h1>LOGIN ACCOUNT <span>CARGO</span></h1>
                <br />
                <label htmlFor="">USERNAME</label>
                <br /><br />
                <input type="text" className='border border-green-500 bg-white' {...register("UserName")} required />
                <br /><br />
                <label htmlFor="">PASSWORD</label>
                <br /><br />
                <input type="password" className='border border-green-500 bg-white' {...register("Password")} required />
                <br /><br />
                <input type="submit" className='border p-1 bg-black text-white font-bold sans-serif capitalize rounded-md' value="login" />
                <br /><br />
                <p className='text-orange-400'>Don't have account  you?<a href="/">signup</a></p>
            </form>


        </div>
    )
}

export default Login
