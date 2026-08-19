"use client"

import { useState } from "react";
import emailJS from "@emailjs/browser";
import { toast } from "react-toastify";
import Close from "@public/x.svg"
import { fugazOne } from "@/fonts";

export default function EmailContactForm({ onClose }) {
    const [ formData, setFormData ] = useState ({ name: "", email:"", message:""});

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const response = await emailJS.send(serviceID, templateID, formData, userID)
            if (response.status === 200) {
                toast.success("Message sent!");
                setFormData({ name: "", email: "", message: ""});
            }
        } catch (error) {
            toast.error("Failed to send message, try again later")
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col relative z-50">

            <div className="flex flex-col items-center text-center gap-8 absolute w-full">

            <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center relative z-50 left-30">
            <Close
                width="15px"
                className="text-white!"/>
            </button>

            <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${fugazOne.className} border border-white rounded-[3px] p-3 w-70 text-[#ffffff]! text-xs uppercase placeholder:text-[#ffffff]/50`}
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${fugazOne.className} border border-white rounded-[3px] p-3 w-70 text-[#ffffff] text-xs uppercase placeholder:text-[#ffffff]/50`}
            />

            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${fugazOne.className} uppercase border border-white rounded-[3px] text-[#ffffff] text-xs p-3 w-70 h-30 placeholder:text-[#ffffff]/50`}
            />
            </div>

            <button 
                type="submit" 
                className={`${fugazOne.className} relative top-90 bg-white p-4 rounded-[3px] text-black text-xs items-center justify-center uppercase`}
                >
                Send Message
                </button>
        </form>
    )
}