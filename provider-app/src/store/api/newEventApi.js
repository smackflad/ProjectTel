import { api } from "./api";

export const newEventApi = api.injectEndpoints({
  endpoints: (build) => ({
    newEventCompany: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `companies/${id}/events`,
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useNewEventCompanyMutation,
} = newEventApi;
