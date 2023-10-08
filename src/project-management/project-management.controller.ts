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
import { ProjectRecommend } from 'src/entities/project-recommend.entity';
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
          response: { message: error },
        });
    }
  }

  @ApiOperation({ summary: 'Project Find' })
  @Get('/find')
  async findProject(
    @Query() { _id }: ProjectAddEdit,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const data = await this.projectManagementService.findProject(_id);
      reply
        .status(HttpStatus.OK)
        .header('content-type', 'application/json')
        .send({
          status: 'success',
          response: { projectData: data },
        });
    } catch (error) {
      console.log('error', error);
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content_Type', 'application/json')
        .send({
          status: 'error',
          response: { message: error },
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
          response: { message: error },
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
          response: { message: error },
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
          message: 'Staus Updated Successfully',
        });
    } catch (error) {
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('Content-Type', 'application/json')
        .send({
          status: 'error',
          response: { message: error },
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
          response: { message: error },
        });
    }
  }
  // ======================================================= //

  //   ============ Project Listing Count ========= //
  @ApiOperation({ summary: 'Project-Listing-Count' })
  @Post('project-listing-count')
  async ProjectListingCount(
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.projectListingCount(
        {},
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
          response: { message: error },
        });
    }
  }
  // ======================================================= //

  //   ============ Project Listing Count ========= //
  @ApiOperation({ summary: 'Project-recommend' })
  @Post('project-recommend')
  async ProjectRecommend(
    @Body() query: ProjectRecommend,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const response = await this.projectManagementService.recommendProject({
        query,
      });

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
          response: { message: error },
        });
    }
  }
  // ======================================================= //
}
