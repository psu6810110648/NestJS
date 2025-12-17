import { OnModuleInit } from '@nestjs/common';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';
import { Repository } from 'typeorm';
import { BookCategory } from './entities/book-category.entity';
export declare class BookCategoryService implements OnModuleInit {
    private repo;
    constructor(repo: Repository<BookCategory>);
    onModuleInit(): Promise<void>;
    create(createBookCategoryDto: CreateBookCategoryDto): Promise<CreateBookCategoryDto & BookCategory>;
    findAll(): Promise<BookCategory[]>;
    findOne(id: string): Promise<BookCategory | null>;
    update(id: string, updateBookCategoryDto: UpdateBookCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
