import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { BookReposity } from './book/book.repository';

@Module({
  imports: [BookModule],
  controllers: [AppController, BookController],
  providers: [AppService, BookService, BookReposity],
})
export class AppModule {}
