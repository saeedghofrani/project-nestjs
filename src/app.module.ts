import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { Users, UsersSchema } from './users/users.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/project-nest'), MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
