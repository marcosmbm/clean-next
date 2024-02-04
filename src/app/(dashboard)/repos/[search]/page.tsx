import { ReposFactory } from "@/main/pages/Repos/repos-factory"

interface ReposUserProps{
    params: {
        search: string
    }
}

export default function ReposUser({params}: ReposUserProps){
    return <ReposFactory username={params.search}/>
}