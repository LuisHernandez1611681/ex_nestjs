import { Body, Controller, Post, Req } from '@nestjs/common';
import { E2Model } from 'src/models/e2.interface';
import { E2Service } from '../e2-services/e2.service';

@Controller('e2')
export class E2Controller {
    constructor(private e2Service:E2Service ){}

    @Post()
    getNumberRandom(@Body() @Req() e2Model:E2Model):any {
        let promesa = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.e2Service.sRandomNumbers(e2Model));
            }, e2Model.delay);
        });

        return promesa.then((response) => {
            return response;
        });
    }

}
