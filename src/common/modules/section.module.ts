import { Module } from '@nestjs/common';
import { SectionService } from '../services/section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from 'src/models/section/entities/section.entity';
import { SectionResolver } from '../resolvers/section.resolver';
import { Business } from 'src/models/business/entities/business.entity';
import { Owner } from 'src/models/owner/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section, Business, Owner])],
  exports: [SectionResolver],
  providers: [SectionService, SectionResolver],
})
export class SectionModule {}
