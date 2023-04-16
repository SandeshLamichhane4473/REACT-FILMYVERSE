import Header from "./Header";
import React, { useEffect, useState } from 'react';
import { Audio } from "react-loader-spinner";
import { getDoc, getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";


export default function Cards() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {

        getData();
        async function getData() {

            try {
                setLoading(true);

                const _data = await getDocs(moviesRef);

                _data.forEach((doc) => {

                    setData((previos) => [...previos, { ...Audio(doc.data()), id: doc.id }]);
                })

                setLoading(false);

            }
            catch (err) {

            }

        }
    }, []);


    return (
        <div className="flex flex-wrap  p-3 mt-2">

            {loading ? <div className="w-full flex justify-center align-center"> <Audio height={40} color="white" /></div> :
                data.map((e, i) => {
                    return (
                        <Link to={'/detail/' + e.id} >
                            <div key={i} className=" shadow p-5 sm:w-fit hover:-translate-y-2 cursor-pointer   mt-3 trasition-all duration-75">
                                <img className=" sm:h-50 md:h-72 w-full" src="https://picsum.photos/200/300" />
                                <h1 className="text-left"> <span className="text-blue-100">Name:</span> {e.name} </h1>
                                <h1 className="text-left"><span className="text-left text-blue-100">Rating:</span> {e.rating}</h1>
                                <h1 className="text-left"><span className="text-left text-blue-100">Year:</span> {e.year}</h1>
                            </div></Link>);
                })
            }


        </div>
    )


}

