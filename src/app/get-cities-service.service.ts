import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesServiceService {

  endpoint = "https://indian-cities-api-nocbegfhqg.now.sh";
  constructor(private httpClient: HttpClient) {}

  getCitiesData(){
    return this.httpClient.get(this.endpoint+'/cities')
  }
}
