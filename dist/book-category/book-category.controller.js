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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryController = void 0;
const common_1 = require("@nestjs/common");
const book_category_service_1 = require("./book-category.service");
const create_book_category_dto_1 = require("./dto/create-book-category.dto");
const update_book_category_dto_1 = require("./dto/update-book-category.dto");
let BookCategoryController = class BookCategoryController {
    bookCategoryService;
    constructor(bookCategoryService) {
        this.bookCategoryService = bookCategoryService;
    }
    create(createBookCategoryDto) {
        return this.bookCategoryService.create(createBookCategoryDto);
    }
    findAll() {
        return this.bookCategoryService.findAll();
    }
    findOne(id) {
        return this.bookCategoryService.findOne(id);
    }
    update(id, updateBookCategoryDto) {
        return this.bookCategoryService.update(id, updateBookCategoryDto);
    }
    remove(id) {
        return this.bookCategoryService.remove(id);
    }
};
exports.BookCategoryController = BookCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_category_dto_1.CreateBookCategoryDto]),
    __metadata("design:returntype", void 0)
], BookCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_category_dto_1.UpdateBookCategoryDto]),
    __metadata("design:returntype", void 0)
], BookCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookCategoryController.prototype, "remove", null);
exports.BookCategoryController = BookCategoryController = __decorate([
    (0, common_1.Controller)('book-category'),
    __metadata("design:paramtypes", [book_category_service_1.BookCategoryService])
], BookCategoryController);
//# sourceMappingURL=book-category.controller.js.map