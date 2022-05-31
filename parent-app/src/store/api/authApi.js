import { serverApi } from "./searchApi";

export const authApi = serverApi.injectEndpoints({
  endpoints: (build) => ({
    initializeParentRegistration: build.query({
      query: (body) => ({
        url: `auth/initializeParentRegistration`,
        method: "POST",
        body,
      }),
    }),
    completeParentRegistration: build.query({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `auth/completeParentRegistration/${id}`,
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useInitializeParentRegistration,
  useCompleteParentRegistration,
} = authApi;
