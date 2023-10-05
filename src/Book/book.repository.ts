import { Injectable } from '@nestjs/common';
import { Book } from './Model/book.model';
import { books } from './Mock/mockBook';

@Injectable()
export class BookReposity {
    private books: Book[]

    constructor() {
        this.books = books
    }

    getAll(): Book[] {
        return this.books
    }

    getById(id: number): Book {
        return this.books.find(book => book.id == id)
    }

    create(book: Book): Book {
        this.books.push(book)
        return book
    }

    update(book: Book): Book {
        const idx = this.books.findIndex(book => book.id == book.id)
        this.books[idx] = book
        return book
    }

    delete(id: number): void {
        this.books = this.books.filter(book => book.id != id)
    }
}
