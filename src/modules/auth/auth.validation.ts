import z from 'zod'

const adminCredentials = z.object({
    email: z.string({required_error:'Email must required'}).email({message:"Must be a valid email"}).trim(),
    password: z.string({required_error:'Password must required'})

})


export const authValidation = {adminCredentials}