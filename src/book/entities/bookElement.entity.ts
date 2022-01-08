import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class BookElement extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Book, (entity) => entity.id)
  @JoinColumn()
  bookId: string;

  @Column({
    nullable: true,
  })
  userId: string;
}
