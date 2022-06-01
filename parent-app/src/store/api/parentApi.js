import { api } from "./api";

export const parentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.mutation({
      query: (id) => ({
        url: `parents/${id}/profile`,
      }),
    }),
    getWallet: build.query({
      query: (id) => ({
        url: `parents/${id}/wallet`,
      }),
    }),
    createWallet: build.query({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `parents/${id}/wallet`,
          method: "POST",
          body,
        };
      },
    }),
    updateWallet: build.query({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `parents/${id}/wallet`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileMutation,
  useGetWalletQuery,
  useCreateWallet,
  useUpdateWallet,
} = parentApi;
