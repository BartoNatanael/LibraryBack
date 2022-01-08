import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BookLang {
  PL = 'PL',
  EN = 'EN',
}

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  authorLastName: string;

  @Column()
  authorName: string;

  @Column({
    type: 'enum',
    enum: BookLang,
    default: BookLang.PL,
  })
  lang: BookLang;
}
