import z from 'zod'

const createProject = z.object({
    title: z.string({required_error:'Title must required'}).trim(),
    live_link: z.string({required_error:'Title must required'}),
    front_end: z.string({required_error:'Title must required'}),
    back_end: z.string({required_error:'Title must required'}).optional(),
    description: z.string({required_error:'Title must required'}),
    photo: z.string().optional(),


})


export const projectValidation = {createProject}

