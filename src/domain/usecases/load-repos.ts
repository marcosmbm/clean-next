import { RepositoryModel } from "../models";

export interface LoadRepos{
    load: () => Promise<LoadRepos.Model[] | []>;
}

export namespace LoadRepos{
    export type Model = RepositoryModel;
}