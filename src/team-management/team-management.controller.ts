import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { TeamManagementService } from './team-management.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TeamBody } from 'src/entities/team-body.entity';
import { FastifyReply, FastifyRequest } from 'fastify';

@ApiTags('Team Management')
@Controller('team-management')
export class TeamManagementController {
  constructor(private teamService: TeamManagementService) {}

  @ApiOperation({ summary: 'Add Team Memeber' })
  @Post('/add')
  async addTeam(
    @Body() body: TeamBody,
    @Req() requist: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const data = await this.teamService.addTeam(body);
      reply
        .status(HttpStatus.OK)
        .header('content-type', 'application/json')
        .send({
          status: 'success',
          response: { teamData: data },
        });
    } catch (error) {
      console.log('error', error);
      reply
        .status(HttpStatus.BAD_REQUEST)
        .header('content-type', 'application/json')
        .send({
          status: 'error',
          response: { message: error },
        });
    }
  }

  @ApiOperation({ summary: 'Update Team' })
  @Post('/update')
  async updateTeam(
    @Body() { _id, ...field }: TeamBody,
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const data = await this.teamService.updateTeam(_id, field);
      reply
        .status(HttpStatus.OK)
        .header('content-type', 'application/json')
        .send({
          status: 'success',
          response: { teamData: data },
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

  @ApiOperation({ summary: 'Team Listing' })
  @Post('/listing')
  async teamListing(
    @Req() request: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    try {
      const data = await this.teamService.fetchTeamLisitng({});
      reply
        .status(HttpStatus.OK)
        .header('content-type', 'application/json')
        .send({
          status: 'success',
          response: { teamData: data },
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
}
