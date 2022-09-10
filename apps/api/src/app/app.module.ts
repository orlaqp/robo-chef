import { Module } from '@nestjs/common';
import { ApiSearchModule } from '@robo-chef/api/search';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    ApiSearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
