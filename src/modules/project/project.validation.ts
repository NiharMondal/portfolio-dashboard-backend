import z from 'zod'

const createProject = z.object({
    title: z.string({required_error:'Title must required'}).trim(),
    photo: z.string({message:"Photo url is required"}).url({message:"Must be a valid url"}),
    liveLink: z.string({required_error:'Live link must required'}),
    gitHubLink: z.string({required_error:'GitHub link must required'}),
    description: z.string({required_error:'Description must required'}),
    techtechnologies: z.string().array()

})


export const projectValidation = {createProject}

