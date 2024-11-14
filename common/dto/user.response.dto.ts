/** @packages */
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/** @application */
import { User } from '../../src/database/entities/User';

@Expose()
export class UserResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly message: string;

  @ApiProperty()
  readonly data: User;
}
