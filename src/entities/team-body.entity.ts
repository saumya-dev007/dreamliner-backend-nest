import { ApiProperty } from "@nestjs/swagger";

export class TeamBody{
    @ApiProperty({
        example:"team user id",
        description:"Team User ID for Edit"
    })
    _id:any;


    @ApiProperty({
        example:"teamuser name",
        description:"Team User Name",
        required:true
    })
    name:string;


    @ApiProperty({
        example:"director",
        description:"Designation",
        required:true
    })
    designation:string;


    @ApiProperty({
        example:"https://picsum.photos/200",
        description:"Team User Image",
        // required: true
    })
    image:string;
}