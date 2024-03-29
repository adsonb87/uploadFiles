import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { config } from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [FilesModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
