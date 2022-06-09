import { api } from "./api";

export const parentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.mutation({
      query: (id) => ({
        url: `parents/${id}/profile`,
      }),
    }),
    getWallet: build.mutation({
      query: (id) => ({
        url: `parents/${id}/wallet`,
      }),
    }),
    updateWallet: build.mutation({
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
  useGetWalletMutation,
  useUpdateWalletMutation,
} = parentApi;
