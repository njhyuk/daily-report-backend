import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {UserController} from "./user/user.controller";
import {I18nModule} from "nestjs-i18n";
import * as path from "path";
import { ConfigModule } from './config/config.module';
import {ConfigService} from "./config/config.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    I18nModule.forRoot({
      path: path.join(__dirname, '/assets/i18n'),
      filePattern: '*.json',
      fallbackLanguage: 'ko',
    }),
    AuthModule,
    UserModule,
    ConfigModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
