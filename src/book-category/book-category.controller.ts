import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; // 1. เอา ParseIntPipe ออกจาก import
import { BookCategoryService } from './book-category.service';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';

@Controller('book-category')
export class BookCategoryController {
  constructor(private readonly bookCategoryService: BookCategoryService) {}

  @Post()
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookCategoryService.create(createBookCategoryDto);
  }

  @Get()
  findAll() {
    return this.bookCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) { // 2. เอา ParseIntPipe ออก และส่ง id ตรงๆ
    return this.bookCategoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookCategoryDto: UpdateBookCategoryDto) { // 3. เอา ParseIntPipe และเครื่องหมาย + ออก
    return this.bookCategoryService.update(id, updateBookCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { // 4. เอา ParseIntPipe และเครื่องหมาย + ออก
    return this.bookCategoryService.remove(id);
  }
}