import { Entity, Column, ObjectIdColumn } from 'typeorm';
// import { Owner } from '../../owner/entities/owner.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IBusiness } from '../interfaces/business.interface';
import { detailsBusiness } from './detailsBusiness.entity';

@ObjectType()
@Entity()
export class Business implements IBusiness {
  @Field(() => String)
  @ObjectIdColumn()
  _id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column()
  urlImgLogo: string;

  @Field(() => String, { nullable: true })
  @Column()
  urlImgBackground: string;

  @Field(() => Boolean)
  @Column({ default: true })
  isActive: boolean;

  @Field(() => detailsBusiness, { nullable: true })
  @Column()
  information: detailsBusiness;

  @Field(() => detailsBusiness, { nullable: true })
  @Column()
  action: detailsBusiness;

  @Field(() => String)
  @Column()
  ownerId: string;

  /**
   * Associations
   */

  // @Field(() => Owner)
  // @ManyToOne(() => Owner, (owner) => owner.businesses, {
  //   createForeignKeyConstraints: true,
  //   nullable: true,
  // })
  // @JoinColumn({ name: 'ownerId' })
  // owner: Owner;
}
