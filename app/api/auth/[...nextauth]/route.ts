import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// In a real app, you would get these from environment variables
const googleClientId = process.env.GOOGLE_CLIENT_ID || "google-client-id"
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "google-client-secret"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // You can customize the session object here
      return session
    },
    async jwt({ token, user, account, profile }) {
      // You can customize the token here
      return token
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/error",
  },
})

export { handler as GET, handler as POST }
