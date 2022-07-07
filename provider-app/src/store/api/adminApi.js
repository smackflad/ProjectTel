import { api } from "./api";

export const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateActive: build.mutation({
      query: (data) => {
        const { eventID, ...body } = data;
        return {
          url: `companies/pp/events/${eventID}`,
          method: "PATCH",
          body,
        };
      },
    }),
    deleteEvent: build.mutation({
      query: (data) => {
        const { eventID } = data;
        return{
          url: `companies/pp/events/${eventID}`,
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
