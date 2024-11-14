/** @packages */
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Expose()
export class StringResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly message: string;

  @ApiProperty()
  readonly data: string;
}
