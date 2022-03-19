import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserRequest } from "../dto/create-user-request.dto";
import { User } from "../models/User";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/users",
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: "/",
        method: "Post",
        body: createUserRequest,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = usersApi;
