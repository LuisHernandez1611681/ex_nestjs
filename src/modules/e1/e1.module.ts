import { Module } from '@nestjs/common';
import { E1Service } from './e1-services/e1.service';
import { E1Controller } from './e1-controller/e1.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [E1Service],
  controllers: [E1Controller]
})
export class E1Module {}
