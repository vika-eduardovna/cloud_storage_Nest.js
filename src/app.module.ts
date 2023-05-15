import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'balarama.db.elephantsql.com',
      port: 3306,
      username: 'vtdrniub',
      password: '0EkRfOaCjFbcZfF4EH1gKoF-cPG7FWvk',
      database: 'vtdrniub',
      entities: [],
      synchronize: true,
    }), UsersModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
