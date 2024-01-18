import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Owner {
  @Prop()
  names: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  businessID: string;

  @Prop()
  active: boolean;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
