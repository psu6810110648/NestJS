import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookCategory } from '../book-category/entities/book-category.entity';
import { Book } from '../book/entities/book.entity';
export declare class FixturesService implements OnModuleInit {
    private bookCategoryRepository;
    private bookRepository;
    private readonly logger;
    constructor(bookCategoryRepository: Repository<BookCategory>, bookRepository: Repository<Book>);
    onModuleInit(): Promise<void>;
    loadFixtures(): Promise<void>;
    private createCategories;
    private createBooks;
}
