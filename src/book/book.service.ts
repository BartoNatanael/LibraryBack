import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { CreateBookElementDto } from './dto/create-book-element.dto';
import { BookElement } from './entities/bookElement.entity';

@Injectable()
export class BookService {
  create(createBookDto: CreateBookDto) {
    const { name, lang, authorLastName, authorName } = createBookDto;

    const item = new Book();
    item.name = name;
    item.authorLastName = authorLastName;
    item.authorName = authorName;
    item.lang = lang;

    item.save();

    return {
      isSuccess: true,
      id: item.id,
    };
  }

  createBookElement(CreateBookElementDto: CreateBookElementDto) {
    const { bookId } = CreateBookElementDto;

    const item = new BookElement();
    item.bookId = bookId;

    item.save();

    return {
      isSuccess: true,
      id: item.id,
    };
  }

  findAll() {
    return Book.find();
  }

  findOne(id: number) {
    return Book.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
