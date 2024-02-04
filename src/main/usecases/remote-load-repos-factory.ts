import { RemoteLoadRepos } from "@/data/usecases/remote-load-repos";
import { LoadRepos } from "@/domain/usecases";
import { makeApiUrl, makeFetchHttpClient } from "../http";

export const makeRemoteLoadRepos = (username: string): LoadRepos => {
    return new RemoteLoadRepos(
        makeApiUrl(username),
        makeFetchHttpClient({
            next:{
                revalidate: 30
            }
        })
    );
}