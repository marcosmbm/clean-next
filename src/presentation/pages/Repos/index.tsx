import { RepositoryModel } from "@/domain/models"
import { redirect } from "next/navigation"

interface ReposProps{
    repos: RepositoryModel[]
}

export default function Repos({repos}: ReposProps){
    if(repos.length === 0 || !repos){
        return redirect('/');
    }

    return(
        <div>
            <h1>Meus Repositórios</h1>
        </div>
    )
}