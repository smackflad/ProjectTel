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
    getWallet: build.mutation({
      query: (id) =>({
        url: `parents/${id}/wallet`,
      })
    }),
    createOrder: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `parents/${id}/orders`,
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetEventsMutation, useGetEventMutation, useGetWalletMutation, useCreateOrderMutation } = eventApi;
