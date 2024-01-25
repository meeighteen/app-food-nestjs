import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { IOwner } from '../interfaces/owner.interface';
import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Entity Schema for Owner.
 *
 * @class
 */
@ObjectType()
@Entity()
export class Owner implements IOwner {
  @Field()
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({
    unique: true,
  })
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column({ default: true })
  isActive: boolean;
}
