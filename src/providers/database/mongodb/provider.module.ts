import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../../../models/owner/entities/owner.entity';
import { Business } from 'src/models/business/entities/business.entity';
import { Section } from 'src/models/section/entities/section.entity';

/**
 * Import and provide database typeorm(mongodb) related classes.
 *
 * @module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URI,
      entities: [Owner, Business, Section],
      synchronize: true,
      logging: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class DatabaseProviderModule {}
