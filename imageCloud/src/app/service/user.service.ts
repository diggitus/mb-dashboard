import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser, User } from '../shared/user';

@Injectable()
export class UserService {

  constructor() { }

  getUser(): Observable<User> {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next({ 'userId': 'test' });
      }, 2000);
    })
      .map((value) => new User(value.userId, '', '', ''));
  }

  getUserObject(): Observable<User> {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next({ 'country': 'DE' });
      }, 2000);
    });
  }

  getUserInterface(): Observable<IUser> {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next({ 'userId': 'test' });
      }, 2000);
    });
  }

}
