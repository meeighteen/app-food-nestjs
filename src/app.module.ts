import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './owner/owner.module';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { SectionModule } from './section/section.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'meeighteen',
      password: 'qzwlDcEiu9CQzcvx',
      database: 'app-food',
      entities: [],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    // MongooseModule.forRoot(process.env.DB_URI),
    OwnerModule,
    BusinessModule,
    SectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
