import { Injectable } from '@nestjs/common';
import { BookReposity } from './book.repository';
import { Book } from './Model/book.model';

@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookReposity) { }

    getAllBook() {
        return this.bookRepository.getAll();
    }

    getBookById(id: number) {
        return this.bookRepository.getById(id);
    }

    createBook(book: Book) {
        return this.bookRepository.create(book)
    }

    updateBook(book: Book) {
        return this.bookRepository.update(book)
    }

    deleteBook(id: number) {
        return this.bookRepository.delete(id)
    }
}
