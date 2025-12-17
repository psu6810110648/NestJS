"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var FixturesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_category_entity_1 = require("../book-category/entities/book-category.entity");
const book_entity_1 = require("../book/entities/book.entity");
let FixturesService = FixturesService_1 = class FixturesService {
    bookCategoryRepository;
    bookRepository;
    logger = new common_1.Logger(FixturesService_1.name);
    constructor(bookCategoryRepository, bookRepository) {
        this.bookCategoryRepository = bookCategoryRepository;
        this.bookRepository = bookRepository;
    }
    async onModuleInit() {
        if (process.env.NODE_ENV === 'production') {
            this.logger.warn('Fixtures are disabled in production mode');
            return;
        }
        this.logger.log('Running fixtures in development mode...');
        await this.loadFixtures();
    }
    async loadFixtures() {
        try {
            const categories = await this.createCategories();
            await this.createBooks(categories);
            this.logger.log('Fixtures loaded successfully!');
        }
        catch (error) {
            this.logger.error('Error loading fixtures:', error.message);
        }
    }
    async createCategories() {
        this.logger.log('Creating book categories...');
        const categoriesData = [
            {
                name: 'Fiction',
                description: 'Fictional stories and novels',
            },
            {
                name: 'Science Fiction',
                description: 'Science fiction and fantasy books',
            },
            {
                name: 'Non-Fiction',
                description: 'Educational and informational books',
            },
            {
                name: 'Programming',
                description: 'Software development and programming books',
            },
            {
                name: 'Biography',
                description: 'Life stories and memoirs',
            },
        ];
        const categories = [];
        for (const data of categoriesData) {
            const category = this.bookCategoryRepository.create(data);
            const saved = await this.bookCategoryRepository.save(category);
            categories.push(saved);
        }
        this.logger.log(`Created ${categories.length} categories`);
        return categories;
    }
    async createBooks(categories) {
        this.logger.log('Creating books...');
        const booksData = [
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'A classic American novel set in the Jazz Age',
                price: 12.99,
                isbn: '978-0743273565',
                stock: 50,
                coverUrl: '/images/books/great-gatsby.jpg',
                likeCount: 156,
                categoryId: categories[0].id,
            },
            {
                title: '1984',
                author: 'George Orwell',
                description: 'A dystopian social science fiction novel',
                price: 14.99,
                isbn: '978-0451524935',
                stock: 75,
                coverUrl: '/images/books/1984.jpg',
                likeCount: 203,
                categoryId: categories[0].id,
            },
            {
                title: 'Dune',
                author: 'Frank Herbert',
                description: 'A science fiction masterpiece',
                price: 18.99,
                isbn: '978-0441172719',
                stock: 40,
                coverUrl: '/images/books/dune.jpg',
                likeCount: 342,
                categoryId: categories[1].id,
            },
            {
                title: 'The Martian',
                author: 'Andy Weir',
                description: 'A stranded astronaut must survive on Mars',
                price: 15.99,
                isbn: '978-0553418026',
                stock: 60,
                coverUrl: '/images/books/martian.jpg',
                likeCount: 189,
                categoryId: categories[1].id,
            },
            {
                title: 'Sapiens',
                author: 'Yuval Noah Harari',
                description: 'A brief history of humankind',
                price: 22.99,
                isbn: '978-0062316097',
                stock: 100,
                coverUrl: '/images/books/sapiens.jpg',
                likeCount: 427,
                categoryId: categories[2].id,
            },
            {
                title: 'Clean Code',
                author: 'Robert C. Martin',
                description: 'A handbook of agile software craftsmanship',
                price: 45.99,
                isbn: '978-0132350884',
                stock: 30,
                coverUrl: '/images/books/clean-code.jpg',
                likeCount: 512,
                categoryId: categories[3].id,
            },
            {
                title: 'The Pragmatic Programmer',
                author: 'David Thomas, Andrew Hunt',
                description: 'Your journey to mastery',
                price: 42.99,
                isbn: '978-0135957059',
                stock: 25,
                coverUrl: '/images/books/pragmatic-programmer.jpg',
                likeCount: 391,
                categoryId: categories[3].id,
            },
            {
                title: 'Design Patterns',
                author: 'Gang of Four',
                description: 'Elements of reusable object-oriented software',
                price: 54.99,
                isbn: '978-0201633610',
                stock: 20,
                coverUrl: '/images/books/design-patterns.jpg',
                likeCount: 284,
                categoryId: categories[3].id,
            },
            {
                title: 'Steve Jobs',
                author: 'Walter Isaacson',
                description: 'The exclusive biography',
                price: 19.99,
                isbn: '978-1451648539',
                stock: 45,
                coverUrl: '/images/books/steve-jobs.jpg',
                likeCount: 267,
                categoryId: categories[4].id,
            },
            {
                title: 'Educated',
                author: 'Tara Westover',
                description: 'A memoir about education and self-invention',
                price: 16.99,
                isbn: '978-0399590504',
                stock: 55,
                coverUrl: '/images/books/educated.jpg',
                likeCount: 198,
                categoryId: categories[4].id,
            },
        ];
        for (const data of booksData) {
            const book = this.bookRepository.create(data);
            await this.bookRepository.save(book);
        }
        this.logger.log(`Created ${booksData.length} books`);
    }
};
exports.FixturesService = FixturesService;
exports.FixturesService = FixturesService = FixturesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_category_entity_1.BookCategory)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FixturesService);
//# sourceMappingURL=fixtures.service.js.map