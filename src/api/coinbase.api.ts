import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const coinbaseApi = createApi({
  reducerPath: "coinbaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/coinbase",
  }),
  endpoints: (build) => ({
    getPrimaryAccountTransactions: build.query<any, undefined>({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useGetPrimaryAccountTransactionsQuery } = coinbaseApi;
