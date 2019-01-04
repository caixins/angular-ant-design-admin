import { NgModule } from "@angular/core";
import { ShareModule } from '../../app/share/share.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

@NgModule({
    imports:[
        ShareModule
    ],
    declarations:[
        LayoutComponent,
        HeaderComponent,
        FullscreenComponent
    ]   
})

export class LayoutModule{}