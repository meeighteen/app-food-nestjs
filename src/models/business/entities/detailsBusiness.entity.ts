import { Entity, Column } from 'typeorm';
// import { Owner } from '../../owner/entities/owner.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IDetailsBusiness } from '../interfaces/infoBusiness.interface';
import { Section } from 'src/models/section/entities/section.entity';

@ObjectType()
@Entity()
export class detailsBusiness implements IDetailsBusiness {
  @Field(() => String)
  @Column()
  colorBg: string;

  @Field(() => String)
  @Column()
  colorFt: string;

  @Field(() => [Section])
  @Column()
  btns: Section[];
}
