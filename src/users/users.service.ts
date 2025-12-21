import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // ใช้สำหรับเข้ารหัส

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // ทำงานทันทีเมื่อ Module ถูกโหลด (สร้าง Admin ถ้ายังไม่มี)
  async onModuleInit() {
    const admin = await this.findOneByEmail('admin@bookstore.com');
    if (!admin) {
      console.log('Seeding Admin User...');
      await this.create({
        email: 'admin@bookstore.com',
        password: 'adminpassword',
        role: UserRole.ADMIN,
      } as any);
    }
  }

  // ฟังก์ชันสร้าง User พร้อมเข้ารหัสรหัสผ่าน
  async create(createUserDto: CreateUserDto) {
    // 1. สร้าง Salt และ Hash Password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    // 2. สร้าง User instance และแทนที่ password ด้วยตัวที่ Hash แล้ว
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    // 3. บันทึกลง Database
    return this.userRepository.save(user);
  }

  // ฟังก์ชันหา User ด้วย Email
  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  // ฟังก์ชันอื่นๆ ที่ NestJS สร้างมาให้ (คงไว้ก่อน)
  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}