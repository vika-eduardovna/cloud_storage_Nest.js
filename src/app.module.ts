import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, FileEntity],
      synchronize: true,
    }), UsersModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
