'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { fugazOne } from "@/fonts";

const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
            return;
        }
        router.push("/admin/reviews");
        router.refresh();
    };

        return (
            <div className="flex relative bg-white h-screen">

                <form onSubmit={handleSubmit} className="flex flex-col relative justify-center items-center gap-10 w-100">
                    <h1 className={`${fugazOne.className} uppercase text-black! `}>Admin Login</h1>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border p-2 text-sm rounded-[5px]"
                        />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border p-2 text-sm rounded-[5px]"
                        />

                {error && <p className={`${fugazOne.className} text-red-600 text-sm `}>{error}</p>}

                <button type="submit" className={`${fugazOne.className} bg-black text-white p-4 w-30 rounded-[5px] text-sm uppercase`}>
                    Log In
                </button>

                </form>
            </div>
        )
    }
