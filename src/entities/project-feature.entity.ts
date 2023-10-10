import { ApiProperty } from "@nestjs/swagger";

export class ProjectFeature{

    @ApiProperty({
    example: 'test',
    description: 'Body parameter',
    required: true,
  })
  _id: String;

@ApiProperty({
    example: true,
    description: '',
    required: true,
  })
  featured: Boolean;
}