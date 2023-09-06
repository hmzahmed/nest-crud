import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
const ormSettings = require('../ormconfig.json');
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormSettings, autoLoadEntities: true }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
