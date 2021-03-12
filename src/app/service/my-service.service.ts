import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../datatable/src/app/model/api.response";
import {Book} from '../model/book';

const API_URL=`${environment.apiUrl}/books`
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(API_URL);
  }
  getById(id : number):Observable<any>{
    return  this.http.get(API_URL+'/'+id);
  }

  create(book: Book):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(API_URL,book)
  }
  update(id: number,book : Book) :Observable<any>{
    return this.http.put<any>(API_URL+'/'+book.id,book)
  }
  delete(id : number):Observable<ApiResponse>{
    return  this.http.delete(API_URL+'/'+id);
  }

}
