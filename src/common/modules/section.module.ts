import { Module } from '@nestjs/common';
import { SectionService } from '../services/section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionController } from '../controllers/section.controller';
import { Section } from 'src/models/section/entities/section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  exports: [TypeOrmModule],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
