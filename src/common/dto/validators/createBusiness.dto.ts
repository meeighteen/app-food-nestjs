import { Field, InputType } from '@nestjs/graphql';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { infoBusinessDto } from './infoBusiness.dto';
// import { OwnerDto } from './owner.dto';

@InputType()
export class CreateBusinessDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  @IsOptional()
  description: string;

  @Field()
  @IsString()
  @IsOptional()
  urlImgLogo: string;

  @Field()
  @IsString()
  @IsOptional()
  urlImgBackground: string;

  // @Field()
  // @IsObject()
  // @IsOptional()
  // action?: infoBusinessDto;

  // @Field()
  // @IsObject()
  // @IsOptional()
  // information?: infoBusinessDto;

  @Field()
  @IsString()
  @IsOptional()
  ownerId: string;
}
