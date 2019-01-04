import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { Page404Component } from "./single-page/404/404.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [
    {
        path: '',
        component:LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: "full", },
            { path: 'dashboard',component:DashboardComponent,data:{title:'首页'} },
            { path: '404', component: Page404Component, data: { title: '404' } }
        ]
    },
    { path: 'login', component: LoginComponent, data: { title: '登录' } },
    { path: '**', redirectTo: '404' }
]