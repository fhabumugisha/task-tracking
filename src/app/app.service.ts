import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

sayHello(){
  console.log('calling sayHello');
  return this.http.get<{message : string}>('http://localhost:4200/api');

}
}



