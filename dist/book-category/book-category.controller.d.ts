import { BookCategoryService } from './book-category.service';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';
export declare class BookCategoryController {
    private readonly bookCategoryService;
    constructor(bookCategoryService: BookCategoryService);
    create(createBookCategoryDto: CreateBookCategoryDto): Promise<CreateBookCategoryDto & import("./entities/book-category.entity").BookCategory>;
    findAll(): Promise<import("./entities/book-category.entity").BookCategory[]>;
    findOne(id: string): Promise<import("./entities/book-category.entity").BookCategory | null>;
    update(id: string, updateBookCategoryDto: UpdateBookCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
