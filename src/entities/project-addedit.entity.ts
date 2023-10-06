import { ApiProperty } from '@nestjs/swagger';

export class ProjectAddEdit {

  @ApiProperty({
    example: 'id',
    description: 'ID parameter for Edit',
    // required: true,
  })
  _id: any;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  project_name: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  trailer_link: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  hoichoi_link: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  zee5_link: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  directors_name: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  producers_name: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  writter_name: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  music_director_name: String;

  @ApiProperty({
    example: 123,
    description: 'First Body parameter',
    required: true,
  })
  release_date: Number;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  actors: Array<String>;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  description: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  associate_partners: Array<String>;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  press_release: Array<String>;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  project_poster_hr: String;

  @ApiProperty({
    example: 'test',
    description: 'First Body parameter',
    required: true,
  })
  project_poster_vertical: String;

  @ApiProperty({
    example: true,
    description: '',
    required: true,
  })
  status: Boolean;
}
