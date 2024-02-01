import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ISection } from '../interfaces/section.interface';
// import { IOwner } from '../interfaces/owner.interface';

/**
 * Entity Schema for Owner.
 *
 * @class
 */
@ObjectType()
@Entity()
export class Section implements ISection {
  @Field()
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  businessId: string;

  @Field()
  @Column({ default: true })
  isActive: boolean;
}
