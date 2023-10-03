import { ApiProperty } from "@nestjs/swagger";

export class ArtistBody {
    @ApiProperty({
        example:"artist id",
        description:"Artist ID for Edit",
    })
    _id:any;

    @ApiProperty({
        example:"artist name",
        description:"Artist Name",
        required: true
    })
    name:string;

    @ApiProperty({
        example:"male",
        description:"Artist Gender",
        required: true
    })
    gender:string;

    @ApiProperty({
        example:"https://picsum.photos/200",
        description:"Artist Image",
        required: true
    })
    image:string;
}