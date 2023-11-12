import {Injectable, UnauthorizedException} from '@nestjs/common';
import { retrievePrismaClient } from "../utils";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

@Injectable()
export class UserService {
    async login(email: string, password: string) {
        const prismaClient = retrievePrismaClient()

        const user = await prismaClient.user.findUnique({
            where: {
                email
            },
        })

        if(!user){
            throw new UnauthorizedException()
        }

        const result = await bcrypt.compare(password, user.password)

        if(result) {
            return jwt.sign({
                  email,
                    sub: user.id
                },
                process.env.JWT_KEY,
                {expiresIn: '1h'}
            )
        }

        throw new UnauthorizedException()
    }
}
