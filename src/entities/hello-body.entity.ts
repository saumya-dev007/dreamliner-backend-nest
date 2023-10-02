import { ApiProperty } from "@nestjs/swagger";


export class HelloBody {
    @ApiProperty({ example: "test", description: "First Body parameter", required: true })
    name: string

    @ApiProperty({ example: 12, description: "Second Body parameter", required: true })
    age: number
}