import { Options } from "@/providers/auth_provider"
import NextAuth from "next-auth"

const handler = NextAuth(Options)

export { handler as GET, handler as POST }