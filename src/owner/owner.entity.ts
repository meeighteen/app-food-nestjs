import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Owner {
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
