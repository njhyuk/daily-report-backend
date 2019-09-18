import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {UserController} from "./user/user.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '10.19.243.99',
      port: 27017,
      username: 'user',
      password: 'test1234',
      database: 'dailyReport',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
