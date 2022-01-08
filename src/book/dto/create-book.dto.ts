import { BookLang } from '../entities/book.entity';

export class CreateBookDto {
  name: string;
  authorLastName: string;
  authorName: string;
  lang: BookLang;
}
