import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectIdColumn } from 'typeorm';

@ObjectType()
export class Response {
  @Field()
  @ObjectIdColumn()
  message: string;
}
