import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 1. ต้องเพิ่มบรรทัดนี้
import { BookCategoryService } from './book-category.service';
import { BookCategoryController } from './book-category.controller';
import { BookCategory } from './entities/book-category.entity'; // 2. ต้องเพิ่มบรรทัดนี้ (Import ชื่อตารางมา)

@Module({
  // 3. ตรง imports คือจุดที่หมายเหตุบอกให้ทำครับ
  imports: [TypeOrmModule.forFeature([BookCategory])],
  controllers: [BookCategoryController],
  providers: [BookCategoryService],
})
export class BookCategoryModule {}