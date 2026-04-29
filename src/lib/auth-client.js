import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://pixen-phi.vercel.app",
})