import { Body, Controller, Get, HttpStatus, Param, Post, Query, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ArtistBody } from 'src/entities/artist-body.entity';
import { ArtistService } from './artist.service';


@ApiTags("Artists")
@Controller('artist')
export class ArtistController {
    constructor(private artistService:ArtistService ){}

    @ApiOperation({summary:'Add Artist'})
    @Post("/list")
    async artistList(@Body() body:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.artistListing(body);
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


    @ApiOperation({summary:'Add Artist'})
    @Post("/count")
    async artistcount(@Body() body:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.artistListingCount(body);
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

    @ApiOperation({summary:'Add Artist'})
    @Post("/add")
    async addArtist(@Body() body:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            const data = await this.artistService.addArtist(body);
            reply.status(HttpStatus.OK)
            .header('content-type', 'application/json')
            .send({
                "status": "success",
                "response":{"artistData": data, message:"Added Successfully"}
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
    async findArtist(@Query() {_id}:ArtistBody, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
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

    @ApiOperation({summary:'Artist Autocomplete'})
    @Get("/auto-complete")
    async autocompleteArtist(@Query('name') name: string, @Req() request:FastifyRequest, @Res() reply:FastifyReply){
        try {
            console.log('name', name)
            const data = await this.artistService.autocompleteArtist(name);
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
                "response":{"artistData": data,message:"Updated Successfully"}
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
