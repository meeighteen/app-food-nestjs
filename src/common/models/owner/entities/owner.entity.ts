import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { IOwner } from '../interfaces/owner.interface';

/**
 * Entity Schema for Owner.
 *
 * @class
 */
@Entity()
export class Owner implements IOwner {
  @ObjectIdColumn()
  _id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
