import { ApiProperty } from '@nestjs/swagger';

export class ProjectStatusChnage {
  @ApiProperty({
    example: 'test',
    description: 'Body parameter',
    required: true,
  })
  project_id: String;

  @ApiProperty({ example: true, description: 'Body parameter' })
  status: Boolean;

  @ApiProperty({
    example: true,
    description: ''
  })
  featured: Boolean;
}
