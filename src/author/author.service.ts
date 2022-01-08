import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  create(createAuthorDto: CreateAuthorDto) {
    const { name, lastName, nationality, branch } = createAuthorDto;

    const item = new Author();
    item.name = name;
    item.lastName = lastName;
    item.nationality = nationality;
    item.branch = branch;

    item.save();

    return {
      success: true,
      itemId: item.id,
    };
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
