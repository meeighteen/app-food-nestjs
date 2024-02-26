import { Module } from '@nestjs/common';
import { OwnerService } from '../services/owner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../../models/owner/entities/owner.entity';
import { OwnerResolver } from '../resolvers/owner.resolver';
import { Section } from 'src/models/section/entities/section.entity';
import { Business } from 'src/models/business/entities/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner, Section, Business])],
  exports: [OwnerResolver],
  providers: [OwnerService, OwnerResolver],
})
export class OwnerModule {}
