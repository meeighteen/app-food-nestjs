import { Field, InputType,ObjectType } from '@nestjs/graphql';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsArray,
  IsOptional,
} from 'class-validator';
import { BusinessDto } from './business.dto';

@InputType()
export class OwnerDto {
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

  @Field(() => [BusinessDto], { nullable: true })
  @IsOptional()
  @IsArray()
  businesses: BusinessDto[];
}
