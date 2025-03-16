import { Component, Inject, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AvatarComponent } from '@components';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MENU } from '@enums';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemDto, MenuService } from 'common-service';

@Component({
    selector: 'tt-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [
        NzIconModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzMenuModule,
        NzButtonModule,
        NzDividerModule,
        NzToolTipModule,
        AvatarComponent,
        TranslateModule,
        CommonModule,
        RouterModule,
    ],
})
export class LayoutComponent implements OnInit {
    isCollapsed = false;
    menu: Array<MenuItemDto> = [];
    breadcrumb: Array<string> = [];

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.menu = this.menuService.menu.value;
        this.breadcrumb = this.menuService.breadcrumb.value;
        this.menuService.breadcrumb.subscribe(resp => {
            this.breadcrumb = resp;
        });
    }
}
