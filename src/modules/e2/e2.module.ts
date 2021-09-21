import { Module } from '@nestjs/common';
import { E2Controller } from './e2-controller/e2.controller';
import { E2Service } from './e2-services/e2.service';


@Module({
  imports: [],
  providers: [E2Service],
  controllers: [E2Controller]
})
export class E2Module {}
