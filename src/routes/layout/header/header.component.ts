import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-pages-header',
    templateUrl:'./header.component.html',
})

export class HeaderComponent{
    @Input() isCollapsed:any;
    @Output() isCollapsedChange:EventEmitter<any>=new EventEmitter<any>();
    constructor(){}
    change(){
        this.isCollapsed=!this.isCollapsed;
        this.isCollapsedChange.emit(this.isCollapsed)
    }
}