import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class E1Service {
    constructor(private httpService: HttpService,
                private configService: ConfigService){}

    async getInformation(){
        return this.httpService.get(this.configService.get<string>('url')).pipe(map((res) => {

            let objeto = {
                'appName': this.configService.get<string>('app_name'),
                'time': (new Date(res.data['time']['updated']).getTime()/1000),
                'rateUSD': res.data['bpi']['USD']['rate_float']
            };
            return objeto;

        }));
    }
}