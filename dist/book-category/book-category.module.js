"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_category_service_1 = require("./book-category.service");
const book_category_controller_1 = require("./book-category.controller");
const book_category_entity_1 = require("./entities/book-category.entity");
let BookCategoryModule = class BookCategoryModule {
};
exports.BookCategoryModule = BookCategoryModule;
exports.BookCategoryModule = BookCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([book_category_entity_1.BookCategory])],
        controllers: [book_category_controller_1.BookCategoryController],
        providers: [book_category_service_1.BookCategoryService],
    })
], BookCategoryModule);
//# sourceMappingURL=book-category.module.js.map