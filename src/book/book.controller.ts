import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto } from './book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return await this.bookService.findAll();
  }

  @Get(':bookId')
  async findOne(@Param('bookId') bookId: string) {
    return await this.bookService.findOne(bookId);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @Put(':bookId')
  async update(
    @Param('bookId') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return await this.bookService.update(bookId, updateBookDto);
  }

  @Delete(':bookId')
  async remove(@Param('bookId') bookId: string) {
    return await this.bookService.remove(bookId);
  }
}
