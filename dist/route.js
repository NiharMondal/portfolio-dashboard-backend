"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = require("express");
const blog_route_1 = require("./modules/blog/blog.route");
const project_router_1 = require("./modules/project/project.router");
const experience_router_1 = require("./modules/experience/experience.router");
const skill_router_1 = require("./modules/skill/skill.router");
const routerArray = [
    { path: "/blog", element: blog_route_1.blogRouter },
    { path: "/project", element: project_router_1.projectRouter },
    { path: "/experience", element: experience_router_1.experienceRouter },
    { path: "/skill", element: skill_router_1.skillRouter },
];
const router = (0, express_1.Router)();
routerArray.forEach((ra) => router.use(ra.path, ra.element));
exports.rootRouter = router;
