import { Injectable } from "@angular/core";
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()

export class CommonService{
    constructor(
        private notification:NzNotificationService
    ){}

    showNotification(title:string,content,type='info',duration=2000){
        title=title?title:'提示信息';
        this.notification.create(type,title,content,{
            nzDuration:duration
        })
    }
}