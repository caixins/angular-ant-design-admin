
import { Injectable } from "@angular/core";

interface Menu {

    text: string,//文本
    
    icon?: string,//图标
    
    link?: string,//路由控制
    
    children?: Menu[],//子节点
    
    level?: number,//层级
    
    dosc?: string,//描述

}

@Injectable()

export class MenuService {
    private menuList: Menu[] = [];


    get menus() {
        return this.menus
    }
    refresh(menu: Menu[] = []) {
        this.menuList = menu
    }
}