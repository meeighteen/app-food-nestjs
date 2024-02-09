import { Entity, Column, ObjectIdColumn, ManyToOne } from 'typeorm';
import { Owner } from '../../owner/entities/owner.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Business {
  @Field(() => String)
  @ObjectIdColumn()
  _id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Boolean)
  @Column({ default: true })
  isActive: boolean;

  @Field(() => Owner)
  @ManyToOne(() => Owner, (owner) => owner.businesses)
  owner: Owner;
}
