import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable()

export class LoginSerive extends HttpService {
    doLogin(params: any = {}) {
        let url='/assets/template/menu.json';
        return new Promise((resolve, reject) => {
            if (params.userName != 'admin' || params.password !== "admin") {
                resolve({
                    success: false,
                    msg: '账号或密码错误！'
                })
            } else {
                resolve({
                    success: true,
                    token:'aGEd22585_d541Gdegew'
                })
            }
        })
        // return this.get(url, params)
    }
}   