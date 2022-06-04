import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/",
    prepareHeaders(headers) {
      // headers.set(
      //   "Access-Control-Allow-Origin",
      //   "http://localhost:3001/api/v1/"
      // );
      // headers.append(
      //   "Access-Control-Allow-Origin",
      //   "http://localhost:3001/api/v1/"
      // );
      return headers;
    },
    // credentials: "omit",
  }),
  reducerPath: "serverApi",
  endpoints: () => ({}),
});

export const { useInitializeParentRegistrationQuery } = api;
