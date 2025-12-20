import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../../book/entities/book.entity'; // Import Book มาเพื่อทำความสัมพันธ์

@Entity()
export class BookCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  // เพิ่มส่วนนี้เพื่อเชื่อมกลับไปที่ Book
  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}