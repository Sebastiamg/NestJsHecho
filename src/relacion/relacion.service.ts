import { Injectable } from '@nestjs/common';
import { CreateRelacionDto } from './dto/create-relacion.dto';
import { UpdateRelacionDto } from './dto/update-relacion.dto';

@Injectable()
export class RelacionService {
  create(createRelacionDto: CreateRelacionDto) {
    return 'This action adds a new relacion';
  }

  findAll() {
    return `This action returns all relacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relacion`;
  }

  update(id: number, updateRelacionDto: UpdateRelacionDto) {
    return `This action updates a #${id} relacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} relacion`;
  }
}
