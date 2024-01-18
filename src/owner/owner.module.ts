import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { OwnerSchema } from './schemas/owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Owner', schema: OwnerSchema }]),
  ],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
