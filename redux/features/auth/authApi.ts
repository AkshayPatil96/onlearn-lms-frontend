import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userRegistration } from "./authSlice";

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            }),
          );
        } catch (error: any) {
          console.log("error: ", error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ activationCode, activationToken }) => ({
        url: "/auth/activate-user",
        method: "POST",
        body: { activationCode, activationToken },
        credentials: "include" as const,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            }),
          );
        } catch (error: any) {
          console.log("error: ", error);
        }
      },
    }),
  }),

  // @ts-ignore
  overrideExisting: true,
});

export const { useRegisterMutation, useActivationMutation, useLoginMutation } =
  authApi;
