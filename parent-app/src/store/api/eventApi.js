import { api } from "./api";

export const eventApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.mutation({
      query: (body) => ({
        url: `search`,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetEventsMutation } = eventApi;
