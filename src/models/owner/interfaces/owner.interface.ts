import { Business } from 'src/models/business/entities/business.entity';

/**
 * Owner variable type declaration.
 *
 * @interface
 */
export interface IOwner {
  // _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  businesses: Business[];
}
