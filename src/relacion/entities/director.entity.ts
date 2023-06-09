import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './abstract.entity';
import { Movies } from './movies.entity';

@Entity('directors')
export class Directors extends BaseEntity {
  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column()
  movieQuantity: number;

  @OneToMany(() => Movies, (movie) => movie.director)
  movies: Movies[];
}
