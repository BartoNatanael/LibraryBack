import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BookModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
