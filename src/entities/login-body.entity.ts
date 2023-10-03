import { ApiProperty } from '@nestjs/swagger';

export class LoginBody {

  @ApiProperty({
    example: '6516cb8c0d2ed5a21f8387e5',
    description: 'ID Parameter for Logout',
  })
  _id: any;

  @ApiProperty({
    example: 'ite@yopmail.com',
    description: 'Email Parameter',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'I@te123',
    description: 'Password Parameter',
    required: true,
  })
  password: string;

  @ApiProperty({
    example: {
      browser: 'Chrome',
      city: 'Kolkata',
      country: 'IN',
      ip: '43.231.242.73',
      loc: '22.5626,88.3630',
      org: 'AS45775 WISH NET PRIVATE LIMITED',
      postal: '700006',
      region: 'West Bengal',
      timezone: 'Asia/Kolkata',
    },
    description: 'IP Details',
    // required: true,
  })
  ipInfo: any;
}
