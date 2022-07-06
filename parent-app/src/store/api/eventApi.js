import { api } from "./api";

export const eventApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.mutation({
      query: (body) => ({
        url: `search/`,
        body,
      }),
    }),
    getEvent: build.mutation({
      query: (id) => ({
        url: `companies/123/events/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetEventsMutation, useGetEventMutation } = eventApi;
