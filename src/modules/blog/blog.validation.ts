import z from 'zod'

const createBlog = z.object({
    title: z.string({required_error:'Title must required'}).trim(),
    description: z.string({required_error:'Title must required'}),
    photo: z.string().optional(),

})


export const blogValidation = {createBlog}

