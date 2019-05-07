﻿import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable()
export class UserService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get(username: string) {
        if (username == this.currentUserValue.username)
            return this.http.get<any>(`${environment.apiUrl}/api/userdetail`);
        else
            return this.http.get<any>(`${environment.apiUrl}/api/user`, {params: {'username': username}});
    }

    checkFriend(username: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/checkfriend`, {params: {'username': username}});
    }

    register(user: User) {
        return this.http.post<any>(`${environment.apiUrl}/auth/createuser`, user);
    }

    updateProfile(user: User) {
        return this.http.post(`${environment.apiUrl}/api/modify`, user);
    }

    updateAvatar(avt: FormData) {
        return this.http.post(`${environment.apiUrl}/api/avatarupload`, avt);
    }

    addFriend(username: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/requestfriend`, {params: {'username': username}});
    }

    rejectFriend(username: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/rejectfriend`, {params: {'username': username}});
    }

    acceptFriend(username: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/acceptfriend`, {params: {'username': username}});
    }

    checkvalid(username: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/checkvaliduser`, ({username}));
    }

    search(keyword: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/search`, {params: {'q': keyword}});
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    user.username = username;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
