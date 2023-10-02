import { Body, Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FastifyReply, FastifyRequest } from 'fastify';
import { HelloBody } from 'src/entities/hello-body.entity';
import { ProjectManagementService } from './project-management.service';

@ApiTags('Project Management')
@Controller('project-management')
export class ProjectManagementController {

    constructor(private projectManagementService: ProjectManagementService) { }

    @ApiOperation({ summary: 'Hello First' })
    @Get('myFirstService')
    async hello(@Query() query: HelloBody , @Req() request: FastifyRequest,  @Res() reply: FastifyReply) {
        try {
            const response = await this.projectManagementService.myFirstService(query)
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': "success",
                    'response': response
                })
            
        } catch (error) {
            reply
                .status(HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': "error"
                })
        }
        
    }


    @ApiOperation({ summary: 'Hello First1' })
    @Post('hello2')
    async hello2(@Body() query: HelloBody , @Req() request: FastifyRequest,@Res() reply: FastifyReply) {
        try {

            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': "success"
                })
            
        } catch (error) {
            reply
                .status(HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': "error"
                })
        }
    }
}
