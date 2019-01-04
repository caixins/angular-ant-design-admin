import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePageModule } from "./single-page/single.module";
import { LoginModule } from "./login/login.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { routes } from "./router";
import { LayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        SinglePageModule,
        LoginModule,
        LayoutModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
