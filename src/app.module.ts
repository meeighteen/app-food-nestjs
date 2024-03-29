import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OwnerModule } from './common/modules/owner.module';
import { BusinessModule } from './common/modules/business.module';
import { SectionModule } from './common/modules/section.module';

import { AppConfigModule } from './config/app/config.module';
// import { ApiGraphQLModule } from './config/api/config.module';

import { DatabaseProviderModule } from './providers/database/mongodb/provider.module';
import { ApiGraphQLModule } from './config/api/config.module';

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [
    AppConfigModule,
    DatabaseProviderModule,
    ApiGraphQLModule,
    OwnerModule,
    BusinessModule,
    SectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
