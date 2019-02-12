import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSerive } from '../../service/login.service';
import { CommonService } from '../../service/common.service';

@Component({
    selector: "app-pages-login",
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[LoginSerive,CommonService]
})

export class LoginComponent implements OnInit {

    validateForm: FormGroup = null;

    constructor(
        private fb: FormBuilder,
        private router:Router,
        private service:LoginSerive,
        private common:CommonService
    ) { 
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    ngOnInit() {

    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.service.doLogin(this.validateForm.value).then((res:any)=>{
            if(res.success){
                sessionStorage.setItem('_authToken',res.token);
                this.router.navigate(['/dashboard']);
            }else{
                this.common.showNotification(null,res.msg,'error')
            }
        })
        
    }
}