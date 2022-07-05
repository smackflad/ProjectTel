import { api } from "./api";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.mutation({
      query: (body) => ({
        url: `search/`,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchMutation } = searchApi;
