import { Book } from '../../book/entities/book.entity';
export declare class BookCategory {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    books: Book[];
}
