import { Module } from '@nestjs/common';
import { ApiSearchModule } from '@robo-chef/api/search';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
