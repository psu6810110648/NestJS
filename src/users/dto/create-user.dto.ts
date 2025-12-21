import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  email: string;
  password: string;
  role?: UserRole; // เครื่องหมาย ? แปลว่าเป็นตัวเลือก (ใส่หรือไม่ใส่ก็ได้)
}