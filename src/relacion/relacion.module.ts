import { Module } from '@nestjs/common';
import { RelacionService } from './relacion.service';
import { RelacionController } from './relacion.controller';

@Module({
  controllers: [RelacionController],
  providers: [RelacionService]
})
export class RelacionModule {}
