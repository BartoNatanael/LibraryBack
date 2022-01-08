import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ChristianityBranch {
  PROTESTANT = 'PROTESTANT',
  LUTHERANISM = 'LUTHERANISM',
  CALVINISM = 'CALVINISM',
  PRESBITERIANISM = 'PRESBITERIANIZM',
  BAPTISM = 'BAPTISM',
  EVANGELICALISM = 'EVANGELICALISM',
  ANGLICANISM = 'ANGLICANISM',
  CATHOLICISM = 'CATHOLICISM',
}

export enum Nationality {
  POLISH = 'POLISH',
  GERMAN = 'GERMAN',
  ENGLISH = 'ENGLISH',
  AMERICAN = 'AMERICAN',
  JEWISH = 'JEWISH',
  FRENCH = 'FRENCH',
  OTHER = 'OTHER',
}

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Nationality,
    default: [],
  })
  nationality: Nationality[];

  @Column({
    type: 'enum',
    enum: ChristianityBranch,
    default: [],
  })
  branch: ChristianityBranch[];
}
