import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateOwnerDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}
