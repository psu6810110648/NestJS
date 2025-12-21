import { UserRole } from '../entities/user.entity';
// 1. ต้อง Import ของพวกนี้มาจาก class-validator ไม่งั้นพัง
import { IsEmail, IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsEmail() // ต้องเป็นรูปแบบอีเมล
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // 2. เพิ่ม name เข้าไป (เพราะใน Postman คุณส่ง name มา)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional() // บอกว่าเป็นตัวเลือก (ใส่หรือไม่ใส่ก็ได้)
  @IsEnum(UserRole) // (Optional) ตรวจว่าเป็น Role ที่มีจริงไหม
  role?: UserRole; 
}