import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74ae3ed4a6msh69a9cb4a83dfd13p1efbdfjsn85dbb0f0852f",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch("https://shazam.p.rapidapi.com/charts/track", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "74ae3ed4a6msh69a9cb4a83dfd13p1efbdfjsn85dbb0f0852f"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrackCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetTrackChartsQuery } = shazamCoreApi;
