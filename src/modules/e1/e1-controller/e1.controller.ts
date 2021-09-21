import { Controller, Get } from '@nestjs/common';
import { E1Service } from '../e1-services/e1.service';

@Controller('e1')
export class E1Controller {
    constructor(private e1Service:E1Service){}

    @Get()
    getInfo():any {
        return this.e1Service.getInformation();
    }
}
