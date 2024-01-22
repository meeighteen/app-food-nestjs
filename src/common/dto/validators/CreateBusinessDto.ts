import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  ownerId: string;
}
