import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookReposity } from './book.repository';

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService, BookReposity]
})
export class BookModule {}
