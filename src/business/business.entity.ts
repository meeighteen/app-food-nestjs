import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Owner } from '../owner/owner.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  owner: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Owner, (owner) => owner._id)
  ownerId: Owner;
}
