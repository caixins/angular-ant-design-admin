import { NgModule } from "@angular/core";
import { ShareModule } from '../../app/share/share.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { RouterModule } from '@angular/router';
import { routes } from '../router';

@NgModule({
    imports:[
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations:[
        LayoutComponent,
        HeaderComponent,
        FullscreenComponent
    ]   
})

export class LayoutModule{}