import { api } from "./api";

export const createUserApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreateUser: build.mutation({
      query: (body) => {
        return {
          url: `http://localhost:3001/api/v1/employee`,
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
} = createUserApi;
