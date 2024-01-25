import { Column, ObjectIdColumn } from 'typeorm';

export class Menu {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;
}
