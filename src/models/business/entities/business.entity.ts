import { Entity, Column, ObjectIdColumn, OneToOne } from 'typeorm';
import { Owner } from '../../owner/entities/owner.entity';

@Entity()
export class Business {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Owner, (owner) => owner._id)
  ownerId: string;
}
