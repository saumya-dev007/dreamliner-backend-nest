import { ApiProperty } from '@nestjs/swagger';

export class ProjectSignleFetch {
  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  _id: String;
}
