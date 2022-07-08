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
    updateIban: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `companies/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
    getEvents: build.mutation({
      query: (data) => {
        const { cID, eID } = data;
        return{
          url: `companies/${cID}/events?pageNumber=0&pageSize=10000&employeeId=${eID}`,
          // url: `companies/${cID}/events?pageNumber=0&pageSize=10000&employeeId=${eID}&active=true`,
        }
      },
    }),
    getStatistics: build.mutation({
      query: (data) => {
        const { cID, eID, sD, eD } = data;
        return{
          url: `companies/${cID}/events/${eID}/statistics?startDate=${sD}&endDate=${eD}`,
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileMutation,
  useGetEmployeeMutation,
  useUpdateIbanMutation,
  useGetEventsMutation,
  useGetStatisticsMutation,
} = providerApi;
