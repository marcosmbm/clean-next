import Link from "next/link";

export default function NotFound(){
    return(
        <div className="w-full h-screen bg-zinc-900 flex flex-col gap-5 items-center justify-center">
            <h1 className="text-white text-5xl">
                404
            </h1>

            <h2 className="text-white text-xl">
                Ops, parece que você está tentando acessar uma página que não existe
            </h2>

            <Link 
                href={'/'} 
                className="px-4 bg-white rounded-md hover:scale-105 transition-transform duration-300"
            >
                Voltar para a página de busca
            </Link>
        </div>
    )
}