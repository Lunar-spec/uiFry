"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
    const [email, setEmail] = useState("")

    const handleNewsLetterSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        toast.success("Signed up successfully", {
            icon: '📫'
        })
    }
    return (
        <form onSubmit={handleNewsLetterSubmit} className="bg-white shadow-lg shadow-gray-400/10 rounded-md w-max px-2 py-2">
            <input type="email" name="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-4  bg-white focus-within:outline-none" />
            <button className="button-black py-4 rounded-md px-4">
                Subscribe
            </button>
        </form>
    )
}

export default Newsletter