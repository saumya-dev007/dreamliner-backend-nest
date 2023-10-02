import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginBody } from 'src/entities/login-body.entity';
import { FastifyReply, FastifyRequest } from 'fastify';


@ApiTags('Login')
@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){}

    @ApiOperation({summary:'Login'})
    @Post('')
    async login(@Body() body:LoginBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply ){
        try {
            const response = await this.loginService.login(body)
            reply
            .status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                'status': 'success',
                'response': response
            })
        } catch (error) {
            reply
            .status(HttpStatus.OK)
            .header('Content-Type', 'application/json')
            .send({
                "status": "error",
                "message": error.message
            })
        }
    }
}
