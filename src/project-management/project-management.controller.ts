import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FastifyReply, FastifyRequest } from 'fastify';
import { async } from 'rxjs';
import { HelloBody } from 'src/entities/hello-body.entity';
import { ProjectAddEdit } from 'src/entities/project-addedit.entity';
import { ProjectSignleFetch } from 'src/entities/project-single-fetch.entity';
import { ProjectStatusChnage } from 'src/entities/project-status-chnage.entity';
import { ProjectManagementService } from './project-management.service';

@ApiTags('Project Management')
@Controller('project-management')
export class ProjectManagementController {
  constructor(private projectManagementService: ProjectManagementService) {}

  @ApiOperation({ summary: 'Hello First' })
  @Get('myFirstService')
  async hello(
    @Query() query: HelloBody,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.myFirstService(
        query,
      );
      reply
        .status(HttpStatus.OK)
        .header('Content-Type', 'application/json')
        .send({
          status: 'success',
          response: response,
        });
    } catch (error) {
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
        });
    }
  }

  // ========= Project AddEdit ======== //
  @ApiOperation({ summary: 'project-add-edit' })
  @Post('addedit')
  async productAddEdit(
    @Body() query: ProjectAddEdit,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.projectAddEdit(
        query,
      );

      reply
        .status(HttpStatus.OK)
        .header('Content-Type', 'application/json')
        .send({
          status: 'success',
          response: response,
        });
    } catch (error) {
      console.log(error);

      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
        });
    }
  }
  // ================================== //

  // ============= Project Listing ============== //
  @ApiOperation({ summary: 'project-listing' })
  @Post('project-listing')
  async projectListing(
    // @Body() query: ProjectStatusChnage,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.projectListing({});
      reply
        .status(HttpStatus.OK)
        .header('Content-Type', 'application/json')
        .send({
          status: 'success',
          response: response,
        });
    } catch (error) {
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
        });
    }
  }
  // =================================================== //

  // =========== Project Status Change ======== //
  @ApiOperation({ summary: 'project-status-chnage' })
  @Post('status-change')
  async statusChange(
    @Body() query: ProjectStatusChnage,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.projectStatusChange(
        query,
      );

      reply
        .status(HttpStatus.OK)
        .header('Content-Type', 'application/json')
        .send({
          status: 'success',
          response: response,
        });
    } catch (error) {
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
        });
    }
  }

  //========================================== //

  //   ============ Project Single fetch details ========= //

  @ApiOperation({ summary: 'Project-single-fetch' })
  @Post('project-single-fetch')
  async ProjectSingleFetch(
    @Body() query: ProjectSignleFetch,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.projectSingleFetch(
        query,
      );

      reply
        .status(HttpStatus.OK)
        .header('Content-Type', 'application/json')
        .send({
          status: 'success',
          response: response,
        });
    } catch (error) {
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
        });
    }
  }
}
