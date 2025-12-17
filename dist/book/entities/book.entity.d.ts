import { BookCategory } from '../../book-category/entities/book-category.entity';
export declare class Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    isbn: string;
    stock: number;
    coverUrl: string;
    likeCount: number;
    category: BookCategory;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
}
