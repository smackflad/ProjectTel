import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    // initializeParentRegistration: build.mutation({
    //   query: (body) => ({
    //     url: `auth/initializeParentRegistration`,
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // completeParentRegistration: build.mutation({
    //   query: (data) => {
    //     const { id, ...body } = data;
    //     return {
    //       url: `auth/completeParentRegistration/${id}`,
    //       method: "POST",
    //       body,
    //     };
    //   },
    // }),
    // resetPassword: build.mutation({
    //   query: (data) => {
    //     const { id, ...body } = data;
    //     return {
    //       url: `auth/${id}/resetPassword`,
    //       method: "POST",
    //       body,
    //     };
    //   },
    // }),
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
//   useInitializeParentRegistrationMutation,
//   useCompleteParentRegistrationMutation,
//   useResetPasswordMutation,
  useLoginEmployeeMutation,
} = authApi;
