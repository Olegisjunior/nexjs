import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const users = [
  {
    name: "ivan",
    email: "ivan@gmail.com",
    password: "123123123",
  },
  {
    name: "oleg",
    email: "oleg@gmail.com",
    password: "123123123",
  },
  {
    name: "petro",
    email: "petro@gmail.com",
    password: "123123123",
  },
];

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const currentUsers = users.find((user) => user.email === credentials.email);

        if (currentUsers && currentUsers.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUsers;

          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
