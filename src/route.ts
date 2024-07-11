import { Router } from "express";
import { blogRouter } from "./modules/blog/blog.route";
import { projectRouter } from "./modules/project/project.router";
import { experienceRouter } from "./modules/experience/experience.router";
import { skillRouter } from "./modules/skill/skill.router";

const routerArray = [
    {path: "/blog", element: blogRouter},
    {path: "/project", element: projectRouter},
    {path: "/experience", element:experienceRouter},
    {path: "/skill", element: skillRouter},
]


const router = Router()

routerArray.forEach((ra)=> router.use(ra.path, ra.element))

export const rootRouter = router;