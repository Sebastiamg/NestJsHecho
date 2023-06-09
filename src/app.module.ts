import { Module } from '@nestjs/common';
import { RelacionModule } from './relacion/relacion.module';

@Module({
  imports: [RelacionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
