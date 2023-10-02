import { ApiProperty } from "@nestjs/swagger";

export class LoginBody{
    @ApiProperty({example:"ite@yopmail.com",description:"Email Parameter",required:true})
    email:string;

    @ApiProperty({example:"I@te123",description:"Password Parameter",required:true})
    password:string;
}