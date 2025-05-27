import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"


function Signup() {
    const { register, handleSubmit } = useForm();
    const navbar = useNavigate();
    function createAccount(data) {
        axios.post("http://localhost:9090/manager/signup", data).then((respons) => {
            toast.success("user create account in cargo successfuly")
            navbar("/login");
        });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(createAccount)} className='text-center bg-blue-100 mt-50 ml-100 p-5 w-160 border border-green-500 rounded-xl' action="">
                <h1>CREATE ACCOUNT <span>CARGO</span></h1>
                <br />
                <label htmlFor="">USERNAME</label>
                <br /><br />
                <input type="text" className='border border-green-500 bg-white' {...register("UserName")} required />
                <br /><br />
                <label htmlFor="">PASSWORD</label>
                <br /><br />
                <input type="password" className='border border-green-500 bg-white' {...register("Password")} required />
                <br /><br />
                <input type="submit" className='border p-1 bg-black text-white font-bold sans-serif capitalize rounded-md' value="signup" />
                <br /><br />
                <p className='text-orange-400'>Arleady you have an account  you?<a className='text-black' href="/login">login</a></p>
            </form>

        </div>
    )
}

export default Signup
