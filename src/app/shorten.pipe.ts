import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number){ //magari anche una lista di parametri
        if(value.length > limit)
            return value.substr(0, limit) + ' ...';
        else
            return value;
    }
}