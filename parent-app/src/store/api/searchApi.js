import { api } from "./api";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchEvents: build.query({
      query: (body) => ({
        url: `search/`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSearchEvents } = searchApi;
