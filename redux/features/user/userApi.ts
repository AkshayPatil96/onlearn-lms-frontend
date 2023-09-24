import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: ({ avatar }) => ({
        url: `/user/update-avatar`,
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),

    updateProfile: builder.mutation({
      query: ({ name, email }) => ({
        url: `/user/update`,
        method: "PUT",
        body: { name, email },
        credentials: "include" as const,
      }),
    }),

    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: `/user/update-password`,
        method: "PUT",
        body: { oldPassword, newPassword },
        credentials: "include" as const,
      }),
    }),
  }),

  // @ts-ignore
  overrideExisting: true,
});

export const {
  useUpdateAvatarMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = userApi;
