import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Github from "next-auth/providers/github"
// Adapters provide a way for Next
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google,Facebook, Github]
})