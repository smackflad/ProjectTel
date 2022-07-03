import { api } from "./api";

export const providerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.mutation({
      query: (id) => ({
        url: `companies/${id}`,
      }),
    }),
    getEmployee: build.mutation({
      query: (id) => ({
        url: `employee/${id}`,
      }),
    }),
    // getWallet: build.mutation({
    //   query: (id) => ({
    //     url: `parents/${id}/wallet`,
    //   }),
    // }),
    // updateWallet: build.mutation({
    //   query: (data) => {
    //     const { id, ...body } = data;
    //     return {
    //       url: `parents/${id}/wallet`,
    //       method: "PATCH",
    //       body,
    //     };
    //   },
    // }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileMutation,
  useGetEmployeeMutation,
} = providerApi;
