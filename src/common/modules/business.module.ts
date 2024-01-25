import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BusinessController } from '../controllers/business.controller';
import { BusinessService } from '../services/business.service';

import { Business } from 'src/models/business/entities/business.entity';
import { Owner } from 'src/models/owner/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business, Owner])],
  exports: [TypeOrmModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
