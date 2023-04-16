import React, { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { addDoc } from 'firebase/firestore'
import { moviesRef } from '../firebase/firebase'
import sweetAlert from 'sweet-alert'
import swal from 'sweetalert'

export default function AddMovie() {
    const useAppState = useContext(Appstate);
    const [form, setform] = useState({
        title: "",
        year: "",
        desc: "",
        image: ''
    })

    const addMovie = async () => {


        try {
            setLoading(true);
            addDoc(moviesRef, form);
            setLoading(false);
            swal({
                title: "Successfully Added",
                icon: "success",
                buttons: false,
                timer: 3000
            });
            setform({
                title: "",
                year: "",
                desc: "",
                image: ''
            })
        } catch (err) {
            swal({
                title: err,
                icon: "error",
                buttons: false,
                timer: 3000
            });
        }

    }
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add New Movie</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-white">Name</label>
                                    <input onChange={(e) => setform({ ...form, title: e.target.value })} value={form.title} type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-white">Year</label>
                                    <input onChange={(e) => setform({ ...form, year: e.target.value })} value={form.year} type="Text" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-white">Image</label>
                                    <input onChange={(e) => setform({ ...form, image: e.target.value })} value={form.image} type="Text" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-white">Message</label>
                                    <textarea onChange={(e) => setform({ ...form, desc: e.target.value })} value={form.desc} id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">

                                <button onClick={addMovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> {
                                    loading ? <TailSpin height={25} color='white' /> : "Submit"
                                }</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

