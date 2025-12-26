import z, { email } from "zod";

export const userValidation=z.object({
    username:z.string().min(3),
    userEmail:z.string().email(),
    password:z.string().min(4)
})


