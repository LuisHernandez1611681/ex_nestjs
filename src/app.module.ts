import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';
import { E1Module } from './modules/e1/e1.module';
import { E2Module } from './modules/e2/e2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    E1Module,
    E2Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
