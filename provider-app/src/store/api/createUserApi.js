import { api } from "./api";

export const createUserApi = api.injectEndpoints({
  createUser: (build) => ({
    userCreationMutation: build.mutation({
      query: (data) => {
        return {
          url: `http://localhost:3001/api/v1/employee`,
          method: "POST",
          data,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
} = createUserApi;
