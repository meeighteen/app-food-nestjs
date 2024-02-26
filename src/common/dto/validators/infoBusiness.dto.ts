import { Field, InputType } from '@nestjs/graphql';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { SectionDto } from './section.dto';

@InputType()
export class infoBusinessDto {
  @Field()
  @IsOptional()
  @IsString()
  colorBg?: string;

  @Field()
  @IsOptional()
  @IsString()
  colorFt?: string;

  @Field()
  @IsOptional()
  @IsObject()
  btns?: SectionDto;
}
