import { api } from "./api";

export const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateActive: build.mutation({
      query: (data) => {
        const { userID, companyID, ...body } = data;
        return {
          url: `companies/${companyID}/events/${userID}`,
          method: "PATCH",
          body,
        };
      },
    }),
    deleteEvent: build.mutation({
      query: (data) => {
        const { userID, companyID } = data;
        return{
          url: `companies/${companyID}/events/${userID}`,
          method: "DELETE"
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useUpdateActiveMutation,
  useDeleteEventMutation,
} = adminApi;
