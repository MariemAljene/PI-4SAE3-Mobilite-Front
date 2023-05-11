import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import {Role, User} from 'app/auth/models';
import { AuthenticationService } from './authentication.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";
import {ConfirmRequest} from "../models/confirmrequest";
import {PasswordResetRequest} from "../models/passwordresetrequest";
import {Image} from "../models/image";

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
   PATH_OF_API = 'http://localhost:8082';
   requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
   httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  constructor(private _http: HttpClient,private _authenticationService:AuthenticationService) {}

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl}/users`,this.httpOptions);
  }

  /**
   * *Get all roles
   */
  getAllRole(){
    return this._http.get<Role[]>(`${environment.apiUrl}/roles`,this.httpOptions);
  }
  getimageById(username:String): Observable<Image> {
    return this._http.get<Image>(this.PATH_OF_API+`/GetById/${username}`, this.httpOptions);
  }
  public updateimage(UserName:any,image:Image):Observable<any> {
    console.log(UserName);
    return this._http.put(this.PATH_OF_API  +'/Updateimage'+UserName,image, this.httpOptions)
        .pipe(
            catchError((error: any) => {
              console.log('Error occurred:', error);
              return throwError(error);
            })
        );
  }



  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  public register(loginData) {
    return this._http.post(this.PATH_OF_API + '/registerNewUser', loginData, {
      headers: this.requestHeader,
    });
  }
  public update(user:User) {
    return this._http.put(this.PATH_OF_API + '/update',user,this.httpOptions);
  }

  public delete(userName:string) {
    return this._http.delete(this.PATH_OF_API + `/delete/${userName}`,this.httpOptions);
  }
  public count() {
    return this._http.get<number>(this.PATH_OF_API + `/count`,this.httpOptions);
  }
  public countoperateur() {
    return this._http.get<number>(this.PATH_OF_API + `/countoperateur`,this.httpOptions);
  }
  public countadmin() {
    return this._http.get<number>(this.PATH_OF_API + `/countadmin`,this.httpOptions);
  }
   activateaccount(confirmRequest: ConfirmRequest): Observable<string> {
     return this._http.post<string>(this.PATH_OF_API +`/activate`, confirmRequest);
   }
  /* public activateaccount(token:string)
   {
     return this._http.put(this.PATH_OF_API + `/activate/${token}`, null);
   }*/
  generatePasswordResetToken(email: string): Observable<any> {
    return this._http.post(this.PATH_OF_API +`/checkEmail`, { email });
  }

  resetPassword(resetRequest: PasswordResetRequest): Observable<any> {
    console.log(resetRequest);
    return this._http.post(this.PATH_OF_API +`/resetPassword`, resetRequest);
  }
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this._authenticationService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
