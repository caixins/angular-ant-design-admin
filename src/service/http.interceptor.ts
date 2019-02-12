import { Injectable,Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor{

    constructor(
        private injector:Injector
    ){}

    getToken(){
        return sessionStorage.getItem('_authToken');
    }

    goPage(path:string){
        this.injector.get(Router).navigate([path])
    }
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let newReq=req.clone({
            setHeaders:{
                Authorization:this.getToken()
            }
        })
        return next.handle(newReq)
        .pipe(catchError((res:HttpErrorResponse)=>{
            switch(res.status){
                case 401:
                    sessionStorage.clear();
                    this.goPage('/login');
                    break;
                case 405:
                    this.goPage('/405');
                    break;
                case 500:
                    if(!environment.production){
                        alert('服务器错误:'+res.error.msg)
                    }else{
                        alert('服务器错误，请联系管理员')
                    };
                    break;
                default:
                    alert('链接错误，请检查网络')
                }
            return Observable.throw(null)
        }))
    }
}