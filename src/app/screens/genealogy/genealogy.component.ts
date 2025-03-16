import { Component, OnInit } from '@angular/core';
import { TableLayoutComponent } from '@components';

@Component({
    selector: 'tt-genealogy',
    templateUrl: './genealogy.component.html',
    styleUrls: ['./genealogy.component.css'],
    standalone: true,
    imports: [
        TableLayoutComponent,
    ],
})
export class GenealogyComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
