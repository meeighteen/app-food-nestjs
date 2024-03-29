import { EntitySchema } from 'typeorm';
import { Owner } from '../../../models/owner/entities/owner.entity';

export const OwnerSchema = new EntitySchema<Owner>({
  name: 'Owner',
  target: Owner,
  columns: {
    _id: {
      type: String,
      primary: true,
      // generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
});
