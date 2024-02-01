import { Module } from '@nestjs/common';
import { SectionService } from '../services/section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from 'src/models/section/entities/section.entity';
import { SectionResolver } from '../resolvers/section.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  exports: [TypeOrmModule, SectionResolver],
  providers: [SectionService, SectionResolver],
})
export class SectionModule {}
