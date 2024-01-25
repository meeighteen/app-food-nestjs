import { Module } from '@nestjs/common';
import { OwnerService } from '../services/owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../../models/owner/entities/owner.entity';
import { OwnerResolver } from '../resolvers/owner.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  exports: [TypeOrmModule, OwnerResolver],
  providers: [OwnerService, OwnerResolver],
})
export class OwnerModule {}
