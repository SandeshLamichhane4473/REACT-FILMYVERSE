import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { UsersRef } from '../firebase/firebase';
function SignIn(props) {
    const [otpsent, setOtpSent] = useState(true);

    const navigate = useNavigate();
    function confirmOtp() {
        navigate('/login');

    };

    const login = async () => {
        try {

        }
        catch (e) {
            swal({
                title: "Review",
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
    }
    const [form, setform] = useState({
        name: "",
        mobile: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [OTP, setOTP] = useState();
    return (

        <div className='w-full flex  flex-col items-center justify-center bottom-2 top-2 left-2 right-2'>
            {
                otpsent ?
                    <>
                        <input onChange={(e) => setOTP(e.target.value)} value={OTP} type='number' className='p-2 mt-10 text-gray-950' >

                        </input>
                        <Button onClick={confirmOtp}>COnfirm Otp</Button>
                    </>
                    :


                    <>
                        <h1 className='text-xl font-bold'>SignIn</h1>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white">Name</label>
                                <input type="text" onChange={(e) => setform({ ...form, name: e.target.value })} value={form.name} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white">Mobile No</label>
                                <input type="number" onChange={(e) => setform({ ...form, mobile: e.target.value })} value={form.mobile} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white">Password</label>
                                <input type={"password"} onChange={(e) => setform({ ...form, password: e.target.value })} value={form.password} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <Button onClick={login}>SignIn</Button>
                        <div>
                            <p>Already have account?<Link to="/login"><span className='text-blue-500'>Sign In</span></Link></p>
                        </div>

                    </>
            }
        </div>

    )
}

SignIn.propTypes = {}

export default SignIn
