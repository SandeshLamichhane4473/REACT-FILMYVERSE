import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { TailSpin } from 'react-loader-spinner';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { query, where, getDoc, getDocs } from 'firebase/firestore'
import { UsersRef } from '../firebase/firebase';
import { AppState } from '../App';

function Login(props) {
    const navigate = useNavigate()
    const useAppState = useContext(AppState);
    const login = async () => {

        try {
            const _data = query(UsersRef, where('mobile', "==", form.mobile));
            const querySnapshot = await getDocs(_data);

            querySnapshot.forEach((doc) => {

                const data_ = doc.data();
                const isUser = data_.password === form.password ? true : false;
                if (isUser) {
                    alert("Login Successfull............");
                    useAppState.setLogin(true);
                    navigate('/');
                } else {
                    alert("Password dont match")
                }
            })

        } catch (e) {
            swal({
                title: "Login Successfull",
                icon: "success",
                buttons: false,
                timer: 3000
            })
        }
    }


    const [form, setform] = useState({
        mobile: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    return (
        <div className='w-full flex  flex-col items-center justify-center bottom-2 top-2 left-2 right-2'>
            <h1 className='text-xl font-bold'>Login</h1>
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

            <Button onClick={login}>Login</Button>
            <div>
                <p>Do not have account?<Link to="/signin"><span className='text-blue-500'>Sign In</span></Link></p>
            </div>


        </div>
    )
}

Login.propTypes = {}

export default Login
