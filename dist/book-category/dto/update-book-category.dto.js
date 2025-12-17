"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_book_category_dto_1 = require("./create-book-category.dto");
class UpdateBookCategoryDto extends (0, mapped_types_1.PartialType)(create_book_category_dto_1.CreateBookCategoryDto) {
}
exports.UpdateBookCategoryDto = UpdateBookCategoryDto;
//# sourceMappingURL=update-book-category.dto.js.map