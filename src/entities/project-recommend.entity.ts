import { ApiProperty } from '@nestjs/swagger';

export class ProjectRecommend {
  @ApiProperty({
    example: '651ef401e19db24aef67c106',
    description: 'First Body parameter',
    required: true,
  })
  _id: String;
}
