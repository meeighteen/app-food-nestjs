import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { BusinessDto } from './business.dto';

@InputType()
export class SectionDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => String)
  @IsOptional()
  @IsString()
  businessId: string;
}
