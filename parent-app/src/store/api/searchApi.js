import { serverApi } from "./searchApi";

export const searchApi = serverApi.injectEndpoints({
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
