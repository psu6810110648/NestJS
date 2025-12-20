import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive, Min, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  coverUrl?: string;

  @IsUUID() // ใช้ IsUUID เพื่อเช็คว่าเป็นรหัสแบบ UUID จริงๆ
  @IsNotEmpty()
  categoryId: string; // เปลี่ยนเป็น string
}
