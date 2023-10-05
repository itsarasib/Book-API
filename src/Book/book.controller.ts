import { Body, Controller, Get, Logger, Param, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Model/book.model';

@Controller('book')
export class BookController {
    private readonly logger: Logger
    constructor(private readonly bookService: BookService) {
        this.logger = new Logger('Book Controller')
    }

    @Get()
    async getAllBook(): Promise<Book[]> {
        return this.bookService.getAllBook();
    }

    @Get('/getById')
    async getBookById(@Query('id') id: number): Promise<Book> {
        return this.bookService.getBookById(id);
    }

    @Get('/delete/:id')
    async getDeleteBook(@Param() { id }: { id: number }): Promise<{ message: string }> {
        this.logger.log(`deleting id ${JSON.stringify(id)}`)
        this.bookService.deleteBook(id)
        return {
            message: "delete succesfully"
        }
    }

    @Post()
    async createBook(@Body() book: any): Promise<Book> {
        this.logger.log(`creating book ${JSON.stringify(book)} `)
        return this.bookService.createBook(book)
    }
}
