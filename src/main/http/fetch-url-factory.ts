import { FetchHttpClient } from "@/infra/http";
import { NextFetchConfig } from "@/infra/models";

export const makeFetchHttpClient = (additionalFetchConfig?: NextFetchConfig): FetchHttpClient => {
    return new FetchHttpClient<NextFetchConfig>(additionalFetchConfig);
}