import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http: HttpClient) {}

saveEnquiry(data){
  return this.http.post(`${baseUrl}create`,data);
}

get(){
  return this.http.get(baseUrl);
}

search(data){
  return this.http.post(`${baseUrl}search`,data);
}

}