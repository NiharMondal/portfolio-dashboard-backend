import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import CustomError from "../utils/customError";
import { config } from "../config";
import prisma from "../lib/db";



const authGaurd = (...roles: string[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const token = req.headers.authorization;

			if (!token) {
				throw new CustomError(401, "You are not authorized");
			}

			const decoded = jwt.verify(
				token,
				config.jwt_secret as string
			) as JwtPayload;
			const { id, role } = decoded;
			const user = await prisma.user.findUnique({
				where: {
					id: id,
                    role: role
				},
			});
			if (!user) {
				throw new CustomError(401, "This user is not found!");
			}

			if (token && !roles.includes(role)) {
				throw new CustomError(401, "You are not authorized");
			}

			req.user = decoded as JwtPayload;

			next();
		} catch (error) {
			next(error);
		}
	};
};
export default authGaurd;