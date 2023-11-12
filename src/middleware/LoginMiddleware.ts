import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken')

@Injectable()
export class LoginMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, process.env.JWT_KEY)

            next();
        } catch (e) {
            throw new UnauthorizedException()
        }
    }
}
