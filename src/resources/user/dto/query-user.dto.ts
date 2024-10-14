import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class QueryUser {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({
    description: 'Query param to limit response. Default limit is 10',
  })
  count?: string;
}
