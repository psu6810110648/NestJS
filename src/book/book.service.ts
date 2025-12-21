import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { User } from '../users/entities/user.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto);
  }

  findAll() {
    return this.bookRepository.find({ relations: ['category'] });
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.bookRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const book = await this.findOne(id);
    return this.bookRepository.remove(book);
  }
//เพิ่มฟังก์ชัน toggleLike
  async toggleLike(bookId: string, userId: string) {
    const book = await this.bookRepository.findOne({
      where: { id: bookId },
      relations: ['likedBy'],
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    const userIndex = book.likedBy.findIndex((user) => user.id === userId);

    if (userIndex >= 0) {
      book.likedBy.splice(userIndex, 1);
      book.likeCount = Math.max(0, book.likeCount - 1);
    } else {
      const user = { id: userId } as User;
      book.likedBy.push(user);
      book.likeCount++;
    }

    return this.bookRepository.save(book);
  }
}