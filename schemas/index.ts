import * as z from "zod"

export const LoginSchema =  z.object({
    email: z.string().email(),
    password: z.string(),
})