import { addDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';
import { ReviewsRef } from '../firebase/firebase';
import { doc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { AppState } from '../App';

export default function Reviews({ id }) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState("");
    const [reviewData, setreviewData] = useState([]);
    const [reviewLoading, setReviewLoading] = useState(true);
    const useAppstate = useContext(AppState);

    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(ReviewsRef, {
                movieid: id,
                name: " ",
                rating: "5",
                thought: form,
                timestamp: new Date().getTime()
            });
            setLoading(false);
            swal(
                {
                    title: "Review Sent",
                    icon: "success",
                    buttons: false,
                    timer: 3000
                }
            );
            setForm("");


        } catch (error) {
            swal(
                {
                    title: error,
                    icon: "success",
                    buttons: false,
                    timer: 3000
                }
            )


        }

        const reference = doc(db, "movies", id);

    }

    useEffect(() => {
        getDataRe();
        async function getDataRe() {
            try {
                setReviewLoading(true);

                let queryx = query(ReviewsRef, where('movieid', "==", id));
                const querySnapshot = await getDocs(queryx);
                querySnapshot.forEach((doc) => {
                    var docdata = doc.data();
                    setreviewData((previousdata) => [...previousdata, docdata])
                    //setreviewData([...reviewData, doc.data()])
                })



                setReviewLoading(false);
            } catch (e) {
                alert(e);
            }
        }

    }, []);
    return (
        <div className='mt-4 w-full'>
            <input
                value={form}
                onChange={((e) => setForm(e.target.value))}
                placeholder='Enter your thoughts...'
                className="w-full text-black p-2 outline-none" />
            <button onClick={sendReview} className='bg-green-600 w-full p-2  flex justify-center'>
                {loading ? <TailSpin color='white' height={15} /> : 'Share'}</button>
            {
                reviewLoading ?
                    <div className='mt-3 flex justify-center'><ThreeDots height={15} color='white' /></div>
                    :
                    <div>
                        {
                            reviewData && reviewData.map((e, i) => {
                                return (
                                    <div key={i} className='bg-gray-900 mt-6 bottom-2'>
                                        <p>{e.rating}</p>
                                        <p>{e.thought}</p>
                                        <p>{new Date(e.timestamp).toLocaleString()}</p>
                                    </div>
                                );

                            })
                        }
                    </div>
            }
        </div>
    )
}
