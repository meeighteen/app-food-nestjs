import { Module } from '@nestjs/common';
import { OwnerController } from '../controllers/owner.controller';
import { OwnerService } from '../services/owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../models/owner/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  exports: [TypeOrmModule],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
