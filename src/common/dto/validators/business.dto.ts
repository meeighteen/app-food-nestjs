import { Field, InputType } from '@nestjs/graphql';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { infoBusinessDto } from './infoBusiness.dto';

@InputType()
export class BusinessDto {
  @Field(() => String, { nullable: false })
  @IsString()
  businessId: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  urlImgLogo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  urlImgBackground?: string;

  @Field(() => infoBusinessDto, { nullable: true })
  @IsOptional()
  @IsObject()
  action?: infoBusinessDto;

  @Field(() => infoBusinessDto, { nullable: true })
  @IsOptional()
  @IsObject()
  information?: infoBusinessDto;
}
