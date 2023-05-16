import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'balarama.db.elephantsql.com',
      port: 5432,
      username: 'vtdrniub',
      password: 'dDlq4nkLOjgDWkYQubzJksNf7402WwQw',
      database: 'vtdrniub',
      entities: [UserEntity, FileEntity],
      synchronize: true,
    }), UsersModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
