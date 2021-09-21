import { Injectable } from '@nestjs/common';
import { E2Model } from 'src/models/e2.interface';

@Injectable()
export class E2Service {
    constructor() {}

    async sRandomNumbers(pbody:E2Model){
        if(pbody.delay == null || pbody.qty == null) {
            return {
                'statusCode': 400,
                'message': 'Bad request'
            }
        }

        let array = Array.from({length: pbody.qty}, () => Math.floor(Math.random()*100));
        let arrPar = [];
        let arrImpar = [];

        array.forEach(element => {
            if(element%2){
                arrImpar.push(element);
            } else {
                arrPar.push(element);
            }
        });

        return await {
            "even": (arrPar.sort((a,b) => a-b)),
            "odd": (arrImpar.sort((a,b) => a-b))
        };
    }
}
