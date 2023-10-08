import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginBody } from 'src/entities/login-body.entity';
import { FastifyReply, FastifyRequest } from 'fastify';


@ApiTags('Login')
@Controller('')
export class LoginController {
    constructor(private loginService: LoginService){}

    @ApiOperation({summary:'Login'})
    @Post('login')
    async login(@Body() {email, password, ipInfo }:LoginBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply ){
        try {
            const userFound = await this.loginService.findByEmail(email, password);
            const response = await this.loginService.login({...userFound,ipInfo:ipInfo});
            reply
            .status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                'status': 'success',
                'response': {'userData':response, message:"Login Successfully"}
            })
        } catch (error) {
            console.log('error', error)
            reply
            .status(HttpStatus.BAD_REQUEST)
            .header('Content-Type', 'application/json')
            .send({
                "status": "error",
                "response":{"message": error}
            })
        }
    }

    @ApiOperation({summary:'Login'})
    @Post('logout')
    async logout(@Body() {_id }:LoginBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply ){
        try {
            const response = await this.loginService.logout(_id);
            reply
            .status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                'status': 'success',
                'response': {'message':response}
            })
        } catch (error) {
            console.log('error', error)
            reply
            .status(HttpStatus.BAD_REQUEST)
            .header('Content-Type', 'application/json')
            .send({
                "status": "error",
                "response":{"message": error}
            })
        }
    }
}
