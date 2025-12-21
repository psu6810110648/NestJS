import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

import { CurrentUser } from '../auth/current-user.decorator';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 🔒 Admin Only: สร้างหนังสือ (ต้องเป็น Admin เท่านั้น)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  // 📖 Public: ใครก็ดูได้
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  // 📖 Public: ใครก็ดูได้
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id); // ⚠️ เช็คด้วยว่าใน Service รับเป็น string หรือ number (ถ้า number ให้ใช้ +id)
  }

// ❤️ User Feature: Toggle Like (กดซ้ำเพื่อ Un-like)
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/like')
  async toggleLike(@Param('id') id: string, @CurrentUser() user: any) {
    console.log(user);
    return this.bookService.toggleLike(id, user.userId);
  }
  // 🔒 Admin Only: แก้ไขข้อมูล (ต้องเป็น Admin เท่านั้น)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  // 🔒 Admin Only: ลบหนังสือ (ต้องเป็น Admin เท่านั้น)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}