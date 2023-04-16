import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc } from 'firebase/firestore';
import { moviesRef } from '../firebase/firebase';
import { doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Reviews from './Reviews';
export default function ProductDetails() {
    const { id } = useParams();

    const [data, setData] = useState({
        title: "",

        year: "",
        image: "",
        desc: ""
    });
    useEffect(() => {

        getData();
        async function getData() {
            try {
                const _doc = doc(db, "movies", id);
                const _data = await getDoc(_doc);
                setData(_data.data());

            }
            catch (e) {
                alert(e);
            }
        }


    }, []);

    return (
        <div className='p-4 flex justify-center'>
            <img className='h-60' src={data.desc} alt="hero" />
            <div className='ml-4  w-1/2' >
                <h1 className='text-2xl font-bold text-gray-500'>{data.title} <span>{data.year}</span></h1>
                <p className='mt-10'>
                    {data.desc}
                </p>
            </div>
            <Reviews id={id} />
        </div>
    )
}
