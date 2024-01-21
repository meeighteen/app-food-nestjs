import { Module } from '@nestjs/common';
import { SectionService } from '../services/section.service';

@Module({
  providers: [SectionService],
})
export class SectionModule {}
