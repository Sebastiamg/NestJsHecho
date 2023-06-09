import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './abstract.entity';
import { Directors } from './director.entity';

enum GENRE {
  ACTION = 'action',
  DRAMA = 'drama',
  TERROR = 'terror',
  THRILLER = 'thriller',
  ANIMATED = 'animated',
}

@Entity('movies')
export class Movies extends BaseEntity {
  @Column({
    type: 'enum',
    enum: GENRE,
  })
  genre: GENRE;

  @Column('number')
  duration: number;

  @Column('float')
  budget: number;

  @OneToOne(() => Directors, (director) => director.movies)
  @JoinColumn({ name: 'directo_id' })
  director: Directors;
}
