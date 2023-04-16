import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppState } from '../App';
import { createContext } from 'react';

export default function Header() {
    const AppStatex = createContext(AppState);
    return (
        <div className=' text-3xl flex justify-between items-center text-red-500 font-bold p-5 border-b-2 border-gray-300'>
            <p><span className='text-white'> Filmy</span><span>Verse</span></p>

            {
                AppStatex.login ?
                    <Link to={'/addmovie'}> <Button> <h1 className='text-lg text-white flex items-center cursor-pointer'><AddIcon className="mr-2" color='inherit' /> Add New</h1></Button></Link> :
                    <Link to={'/login'}> <Button> <h1 className='text-lg text-white flex items-center cursor-pointer'><AddIcon className="mr-2" color='inherit' /> Login</h1></Button></Link>
            }

        </div>
    )
}
