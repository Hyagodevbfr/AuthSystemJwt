import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;
  private tokenKey ='token'

  constructor(private http:HttpClient) { }

  Login(data:LoginRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}account/login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey, response.token)
        }
        return response;
      })
    );
  }
}
