import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from 'src/models/business/entities/business.entity';
import { BusinessController } from '../controllers/business.controller';
import { BusinessService } from '../services/business.service';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  exports: [TypeOrmModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
