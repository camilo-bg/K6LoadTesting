import http from 'k6/http'
import { sleep, check } from 'k6'

export let options ={
     stages:[
        {duration: '30s' , target: 500},
        {duration: '30s' , target: 1000},
        { duration: '200s' , target: 1000 },
        {duration: '30s' , target: 500},
     ]
}

export default function()
{
    var result = http.get('https://sinco.bitakora.co/');
    check(result,{
         'status was 200': r => r.status == 200
    })
    sleep(1);
}