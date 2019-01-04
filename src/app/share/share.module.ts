import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        BrowserModule
    ],
    exports:[
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        BrowserModule
    ]
})

export class ShareModule{}