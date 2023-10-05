import { Injectable } from '@nestjs/common';
import { BookReposity } from './book.repository';

@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookReposity) {}

    
}
