import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/auth/loginModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/auth/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://127.0.0.1:7117/api/";

  // https://127.0.0.1:7117/api/Auth/login

  constructor(
    private httpClient:HttpClient
    ) { }

    login(loginModel:LoginModel){
      return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Auth/login",loginModel);
    }
    isAuthenticated(){
      if(localStorage.getItem("token")){ // localStorage ? 
        return true;
      } else {
        return false;
      }
    }
   
}
