import { Entity, Column, ObjectIdColumn } from 'typeorm';
// import { IOwner } from '../interfaces/owner.interface';

/**
 * Entity Schema for Owner.
 *
 * @class
 */
@Entity()
export class Section {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;
}
