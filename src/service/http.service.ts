import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class HttpService{
    constructor(public http:HttpClient){}

    get(url,params={}):Promise<any>{
        return new  Promise((resolve,reject)=>{
            const header={header:new HttpHeaders().set('Content-Type','x-www-form-urlencodedand'),params};
            this.http.get(url,header).subscribe((res:any)=>{
                if(res){
                    resolve(res)
                }
            },(err:HttpErrorResponse)=>{
                console.log(err)
                reject(err)
            })
        })
    }

    post(url,params={}):Promise<any>{
        return new  Promise((resolve,reject)=>{
            const header={header:new HttpHeaders().set('Content-Type','x-www-form-urlencodedand'),params};
            this.http.post(url,null,header).subscribe((res:any)=>{
                if(res){
                    resolve(res)
                }
            },(err:HttpErrorResponse)=>{
                console.log(err)
                reject(err)
            })
        })
    }
    put(url,params={}):Promise<any>{
        return new  Promise((resolve,reject)=>{
            const header={header:new HttpHeaders().set('Content-Type','x-www-form-urlencodedand'),params};
            this.http.put(url,null,header).subscribe((res:any)=>{
                if(res){
                    resolve(res)
                }
            },(err:HttpErrorResponse)=>{
                console.log(err)
                reject(err)
            })
        })
    }
    delete(url,params={}):Promise<any>{
        return new  Promise((resolve,reject)=>{
            this.http.delete(url,{params}).subscribe((res:any)=>{
                if(res){
                    resolve(res)
                }
            },(err:HttpErrorResponse)=>{
                console.log(err)
                reject(err)
            })
        })
    }
}