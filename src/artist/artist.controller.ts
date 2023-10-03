import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ArtistBody } from 'src/entities/artist-body.entity';
import { ArtistService } from './artist.service';


@ApiTags("Artists")
@Controller('artist')
export class ArtistController {
    constructor(private artistService:ArtistService ){}

    @ApiOperation({summary:'Add Artist'})
    @Post("/add")
    async addArtist(@Body() body:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.addArtist(body);
            reply.status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                "status": "success",
                "response":{"artistData": data}
            })
        } catch (error) {
            console.log('error', error);
            reply
            .status(HttpStatus.BAD_REQUEST)
            .header('Content_Type','application/json')
            .send({
                'status':'error',
                "response":{"message": error}
            })
        }
    };

    @ApiOperation({summary:'Artist Find'})
    @Get("/find")
    async findArtist(@Body() {_id}:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.findArtist(_id);
            reply.status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                "status": "success",
                "response":{"artistData": data}
            })
        } catch (error) {
            console.log('error', error);
            reply
            .status(HttpStatus.BAD_REQUEST)
            .header('Content_Type','application/json')
            .send({
                'status':'error',
                "response":{"message": error}
            })
        }
    };


    @ApiOperation({summary:'Update Artist'})
    @Post("/update")
    async updateArtist(@Body() {_id,...field}:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.updateArtist(_id,field);
            reply.status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                "status": "success",
                "response":{"artistData": data}
            })
        } catch (error) {
            console.log('error', error);
            reply
            .status(HttpStatus.BAD_REQUEST)
            .header('Content_Type','application/json')
            .send({
                'status':'error',
                "response":{"message": error}
            })
        }
    }
}
