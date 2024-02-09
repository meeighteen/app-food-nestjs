import {
  Entity,
  Column,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IOwner } from '../interfaces/owner.interface';
import { Field, ObjectType } from '@nestjs/graphql';
import { Business } from 'src/models/business/entities/business.entity';
import { IsOptional } from 'class-validator';

@ObjectType()
@Entity()
export class Owner implements IOwner {
  @Field(() => String)
  @ObjectIdColumn()
  _id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column({
    unique: true,
  })
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => Boolean)
  @Column({ default: true })
  isActive: boolean;

  @Field(() => [Business])
  @OneToMany(() => Business, (business) => business.owner)
  // @JoinColumn()
  @IsOptional()
  businesses: Business[];
}
