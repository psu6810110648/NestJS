import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BookCategory } from '../../book-category/entities/book-category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  likeCount: number;

  // แก้พารามิเตอร์ตัวที่ 2 ให้ชี้ไปที่ category.books
  @ManyToOne(() => BookCategory, (category) => category.books)
  category: BookCategory;

  @Column({ nullable: true })
  categoryId: string;
}