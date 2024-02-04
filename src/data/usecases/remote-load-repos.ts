import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { LoadRepos } from "@/domain/usecases";
import { RemoteRepository } from "../models";
import { HttpClient, HttpStatusCode } from "../protocols";

export class RemoteLoadRepos implements LoadRepos{
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLoadRepos.Model>,
    ){}

    async load(): Promise<LoadRepos.Model[]>{
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        });

        const response = httpResponse.body || [];

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return response;
            default:
                throw new UnexpectedError();
        }
    }
}

export namespace RemoteLoadRepos {
    export type Model = RemoteRepository[];
}