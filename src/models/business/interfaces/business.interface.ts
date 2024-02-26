/**
 * Owner variable type declaration.
 *
 * @interface
 */
export interface IBusiness {
  name: string;
  description: string;
  isActive: boolean;
  information: object;
  action: object;
  urlImgLogo: string;
  urlImgBackground: string;
  ownerId: string;
}
