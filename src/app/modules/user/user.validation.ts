import { z } from "zod";
const userValidationSchema = z.object({
    // id: z.string(),
    password: z.string({ invalid_type_error: 'PASSWORD MUST BE STRING' }).max(20, { message: 'password can not be more than 20 characters' }).optional(),

})

export const UserValidation = {
    userValidationSchema
}