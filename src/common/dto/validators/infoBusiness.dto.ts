import { Field, InputType } from '@nestjs/graphql';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { SectionDto } from './section.dto';

@InputType()
export class infoBusinessDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  colorBg?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  colorFt?: string;

  @Field(() => [SectionDto], { nullable: true })
  @IsOptional()
  @IsObject()
  btns?: SectionDto[];
}
