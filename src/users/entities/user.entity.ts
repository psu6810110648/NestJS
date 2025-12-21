import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from'typeorm';
import { Book } from '../../book/entities/book.entity';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string; 
    @CreateDateColumn()
    createdAt: Date;
    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToMany(() => Book, (book) => book.likedBy)
    likedBooks: Book[];
}