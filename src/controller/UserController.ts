import {Body, Controller, Post} from '@nestjs/common';
import { UserService } from '../service/UserService';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/auth/login')
    login(@Body('email') email: string, @Body('password') password: string) {
        return this.userService.login(email, password);
    }

}
