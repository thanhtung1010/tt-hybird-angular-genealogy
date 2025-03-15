import { Component, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
    selector: 'tt-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.css'],
    standalone: true,
    imports: [NzBreadCrumbModule],
})
export class FamilyComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
