import { PartialType } from '@nestjs/mapped-types';
import { CreateRelacionDto } from './create-relacion.dto';

export class UpdateRelacionDto extends PartialType(CreateRelacionDto) {}
