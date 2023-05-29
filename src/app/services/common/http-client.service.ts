import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $:any
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }
  private url(requestParameters: Partial<RequestParameters>): string{
return `${requestParameters.baseUrl ? requestParameters.baseUrl: this.baseUrl}/${requestParameters.controller}/${requestParameters.action}`
  }
  get<T>(requestParameters: Partial<RequestParameters>){
    let url: string ="";
    url = `${this.baseUrl}/${requestParameters.controller}/${requestParameters.action}`

  }
  post(){

  }
  put(){

  }
  delete(){

  }
}
export class RequestParameters{
controller? : string;
action? : string;
headers?: HttpHeaders;
baseUrl?: string;
fullEndPoint?: string;
}
