import { NgModule } from "@angular/core";
import { ShareModule } from "../../app/share/share.module";

import { LoginComponent } from "./login.component";
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    imports:[
        ShareModule
    ],
    declarations:[
        LoginComponent
    ]
})

export class LoginModule{}