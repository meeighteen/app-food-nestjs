import { Module } from '@nestjs/common';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerSchema } from './schemas/owner.schema';
// import { OwnerSchema } from './schemas/owner.schema';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerSchema])],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
