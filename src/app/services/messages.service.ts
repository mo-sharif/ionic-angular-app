import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Messages } from '../classes/messages';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

private _messagesURL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

getMessages(): Observable<Messages[]> {

return this.http
  .get(this._messagesURL)
  .pipe(
    map((response: Response) => {
    return <Messages[]>response.json();
  },
  err => {
    this.handleError(err.message);
  })
  )
}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}

}