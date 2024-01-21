import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
