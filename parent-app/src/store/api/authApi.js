import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    initializeParentRegistration: build.mutation({
      query: (body) => ({
        url: `auth/initializeParentRegistration`,
        method: "POST",
        body,
      }),
    }),
    completeParentRegistration: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `auth/completeParentRegistration/${id}`,
          method: "POST",
          body,
        };
      },
    }),
    loginParent: build.mutation({
      query: (body) => ({
        url: `auth/loginParent`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useInitializeParentRegistrationMutation,
  useCompleteParentRegistrationMutation,
  useLoginParentMutation,
} = authApi;
