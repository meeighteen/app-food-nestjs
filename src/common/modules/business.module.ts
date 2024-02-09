import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BusinessService } from '../services/business.service';

import { Business } from 'src/models/business/entities/business.entity';
import { Owner } from 'src/models/owner/entities/owner.entity';
import { BusinessResolver } from '../resolvers/business.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Business, Owner])],
  exports: [TypeOrmModule, BusinessResolver],
  providers: [BusinessService, BusinessResolver],
})
export class BusinessModule {}
