import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Messages } from '../classes/messages';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MessagesService {
public _messages$: Observable<Messages[]>
private _messagesURL = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

getMessages(): Observable<Messages[]> {

  return this.http.get<Messages[]>(this._messagesURL)
}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}

}