import { ChristianityBranch, Nationality } from '../entities/author.entity';

export class CreateAuthorDto {
  name: string;
  lastName: string;
  nationality: Nationality[];
  branch: ChristianityBranch[];
}
