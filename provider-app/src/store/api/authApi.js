import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    registerCompany: build.mutation({
      query: (body) => ({
        url: `auth/registerCompany`,
        method: "POST",
        body,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `auth/${id}/resetPassword`,
          method: "POST",
          body,
        };
      },
    }),
    loginEmployee: build.mutation({
      query: (body) => ({
        url: `auth/loginEmployee`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterCompanyMutation,
  useResetPasswordMutation,
  useLoginEmployeeMutation,
} = authApi;
