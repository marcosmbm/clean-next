"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaGithub } from "react-icons/fa";

export function FormLogin(){
    const router = useRouter()

    const [input, setInput] = useState('');

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        
        const search = input.trim();
        
        if(search === '') return;

        router.push(`repos/${search}`);
    }

    return(
        <form
            className="w-full max-w-96 h-9 flex items-center justify-between gap-4 bg-white px-4 rounded-md"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Entre com o seu usuário do github"
                className="flex-1 outline-none text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name="username"
            />

            <button type="submit">
                <FaGithub/>
            </button>
        </form>
    )
}