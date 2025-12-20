import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategoryModule } from './book-category/book-category.module';
import { BookModule } from './book/book.module'; // (ใส่เผื่อไว้เลยครับ จะได้ใช้ Book ได้ด้วย)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'admin',
      password: 'password123',
      database: 'bookstore_dev',
      entities: [], 
      synchronize: true,
      autoLoadEntities: true, // 2. แนะนำให้เติมบรรทัดนี้ ไม่งั้น DB อาจหาตารางไม่เจอ
    }),
    
    // 3. เอามาใส่ตรงนี้
    BookCategoryModule,
    BookModule,
  ],
})
export class AppModule {}


