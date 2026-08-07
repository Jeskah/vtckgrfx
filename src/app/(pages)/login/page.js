'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

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
        const { error } = await supabase.auth.signInWithPassword({ email, password});
        if (error) {
            setError(error.message);
            return;
        };

        return (
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
                    <h1>Admin Login</h1>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border p-2 text-sm"
                        />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border p-2 text-sm"
                        />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button type="submit" className="bg-black text-white p-2 text-sm">
                    Log In
                </button>

                </form>
            </div>
        )
    }
}