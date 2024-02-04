import { makeRemoteLoadRepos } from "@/main/usecases";
import Repos from "@/presentation/pages/Repos";
import { ReposProps } from "./types";

export async function ReposFactory({username}: ReposProps){
    async function getData(){
        try {
            const data = await makeRemoteLoadRepos(username).load();
            return data
        } 
        catch (error) {
            throw error 
        }
    }

    const repos = await getData();

    return <Repos repos={repos}/>
}